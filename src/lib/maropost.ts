// --- API INTEGRATION ---
interface NetoProduct {
  SKU: string;
  Name: string;
  InventoryID: string;
  Brand?: string;
  DefaultPrice?: string;
  Model?: string;
  Categories?: Array<{
    Category: Array<{
      CategoryID: string;
      CategoryName: string;
      Priority: string;
    }>;
  }>;
}

interface NetoApiResponse {
  Item: NetoProduct[];
  CurrentTime: string;
  Ack: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  brand?: string;
  price?: string;
  categories?: string[];
  short_description?: string;
  images: {
    original_url: string;
  }[];
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/v2/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: NetoApiResponse = await response.json();
    
    if (data.Ack !== 'Success' || !data.Item) {
      throw new Error('API returned unsuccessful response');
    }

    // Transform Neto API format to our internal Product format
    const products: Product[] = data.Item.map(item => {
      // Safely extract categories with proper error handling
      let categories: string[] = [];
      try {
        if (item.Categories && Array.isArray(item.Categories) && item.Categories.length > 0) {
          const firstCategoryGroup = item.Categories[0];
          if (firstCategoryGroup && firstCategoryGroup.Category && Array.isArray(firstCategoryGroup.Category)) {
            categories = firstCategoryGroup.Category.map(cat => cat.CategoryName).filter(Boolean);
          }
        }
      } catch (error) {
        console.warn(`Error extracting categories for product ${item.SKU}:`, error);
        categories = [];
      }

      return {
        id: item.InventoryID,
        name: item.Name,
        sku: item.SKU,
        brand: item.Brand,
        price: item.DefaultPrice,
        categories: categories,
        short_description: item.Model, // Using Model as description for now
        images: [{
          // Use a placeholder image service instead of direct CORS-blocked images
          original_url: `https://via.placeholder.com/300x300/4ade80/ffffff?text=${encodeURIComponent(item.Name.split(' ').slice(0,2).join(' '))}`
        }]
      };
    });

    console.log('🔄 Product transformation complete:', {
      totalProducts: products.length,
      sampleCategories: products.slice(0, 3).map(p => ({ sku: p.sku, categories: p.categories }))
    });

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
