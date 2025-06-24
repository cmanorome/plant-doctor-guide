import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    // Read the product data from the JSON file
    const filePath = path.join(process.cwd(), 'plant_doctor_product_tags.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    let products = data.products || [];
    
    // Filter by category if provided
    if (category && category !== 'all') {
      products = products.filter((product: { category?: string }) => 
        product.category?.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by search term if provided
    if (search) {
      const searchTerm = search.toLowerCase();
      products = products.filter((product: { name?: string; description?: string }) =>
        product.name?.toLowerCase().includes(searchTerm) ||
        product.description?.toLowerCase().includes(searchTerm)
      );
    }
    
    return NextResponse.json({
      success: true,
      products: products,
      total: products.length
    });
    
  } catch (error) {
    console.error('Error reading products:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to load products',
        products: [],
        total: 0
      },
      { status: 500 }
    );
  }
}
