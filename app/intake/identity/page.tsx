import { Metadata } from 'next';
import IdentityClient from './IdentityClient';

export const metadata: Metadata = {
  title: 'Identity & Contact Details - Confidential Intake',
  description: 'Provide your identity and contact information for confidential case intake with JAIC.',
};

export default function IdentityPage() {
  return <IdentityClient />;
}
