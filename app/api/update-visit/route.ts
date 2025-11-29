import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface UpdateVisitRequest {
  visitorId: string;
  pageUrl: string;
  visitDuration: number;
  scrollDepth: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: UpdateVisitRequest = await request.json();

    const {
      visitorId,
      pageUrl,
      visitDuration,
      scrollDepth
    } = body;

    if (!visitorId || !pageUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Find the most recent page visit for this visitor and page
    const { data: recentVisits, error: findError } = await supabase
      .from('page_visits')
      .select('id')
      .eq('visitor_id', visitorId)
      .eq('page_url', pageUrl)
      .order('visit_start', { ascending: false })
      .limit(1);

    if (findError) {
      console.error('Error finding recent visit:', findError);
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }

    // Check if we found any visits
    if (!recentVisits || recentVisits.length === 0) {
      console.log('No recent visit found for:', { visitorId, pageUrl });
      return NextResponse.json(
        { error: 'Visit not found' },
        { status: 404 }
      );
    }

    const recentVisit = recentVisits[0];

    // Update the visit with duration and scroll depth
    const { error: updateError } = await supabase
      .from('page_visits')
      .update({
        visit_duration: visitDuration,
        scroll_depth: scrollDepth,
        visit_end: new Date().toISOString()
      })
      .eq('id', recentVisit.id);

    if (updateError) {
      console.error('Error updating visit:', updateError);
      return NextResponse.json(
        { error: updateError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: 'Visit updated successfully',
      data: {
        visitDuration,
        scrollDepth
      }
    });
    
  } catch (error) {
    console.error('Error in update-visit API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Add GET method for testing
export async function GET() {
  return NextResponse.json({ 
    status: 'OK', 
    message: 'Update visit API is running' 
  });
}