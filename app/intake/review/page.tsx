import { Metadata } from 'next';
import ReviewClient from './ReviewClient';

export const metadata: Metadata = {
  title: 'Review & Confirm - Confidential Intake',
  description: 'Review and confirm your case intake submission before final submission.',
};

export default function ReviewPage() {
  return <ReviewClient />;
}
