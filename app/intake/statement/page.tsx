import { Metadata } from 'next';
import StatementClient from './StatementClient';

export const metadata: Metadata = {
  title: 'Narrative Statement - Confidential Intake',
  description: 'Provide a detailed narrative description of your investigational matter.',
};

export default function StatementPage() {
  return <StatementClient />;
}
