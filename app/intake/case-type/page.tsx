import { Metadata } from 'next';
import CaseTypeClient from './CaseTypeClient';

export const metadata: Metadata = {
  title: 'Case Domain Selection - Confidential Intake',
  description: 'Select the investigational domain that best describes your matter.',
};

export default function CaseTypePage() {
  return <CaseTypeClient />;
}
