interface ProductTag {
  sku: string;
  name: string;
  suitable_soils: string;
  climate_zones: string;
  best_seasons: string;
  used_for: string;
  goals: string;
  situations: string;
}

interface Selections {
  situation: string;
  location: string;
  goals: string[];
  issues: string[];
  soil: string;
}

// Enhanced product tags from the JSON file - key products for common scenarios
export const productTags: ProductTag[] = [
  // Clay soil specialists
  {
    "sku": "636",
    "name": "Micronised Gypsum Liquid Premium Clay Buster",
    "suitable_soils": "clay,sodic,compacted",
    "climate_zones": "tropical,subtropical,temperate",
    "best_seasons": "autumn,winter,spring",
    "used_for": "compacted soil,clay breaking,poor drainage,high magnesium,high sodium",
    "goals": "improve soil,start fresh",
    "situations": "lawn,garden beds,veggie patch"
  },
  {
    "sku": "1075",
    "name": "Gypsum Granules 1-2mm mini prill Granular slow release clay buster",
    "suitable_soils": "clay,sodic,compacted",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "autumn,spring,summer,winter",
    "used_for": "compacted soil,poor drainage,clay breaking",
    "goals": "improve soil,start fresh",
    "situations": "lawn,garden beds,veggie patch"
  },
  // Soil wetters for sandy/clay soils
  {
    "sku": "NSWL",
    "name": "Nature's Soil Wetter liquid - Super concentrated plant-derived non-petrochemical surfactant / wetter & soil conditioner",
    "suitable_soils": "clay,hydrophobic,sandy,all",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "autumn,spring,summer,winter",
    "used_for": "drought stress,dry soil,poor infiltration,hydrophobic soil,water repellent soil",
    "goals": "drought resistance,improve soil",
    "situations": "lawn,garden beds,veggie patch,indoor"
  },
  {
    "sku": "664",
    "name": "Nature's Soil Wetter granules - Natural mineral infused with plant-derived non-petrochemical surfactant",
    "suitable_soils": "clay,sandy,hydrophobic,all",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "dry soil,poor infiltration,drought stress,hydrophobic soil",
    "goals": "improve soil,drought resistance",
    "situations": "lawn,garden beds,veggie patch"
  },
  // Iron deficiency specialists
  {
    "sku": "LIR",
    "name": "Liquid Iron Fertiliser - 7% Iron 3% Sulphur",
    "suitable_soils": "all",
    "climate_zones": "temperate,subtropical,tropical",
    "best_seasons": "autumn,spring,summer",
    "used_for": "yellowing leaves,iron deficiency,iron chlorosis,poor colour",
    "goals": "green up lawn,fix yellowing leaves",
    "situations": "lawn,garden beds,veggie patch"
  },
  {
    "sku": "547",
    "name": "Plant Doctor Iron Chelate",
    "suitable_soils": "all",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "spring,summer,autumn",
    "used_for": "iron deficiency,yellowing leaves,iron chlorosis,stunted growth",
    "goals": "green up lawn,fix yellowing leaves",
    "situations": "lawn,garden beds,veggie patch"
  },
  {
    "sku": "892",
    "name": "CHAMPION Lawn & Greens grade granular mini-prill fertiliser with 3.5% iron",
    "suitable_soils": "all",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "spring,summer,autumn",
    "used_for": "iron deficiency,yellowing leaves,sustained nutrition",
    "goals": "feed plants,green up lawn,boost plant growth",
    "situations": "lawn,garden beds"
  },
  // Lawn specialists - OUTDOOR ONLY
  {
    "sku": "MG",
    "name": "MaxGreen Hi-N & Iron liquid fertiliser - Growth plus Green",
    "suitable_soils": "all",
    "climate_zones": "temperate,subtropical,tropical",
    "best_seasons": "spring,summer,autumn",
    "used_for": "yellowing,poor colour,lack of nitrogen,iron deficiency",
    "goals": "green up lawn,boost plant growth",
    "situations": "lawn"
  },
  {
    "sku": "A8M",
    "name": "Activ8mate Liquid Fertiliser Inoculant - For use on Plants, Lawns, Veggies, Trees, Natives",
    "suitable_soils": "all",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "spring,summer,autumn",
    "used_for": "poor growth,nutrient deficiency,soil health",
    "goals": "feed plants,green up lawn,boost plant growth,improve soil",
    "situations": "lawn,garden beds,veggie patch"
  },
  {
    "sku": "PP",
    "name": "Power Pellets - Organic slow-release Fertiliser for all plants, trees & lawns",
    "suitable_soils": "all",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "spring,summer,autumn",
    "used_for": "slow release nutrition,organic feeding",
    "goals": "feed plants,green up lawn,boost plant growth",
    "situations": "lawn,garden beds,veggie patch,indoor"
  },
  // Garden bed specialists
  {
    "sku": "721",
    "name": "Flowers, Fruits & Roots liquid fertiliser - High in Potassium & buffered with Humic",
    "suitable_soils": "all",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "spring,summer,autumn",
    "used_for": "flowering,fruiting,root development",
    "goals": "boost plant growth,feed plants,increase flowering,enhance fruit production",
    "situations": "garden beds,veggie patch"
  },
  {
    "sku": "1156",
    "name": "Roots, Shoots & Leaves Granular Fertiliser 16-2-10 NPK + T/E",
    "suitable_soils": "all",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "spring,summer,autumn",
    "used_for": "leafy growth,sustained nutrition,nitrogen boost",
    "goals": "feed plants,green up lawn,boost plant growth",
    "situations": "garden beds,veggie patch,lawn"
  },
  // Soil health & microbial boosters - UNIVERSAL
  {
    "sku": "STM",
    "name": "Stimulizer - Super concentrate Bio-stimulant & natural chelating agent",
    "suitable_soils": "all",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "root health,stress recovery,microbial boost,nutrient uptake,disease protection",
    "goals": "boost plant growth,build root health,improve plant resilience",
    "situations": "lawn,garden beds,veggie patch,indoor"
  },
  {
    "sku": "SWS",
    "name": "Seaweed Secrets | Concentrated Liquid Seaweed (Kelp) | Super-Boosted with Humic & Fulvic Acid",
    "suitable_soils": "all",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "all",
    "used_for": "stress recovery,microbial activity,environmental stress,heat stress,cold stress",
    "goals": "boost plant growth,improve soil,improve plant resilience",
    "situations": "lawn,garden beds,veggie patch,indoor"
  },
  {
    "sku": "29800",
    "name": "Quantum H Premium humic acid solution",
    "suitable_soils": "all",
    "climate_zones": "subtropical,temperate,tropical",
    "best_seasons": "all",
    "used_for": "soil structure,carbon boost,microbial activity,heavy metal detox,pesticide detox",
    "goals": "boost plant growth,improve soil,build root health",
    "situations": "lawn,garden beds,veggie patch"
  },
  // Indoor plant specialists - INDOOR ONLY
  {
    "sku": "1295",
    "name": "Indoor Plant bundle (2 x 500ml liquids)",
    "suitable_soils": "potting mix,indoor soil",
    "climate_zones": "controlled environment",
    "best_seasons": "all",
    "used_for": "indoor plant nutrition,houseplant care",
    "goals": "feed plants,boost plant growth,start fresh",
    "situations": "indoor"
  },
  {
    "sku": "PHPF",
    "name": "Passive Hydro Plant Food for Indoor plants - 30ml",
    "suitable_soils": "hydroponic,water culture",
    "climate_zones": "controlled environment",
    "best_seasons": "all",
    "used_for": "hydroponic nutrition,terrarium care,passive hydro",
    "goals": "feed plants",
    "situations": "indoor"
  },
  // EZFLO Systems - LARGE SCALE OUTDOOR ONLY
  {
    "sku": "EZFLO_2.8L_LE10",
    "name": "2.8L EZFLO Unit with 10L Lawn Envy Bundle",
    "suitable_soils": "all",
    "climate_zones": "temperate,subtropical,tropical",
    "best_seasons": "spring,summer,autumn",
    "used_for": "large scale lawn fertilization,automated lawn feeding,commercial lawn application",
    "goals": "green up lawn,start fresh",
    "situations": "lawn"
  },
  {
    "sku": "1253",
    "name": "2L Hose-on Lawn Envy & MaxGreen Bundle",
    "suitable_soils": "all",
    "climate_zones": "temperate,subtropical,tropical",
    "best_seasons": "spring,summer,autumn",
    "used_for": "lawn nutrition,hose-on lawn application,lawn iron boost",
    "goals": "green up lawn,boost plant growth",
    "situations": "lawn"
  },
  {
    "sku": "984",
    "name": "EZFLO 3.2L COMPLETE Fertiliser Bundle",
    "suitable_soils": "all",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "large scale lawn care,automated fertilization,commercial application",
    "goals": "start fresh,boost plant growth,green up lawn",
    "situations": "lawn"
  },
  {
    "sku": "985",
    "name": "EZFLO 3.2L STARTER Fertiliser Bundle",
    "suitable_soils": "all",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "large scale lawn care,automated lawn feeding",
    "goals": "start fresh,green up lawn",
    "situations": "lawn"
  },
  {
    "sku": "1318",
    "name": "Garden Soil Enhancer Bundle",
    "suitable_soils": "clay,sandy,loam",
    "climate_zones": "all",
    "best_seasons": "autumn,spring,winter",
    "used_for": "improve soil,soil health",
    "goals": "improve soil,start fresh",
    "situations": "garden beds,veggie patch"
  },
  {
    "sku": "1176",
    "name": "Gardener's Choice Bundle",
    "suitable_soils": "all",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "general plant care,soil health,feeding",
    "goals": "boost plant growth,green up lawn",
    "situations": "garden beds,indoor,lawn,veggie patch"
  },
  {
    "sku": "1295",
    "name": "Indoor Plant Bundle (2 x 500 ml liquids)",
    "suitable_soils": "potting mix,loam",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "indoor plant feeding,root health",
    "goals": "boost plant growth",
    "situations": "indoor"
  },
  {
    "sku": "1060",
    "name": "Indoor Plant Foods Bundle – Liquids Only",
    "suitable_soils": "potting mix,loam",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "indoor plant feeding",
    "goals": "boost plant growth",
    "situations": "indoor"
  },
  {
    "sku": "1061",
    "name": "Indoor Plants Improver Bundle – Liquids & Granular",
    "suitable_soils": "potting mix,loam",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "indoor plant care,soil health",
    "goals": "improve soil,boost plant growth",
    "situations": "indoor"
  },
  {
    "sku": "1243",
    "name": "Just Been Laid – Turf Starter Bundle",
    "suitable_soils": "new turf,loam,topsoil",
    "climate_zones": "all",
    "best_seasons": "spring,autumn",
    "used_for": "new turf prep,establishment",
    "goals": "start fresh,boost plant growth",
    "situations": "lawn"
  },
  {
    "sku": "1231",
    "name": "Lawn Lovers Pro Pack Bundle",
    "suitable_soils": "all",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "lawn care,feeding,green up",
    "goals": "green up lawn,boost plant growth",
    "situations": "lawn"
  },
  {
    "sku": "1235",
    "name": "Lawn Lovers Starter Bundle",
    "suitable_soils": "all",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "lawn care,green up,soil feeding",
    "goals": "green up lawn,start fresh",
    "situations": "lawn"
  },
  {
    "sku": "1247",
    "name": "Pro Soil Enhancer Bundle",
    "suitable_soils": "clay,sandy,loam",
    "climate_zones": "all",
    "best_seasons": "autumn,winter",
    "used_for": "soil improvement,soil health",
    "goals": "improve soil,start fresh",
    "situations": "garden beds,veggie patch"
  },
  {
    "sku": "898",
    "name": "Small Indoor Plants & Garden Fertiliser Value Bundle",
    "suitable_soils": "potting mix,loam,garden beds",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "indoor feeding,plant care",
    "goals": "boost plant growth",
    "situations": "indoor,garden beds"
  },
  {
    "sku": "1239",
    "name": "Value Combo Bundle",
    "suitable_soils": "all",
    "climate_zones": "all",
    "best_seasons": "all",
    "used_for": "general care,feeding",
    "goals": "boost plant growth",
    "situations": "lawn,garden beds,indoor"
  }
];

export function getIntelligentRecommendations(selections: Selections): Array<{ tag: ProductTag; score: number; reasons: string[] }> {
  const scored = productTags.map(tag => {
    let score = 0;
    const reasons: string[] = [];

    // EXCLUSION LOGIC - Prevent inappropriate recommendations
    
    // Exclude large-scale/commercial systems for indoor plants
    if (selections.situation && selections.situation.toLowerCase().includes('indoor')) {
      const excludedForIndoor = ['EZFLO', 'MaxGreen', 'Lawn Envy', 'Turf', 'Hose-on'];
      if (excludedForIndoor.some(excluded => tag.name.toLowerCase().includes(excluded.toLowerCase()))) {
        return { tag, score: 0, reasons: ['❌ Not suitable for indoor use'] };
      }
      
      // Only allow products specifically tagged for indoor use or universal products
      if (tag.situations && !tag.situations.includes('indoor') && !tag.situations.includes('all')) {
        // Allow universal soil health products for indoor use
        const universalForIndoor = ['stimulizer', 'seaweed', 'nature\'s soil wetter'];
        if (!universalForIndoor.some(universal => tag.name.toLowerCase().includes(universal))) {
          return { tag, score: 0, reasons: ['❌ Not suitable for indoor use'] };
        }
      }
    }
    
    // Exclude indoor-specific products for outdoor situations
    if (selections.situation && !selections.situation.toLowerCase().includes('indoor')) {
      if (tag.situations && tag.situations === 'indoor') {
        return { tag, score: 0, reasons: ['❌ Indoor-only product'] };
      }
    }
    
    // Exclude EZFLO systems unless specifically for large lawns or commercial use
    if (tag.name.toLowerCase().includes('ezflo')) {
      if (!selections.situation || !selections.situation.toLowerCase().includes('lawn')) {
        return { tag, score: 0, reasons: ['❌ EZFLO systems are for lawn irrigation only'] };
      }
    }

    // SOIL TYPE MATCHING (Highest Priority - 120 points)
    if (selections.soil && tag.suitable_soils) {
      const soilMatches = tag.suitable_soils.toLowerCase().split(',').map(s => s.trim());
      const userSoil = selections.soil.toLowerCase();
      
      if (userSoil.includes('clay')) {
        if (soilMatches.some(s => s.includes('clay') || s.includes('compacted') || s.includes('sodic'))) {
          score += 120;
          reasons.push('🎯 Perfect match for clay soil');
        }
      } else if (userSoil.includes('sandy')) {
        if (soilMatches.some(s => s.includes('sandy') || s.includes('hydrophobic'))) {
          score += 120;
          reasons.push('🎯 Ideal for sandy soil conditions');
        }
      } else if (userSoil.includes('loam')) {
        if (soilMatches.includes('all')) {
          score += 100;
          reasons.push('✅ Suitable for all soil types including loam');
        }
      }
      
      // Universal products get medium score
      if (soilMatches.includes('all')) {
        score += 80;
        reasons.push('🌱 Works with all soil types');
      }
    }

    // ISSUE MATCHING (Very High Priority - 100 points)
    if (selections.issues.length > 0 && tag.used_for) {
      const tagUsedFor = tag.used_for.toLowerCase().split(',').map(s => s.trim());
      selections.issues.forEach(issue => {
        const userIssue = issue.toLowerCase();
        
        if (userIssue.includes('yellow') && tagUsedFor.some(u => u.includes('yellow') || u.includes('iron deficiency'))) {
          score += 100;
          reasons.push('🍃 Specifically treats yellowing leaves');
        } else if (userIssue.includes('compacted') && tagUsedFor.some(u => u.includes('compacted') || u.includes('clay breaking'))) {
          score += 100;
          reasons.push('🔨 Breaks up compacted soil effectively');
        } else if (userIssue.includes('dry') && tagUsedFor.some(u => u.includes('dry') || u.includes('drought'))) {
          score += 100;
          reasons.push('💧 Improves water retention & drought resistance');
        } else if (userIssue.includes('drainage') && tagUsedFor.some(u => u.includes('drainage') || u.includes('infiltration'))) {
          score += 100;
          reasons.push('🌊 Significantly improves drainage');
        } else if (userIssue.includes('nutrient') && tagUsedFor.some(u => u.includes('deficiency'))) {
          score += 90;
          reasons.push('🥗 Addresses nutrient deficiencies');
        } else if (userIssue.includes('stress') && tagUsedFor.some(u => u.includes('stress') || u.includes('recovery'))) {
          score += 90;
          reasons.push('🏥 Helps plants recover from stress');
        }
      });
    }

    // SITUATION MATCHING (High Priority - 80 points)
    if (selections.situation && tag.situations) {
      const tagSituations = tag.situations.toLowerCase().split(',').map(s => s.trim());
      const userSituation = selections.situation.toLowerCase();
      
      if (userSituation.includes('lawn') && tagSituations.some(s => s.includes('lawn'))) {
        score += 80;
        reasons.push('🌿 Specifically designed for lawns');
      } else if (userSituation.includes('garden beds') && tagSituations.some(s => s.includes('garden'))) {
        score += 80;
        reasons.push('🌺 Perfect for garden bed applications');
      } else if (userSituation.includes('indoor') && tagSituations.some(s => s.includes('indoor'))) {
        score += 80;
        reasons.push('🏠 Indoor plant specialist');
      } else if (userSituation.includes('veggie') && tagSituations.some(s => s.includes('veggie'))) {
        score += 80;
        reasons.push('🥕 Ideal for vegetable gardens');
      }
    }

    // GOALS MATCHING (Medium Priority - 60 points)
    if (selections.goals.length > 0 && tag.goals) {
      const tagGoals = tag.goals.toLowerCase().split(',').map(s => s.trim());
      selections.goals.forEach(goal => {
        const userGoal = goal.toLowerCase();
        
        if (userGoal.includes('green') && tagGoals.some(g => g.includes('green'))) {
          score += 60;
          reasons.push('💚 Excellent for greening up plants');
        } else if (userGoal.includes('soil') && tagGoals.some(g => g.includes('soil') || g.includes('improve'))) {
          score += 60;
          reasons.push('🌱 Great for soil improvement');
        } else if (userGoal.includes('root') && tagGoals.some(g => g.includes('root'))) {
          score += 60;
          reasons.push('🌿 Builds strong root systems');
        } else if (userGoal.includes('growth') && tagGoals.some(g => g.includes('growth') || g.includes('boost'))) {
          score += 60;
          reasons.push('📈 Boosts overall plant growth');
        } else if (userGoal.includes('flower') && tagGoals.some(g => g.includes('flower') || g.includes('fruit'))) {
          score += 60;
          reasons.push('🌸 Enhances flowering & fruiting');
        } else if (userGoal.includes('feed') && tagGoals.some(g => g.includes('feed'))) {
          score += 50;
          reasons.push('🍽️ Provides excellent plant nutrition');
        } else if (userGoal.includes('fresh') && tagGoals.some(g => g.includes('start fresh'))) {
          score += 70;
          reasons.push('🆕 Perfect for starting fresh');
        }
      });
    }

    // SEASONAL RELEVANCE BONUS (Low Priority - 20 points)
    const currentMonth = new Date().getMonth() + 1; // 1-12
    if (tag.best_seasons) {
      const seasons = tag.best_seasons.toLowerCase().split(',').map(s => s.trim());
      let currentSeason = '';
      
      if ([12, 1, 2].includes(currentMonth)) currentSeason = 'summer';
      else if ([3, 4, 5].includes(currentMonth)) currentSeason = 'autumn';
      else if ([6, 7, 8].includes(currentMonth)) currentSeason = 'winter';
      else if ([9, 10, 11].includes(currentMonth)) currentSeason = 'spring';
      
      if (seasons.includes(currentSeason) || seasons.includes('all')) {
        score += 20;
        reasons.push(`🌤️ Perfect timing for ${currentSeason}`);
      }
    }

    // POPULAR PRODUCT BONUS (Base points)
    const popularSkus = ['STM', 'SWS', 'A8M', 'LIR', 'MG', '636', '1231', '1247', '1295', '984', '985', '1176', '1235', '1318', '1253', '1243', 'EZFLO_2.8L_LE10'];
    if (popularSkus.includes(tag.sku)) {
      score += 15;
    }

    // LAWN BUNDLE PRIORITY BOOST (Special bonus for lawn bundles)
    const lawnBundleSkus = ['1231', '1235', '1253', '1243', '984', '985', 'EZFLO_2.8L_LE10'];
    if (selections.situation && selections.situation.toLowerCase().includes('lawn') && lawnBundleSkus.includes(tag.sku)) {
      score += 40;
      reasons.push('🎯 Premium lawn bundle - complete solution');
    }

    // BUNDLE BONUS (General bonus for all bundles when goals include "start fresh")
    const allBundleSkus = ['1231', '1235', '1253', '1243', '984', '985', 'EZFLO_2.8L_LE10', '1247', '1318', '1176', '1295', '1060', '1061', '898', '1239'];
    if (selections.goals.some(goal => goal.toLowerCase().includes('start fresh')) && allBundleSkus.includes(tag.sku)) {
      score += 25;
      reasons.push('📦 Complete bundle solution');
    }

    return { tag, score, reasons };
  });

  // Sort by score descending and return all scored products
  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

export function getProductDisplayData() {
  return {
    imageMap: {
      // Clay busters - Corrected image paths
      "636": "https://www.plantdoctor.com.au/assets/full/636.jpg", // Micronised Gypsum Liquid - using SKU as filename
      "1075": "https://www.plantdoctor.com.au/assets/full/1075.jpg", // Gypsum Granules - using SKU as filename
      
      // Soil wetters - Verified from website
      "NSWL": "https://www.plantdoctor.com.au/assets/full/NSW01L.jpg", // Nature's Soil Wetter Liquid
      "664": "https://www.plantdoctor.com.au/assets/full/664.jpg", // Nature's Soil Wetter Granules - using SKU as filename
      
      // Iron products - Featured on homepage
      "LIR": "https://www.plantdoctor.com.au/assets/full/LIR01L.jpg", // Liquid Iron Fertiliser
      "547": "https://www.plantdoctor.com.au/assets/full/IC01L.jpg", // Iron Chelate
      "892": "https://www.plantdoctor.com.au/assets/full/CLGF.jpg", // Champion Lawn & Greens
      
      // Lawn fertilizers - Featured products
      "MG": "https://www.plantdoctor.com.au/assets/full/MG01L.jpg", // MaxGreen
      "A8M": "https://www.plantdoctor.com.au/assets/full/A8M10L.jpg", // Activ8mate
      "PP": "https://www.plantdoctor.com.au/assets/full/PP.jpg", // Power Pellets
      
      // Garden fertilizers
      "721": "https://www.plantdoctor.com.au/assets/full/721_722.jpg", // Flowers, Fruits & Roots
      "1156": "https://www.plantdoctor.com.au/assets/full/1156.jpg", // Roots, Shoots & Leaves
      
      // Bio-stimulants - Featured on homepage
      "STM": "https://www.plantdoctor.com.au/assets/full/STM04L.jpg", // Stimulizer
      "SWS": "https://www.plantdoctor.com.au/assets/alt_2/SWS.jpg", // Seaweed Secrets
      "29800": "https://www.plantdoctor.com.au/assets/full/29800_1.jpg", // Quantum H
      
      // Indoor plant products
      "1295": "https://www.plantdoctor.com.au/assets/full/1295.jpg", // Indoor Plant bundle - simplified filename
      "PHPF": "https://www.plantdoctor.com.au/assets/full/PHPF.jpg", // Passive Hydro Plant Food - back to original
      
      // Bundles
      "1231": "https://www.plantdoctor.com.au/assets/full/1231_1.jpg", // Lawn Lovers Pro Pack
      "1247": "https://www.plantdoctor.com.au/assets/full/1247.jpg", // Pro Soil Enhancer bundle
      "984": "https://www.plantdoctor.com.au/assets/full/984.jpg", // EZFLO 3.2L COMPLETE Fertiliser Bundle
      "985": "https://www.plantdoctor.com.au/assets/full/985.jpg", // EZFLO 3.2L STARTER Fertiliser Bundle
      "1176": "https://www.plantdoctor.com.au/assets/full/1176.jpg", // Gardener's Choice Bundle
      "1235": "https://www.plantdoctor.com.au/assets/full/1235_1.jpg", // Lawn Lovers Starter Bundle
      "1318": "https://www.plantdoctor.com.au/assets/full/1318.jpg", // Garden Soil Enhancer Bundle
      "1253": "https://www.plantdoctor.com.au/assets/full/1253.jpg", // 2L Hose-on Lawn Envy & MaxGreen Bundle
      "1060": "https://www.plantdoctor.com.au/assets/full/1060_1.jpg", // Indoor Plant Foods Bundle – Liquids Only
      "1061": "https://www.plantdoctor.com.au/assets/full/1061_1.jpg", // Indoor Plants Improver Bundle
      "1243": "https://www.plantdoctor.com.au/assets/full/1243_1.jpg", // Just Been Laid – Turf Starter Bundle
      "898": "https://www.plantdoctor.com.au/assets/full/898_1.jpg", // Small Indoor Plants & Garden Fertiliser Value Bundle
      "1239": "https://www.plantdoctor.com.au/assets/full/1239_1.jpg", // Value Combo Bundle
      "EZFLO_2.8L_LE10": "https://www.plantdoctor.com.au/assets/full/EZFLO_2.8L_LE10.jpg" // 2.8L EZFLO Unit with 10L Lawn Envy Bundle
    },
    linkMap: {
      "636": "https://www.plantdoctor.com.au/micronised-gypsum-liquid-clay-buster",
      "1075": "https://www.plantdoctor.com.au/gypsum-granules-1-2mm-mini-prill-granular-slow-release-clay-buster",
      "NSWL": "https://www.plantdoctor.com.au/natures-soil-wetter-liquid-super-concentrated-plan",
      "664": "https://www.plantdoctor.com.au/natures-soil-wetter-granules-natural-mineral-infused",
      "LIR": "https://www.plantdoctor.com.au/plant-doctor-7-iron-3-sulphur-liquid-fertiliser",
      "547": "https://www.plantdoctor.com.au/iron-chelate-fertiliser",
      "892": "https://www.plantdoctor.com.au/champion-lawn-greens-grade-granular-mini-prill-fertiliser",
      "MG": "https://www.plantdoctor.com.au/maxgreen-liquid-iron-fertiliser",
      "A8M": "https://www.plantdoctor.com.au/activ8mate-liquid-fertiliser-inoculant-for-use-on",
      "PP": "https://www.plantdoctor.com.au/power-pellets-organic-slow-release-fertiliser",
      "721": "https://www.plantdoctor.com.au/flowers-fruits-and-roots-liquid-fertiliser",
      "1156": "https://www.plantdoctor.com.au/roots-shoots-leaves-granular-fertiliser-16-2-10-np",
      "STM": "https://www.plantdoctor.com.au/stimulizer-super-concentrate-bio-stimulant-natural",
      "SWS": "https://www.plantdoctor.com.au/seaweed-secrets-concentrated-liquid-seaweed-kelp-s",
      "29800": "https://www.plantdoctor.com.au/quantum-h-premium-humic-acid-solution",
      "1295": "https://www.plantdoctor.com.au/indoor-plant-bundle-2-x-500ml-liquids",
      "PHPF": "https://www.plantdoctor.com.au/passive-hydro-plant-food-for-indoor-plants-30ml",
      "1231": "https://www.plantdoctor.com.au/lawn-lovers-pro-pack",
      "1247": "https://www.plantdoctor.com.au/pro-soil-enhancer-bundle",
      "984": "https://www.plantdoctor.com.au/ezflo-3-2l-complete-fertiliser-bundle",
      "985": "https://www.plantdoctor.com.au/ezflo-3-2l-starter-fertiliser-bundle",
      "1176": "https://www.plantdoctor.com.au/gardener-s-choice-bundle",
      "1235": "https://www.plantdoctor.com.au/lawn-lovers-starter-bundle",
      "1318": "https://www.plantdoctor.com.au/garden-soil-enhancer-bundle",
      "1253": "https://www.plantdoctor.com.au/2l-hose-on-lawn-envy-maxgreen-bundle",
      "1060": "https://www.plantdoctor.com.au/indoor-plant-foods-bundle-liquids-only",
      "1061": "https://www.plantdoctor.com.au/indoor-plants-improver-bundle-liquids-granular",
      "1243": "https://www.plantdoctor.com.au/just-been-laid-turf-starter-bundle",
      "898": "https://www.plantdoctor.com.au/small-indoor-plants-garden-fertiliser-value-bundle",
      "1239": "https://www.plantdoctor.com.au/value-combo-bundle",
      "EZFLO_2.8L_LE10": "https://www.plantdoctor.com.au/2-8l-ezflo-unit-with-10l-lawn-envy-bundle"
    }
  };
}
