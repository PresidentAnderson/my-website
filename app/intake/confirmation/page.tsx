import { Metadata } from 'next';
import ConfirmationClient from './ConfirmationClient';

export const metadata: Metadata = {
  title: 'Intake Submitted Successfully - Confirmation',
  description: 'Your confidential case intake has been successfully submitted to JAIC.',
};

export default function ConfirmationPage() {
  return <ConfirmationClient />;
}
