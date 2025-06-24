import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  const baseUrl = process.env.MAROPOST_BASE_URL;
  const apiKey = process.env.MAROPOST_API_KEY;

  if (!baseUrl || !apiKey) {
    return NextResponse.json(
      { error: "Maropost API key or base URL is not configured on the server." },
      { status: 500 }
    );
  }

  const url = `${baseUrl}/api/v2/products?per_page=250`;
  console.log(`--- NEW REQUEST ---`);
  console.log(`API Route: Fetching from URL: ${url}`);

  try {
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });
    
    const responseBodyText = await res.text();
    console.log(`API Route: Maropost response status: ${res.status} ${res.statusText}`);

    if (!res.ok) {
      console.error("API Route: Maropost API returned a non-OK response. Writing body to file.");
      
      // Write the HTML response to a file for debugging
      try {
        const filePath = path.join(process.cwd(), 'error_response.html');
        await fs.writeFile(filePath, responseBodyText);
        console.log(`Successfully wrote non-OK response body to ${filePath}`);
      } catch (writeError) {
        console.error("Failed to write error response file:", writeError);
      }

      return NextResponse.json(
        { error: `Maropost API Error: ${res.statusText}. Check 'error_response.html' for details.` },
        { status: res.status }
      );
    }

    // This part should now be unreachable if there's an error, but we leave the original logging just in case.
    try {
      const data = JSON.parse(responseBodyText);
      console.log("API Route: Successfully parsed JSON from Maropost.");
      return NextResponse.json(data);
    } catch (e) {
      console.error("API Route: Failed to parse JSON. This should not be reached if the status was not OK.");
      return NextResponse.json(
        { error: "The API response was not valid JSON, but the status code was OK. This is an unexpected state." },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error("API Route: Unhandled exception while fetching from Maropost:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
