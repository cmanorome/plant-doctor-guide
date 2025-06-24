export interface Selections {
  situation?: string;
  location?: string;
  goals?: string[];
  issues?: string[];
}

interface Product {
  id: string;
  name: string;
  sku: string;
  categories?: string[];
}

// --- RECOMMENDATION RULES UPDATED WITH ACTUAL STORE SKUS ---
const recommendationRules: { [key: string]: string[] } = {
  // --- Situations ---
  "Lawn": ["29800", "NSWL", "STM", "SWS"], // Turf & Landscape products
  "Garden beds": ["29800", "29814", "STM", "SWS", "29782"], // Home Garden products
  "Indoor plants": ["SWS"], // Product with Indoor Plants category
  "Veggie garden": ["29782", "STM", "SWS", "29800", "29814"], // Vegetable Fertilisers
  "New turf / soil prep": ["29800", "NSWL", "STM", "SWS"], // Soil prep products

  // --- Goals ---
  "Green up lawn": ["29800", "STM", "SWS", "NSWL"],
  "Improve soil structure": ["29800", "29814", "NSWL", "STM"],
  "Build root health": ["STM", "SWS", "29800", "29782"],
  "Start fresh (bare lawn/bed)": ["29800", "STM", "SWS", "NSWL"],
  "Fight pests or disease": ["211", "211_217"], // Diatomaceous Earth products
  "Add minerals / organic matter": ["29814", "29800", "29782"],
  "Increase drought resistance": ["SWS", "NSWL", "STM"],
  "Fix yellowing or discoloured leaves": ["STM", "SWS", "29800"],
  "Boost plant or flower growth": ["29782", "STM", "SWS", "29800"],

  // --- Issues ---
  "Yellowing grass/leaves": ["STM", "SWS", "29800"],
  "Dry or hydrophobic soil": ["NSWL", "STM", "SWS"],
  "Compacted clay soil": ["29800", "NSWL", "STM"],
  "Patchy/thin growth": ["29800", "STM", "SWS"],
  "Poor flowering or fruiting": ["29782", "STM", "SWS"],
  "Wilting despite watering": ["NSWL", "STM", "SWS", "29800"],
  "Fungal or pest damage": ["211", "211_217"], // Diatomaceous Earth
  "Stressed from heat, cold, or mowing": ["STM", "SWS", "29800"],
};

// --- ENHANCED RECOMMENDATION ENGINE ---
export function getRecommendations(selections: Selections, allProducts: Product[]): Product[] {
  if (!selections || !allProducts) {
    return [];
  }

  const recommendedSkus = new Set<string>();

  // Use ALL selections: situation, goals, and issues
  const userChoices = [
    selections.situation, 
    ...(selections.goals || []), 
    ...(selections.issues || [])
  ].filter(Boolean) as string[];

  // Add SKUs based on user selections
  userChoices.forEach(choice => {
    const skus = recommendationRules[choice];
    if (skus) {
      skus.forEach(sku => recommendedSkus.add(sku));
    }
  });

  // If no specific rules matched, try category-based matching
  if (recommendedSkus.size === 0 && selections.situation) {
    const situationCategoryMap: { [key: string]: string[] } = {
      "Indoor plants": ["Indoor Plants"],
      "Lawn": ["Turf & Landscape"],
      "Garden beds": ["Home Garden"],
      "Veggie garden": ["Vegetable Fertilisers", "Home Garden"]
    };

    const targetCategories = situationCategoryMap[selections.situation];
    if (targetCategories) {
      allProducts.forEach(product => {
        if (product.categories && product.categories.some(cat => 
          targetCategories.some(target => cat.includes(target))
        )) {
          recommendedSkus.add(product.sku);
        }
      });
    }
  }

  const recommendedProducts = allProducts.filter(product => recommendedSkus.has(product.sku));
  
  console.log("Recommendation Debug:", {
    userChoices,
    recommendedSkus: Array.from(recommendedSkus),
    matchedProducts: recommendedProducts.map(p => ({ sku: p.sku, name: p.name, categories: p.categories }))
  });
  
  return recommendedProducts;
}
