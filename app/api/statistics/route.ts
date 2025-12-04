/**
 * JAIC Statistics API
 * GET: Retrieve case statistics for dashboard
 */

import { NextResponse } from 'next/server';
import { getCaseStatistics } from '@/lib/data-storage';

export async function GET() {
  try {
    const statistics = await getCaseStatistics();
    return NextResponse.json(statistics, { status: 200 });
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
