import { Metadata } from 'next';
import UploadClient from './UploadClient';

export const metadata: Metadata = {
  title: 'Supporting Documentation - Confidential Intake',
  description: 'Upload relevant documents and evidence for your investigational matter.',
};

export default function UploadPage() {
  return <UploadClient />;
}
