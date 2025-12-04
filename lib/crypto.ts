/**
 * JAIC Cryptographic Services
 * AES-256-GCM encryption for evidence files
 * Aligned with Master Brief security principles
 */

export interface EncryptedFile {
  encryptedData: string;
  iv: string;
  authTag: string;
  algorithm: 'AES-256-GCM';
  timestamp: string;
}

export interface EncryptionMetadata {
  originalName: string;
  size: number;
  mimeType: string;
  uploadedAt: string;
  encryptedBy: string;
}

/**
 * Browser-based AES-256-GCM encryption
 * Uses Web Crypto API for secure client-side encryption
 */
export async function encryptFile(
  file: File,
  encryptionKey?: CryptoKey
): Promise<{ encrypted: EncryptedFile; metadata: EncryptionMetadata; key: CryptoKey }> {
  // Generate encryption key if not provided
  const key = encryptionKey || await crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );

  // Generate random initialization vector
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // Read file as ArrayBuffer
  const fileBuffer = await file.arrayBuffer();

  // Encrypt the file
  const encryptedBuffer = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
      tagLength: 128,
    },
    key,
    fileBuffer
  );

  // Extract authentication tag (last 16 bytes)
  const encryptedArray = new Uint8Array(encryptedBuffer);
  const authTag = encryptedArray.slice(-16);
  const ciphertext = encryptedArray.slice(0, -16);

  // Convert to base64 for storage/transmission
  const encrypted: EncryptedFile = {
    encryptedData: arrayBufferToBase64(ciphertext.buffer),
    iv: arrayBufferToBase64(iv.buffer),
    authTag: arrayBufferToBase64(authTag.buffer),
    algorithm: 'AES-256-GCM',
    timestamp: new Date().toISOString(),
  };

  const metadata: EncryptionMetadata = {
    originalName: file.name,
    size: file.size,
    mimeType: file.type,
    uploadedAt: new Date().toISOString(),
    encryptedBy: 'JAIC-CLIENT-V1',
  };

  return { encrypted, metadata, key };
}

/**
 * Decrypt an encrypted file
 */
export async function decryptFile(
  encrypted: EncryptedFile,
  key: CryptoKey
): Promise<ArrayBuffer> {
  const ciphertext = base64ToArrayBuffer(encrypted.encryptedData);
  const iv = base64ToArrayBuffer(encrypted.iv);
  const authTag = base64ToArrayBuffer(encrypted.authTag);

  // Combine ciphertext and auth tag
  const combined = new Uint8Array(ciphertext.byteLength + authTag.byteLength);
  combined.set(new Uint8Array(ciphertext), 0);
  combined.set(new Uint8Array(authTag), ciphertext.byteLength);

  // Decrypt
  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv,
      tagLength: 128,
    },
    key,
    combined
  );

  return decrypted;
}

/**
 * Export encryption key for secure storage
 */
export async function exportKey(key: CryptoKey): Promise<string> {
  const exported = await crypto.subtle.exportKey('raw', key);
  return arrayBufferToBase64(exported);
}

/**
 * Import encryption key from storage
 */
export async function importKey(keyData: string): Promise<CryptoKey> {
  const keyBuffer = base64ToArrayBuffer(keyData);
  return await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

// Utility functions
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}
