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

  const url = `${baseUrl}/do/WS/NetoAPI`;
  console.log(`--- NEW REQUEST ---`);
  console.log(`API Route: Fetching from URL: ${url}`);

  // Neto API requires POST with specific JSON payload
  // Fetch more products to get ALL products including indoor plant bundles
  const requestBody = {
    Filter: {
      Visible: ["True"],
      IsActive: ["True"],
      Page: "0",
      Limit: "250", // Increased to get ALL products including indoor plant bundles
      OutputSelector: ["SKU", "Name", "Model", "Brand", "PrimarySupplier", "RRP", "DefaultPrice", "PromotionPrice", "Categories"]
    }
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'NETOAPI_ACTION': 'GetItem',
        'NETOAPI_KEY': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(requestBody),
      cache: 'no-store',
    });
    
    const responseBodyText = await res.text();
    console.log(`API Route: Neto response status: ${res.status} ${res.statusText}`);

    if (!res.ok) {
      console.error("API Route: Neto API returned a non-OK response. Writing body to file.");
      
      try {
        const filePath = path.join(process.cwd(), 'error_response.html');
        await fs.writeFile(filePath, responseBodyText);
        console.log(`Successfully wrote non-OK response body to ${filePath}`);
      } catch (writeError) {
        console.error("Failed to write error response file:", writeError);
      }

      return NextResponse.json(
        { error: `Neto API Error: ${res.statusText}. Check 'error_response.html' for details.` },
        { status: res.status }
      );
    }

    try {
      const data = JSON.parse(responseBodyText);
      console.log("API Route: Successfully parsed JSON from Neto.");
      console.log("API Route: Response structure:", Object.keys(data));
      console.log(`API Route: Fetched ${data.Item?.length || 0} products`);
      
      // Write the successful response to a file for debugging
      try {
        const filePath = path.join(process.cwd(), 'api_success_response.json');
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        console.log(`Successfully wrote API response to ${filePath}`);
      } catch (writeError) {
        console.error("Failed to write success response file:", writeError);
      }
      
      console.log(`API Route: Returning original Neto API response structure with ${data.Item?.length || 0} products`);
      
      // Return the original Neto API response format that the frontend expects
      return NextResponse.json(data);
      
    } catch (e) {
      console.error("API Route: Failed to parse JSON. Raw response:", responseBodyText);
      return NextResponse.json(
        { error: "The API response was not valid JSON." },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error("API Route: Unhandled exception while fetching from Neto:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
