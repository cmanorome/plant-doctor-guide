"use client";

import React, { FC, useMemo } from 'react';
import { getIntelligentRecommendations, getProductDisplayData } from '../lib/intelligent-recommendations';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  link: string;
  alt: string;
  reasons?: string[];
}

// Use the intelligent recommendations system
const displayData = getProductDisplayData();

interface Selections {
  situation: string;
  location: string;
  goals: string[];
  issues: string[];
  soil: string;
}

interface Step5ResultsProps {
  selections: Selections;
  onRestart: () => void;
  onBack: () => void;
}

const Step5Results: FC<Step5ResultsProps> = ({ selections, onRestart, onBack }) => {
  // Use the new intelligent recommendations system
  const recommendedProducts = useMemo(() => {
    const recommendations = getIntelligentRecommendations(selections);
    
    // Convert to Product format for display
    const products: Product[] = recommendations.slice(0, 8).map(rec => ({
      id: rec.tag.sku,
      name: rec.tag.name,
      image: (displayData.imageMap as Record<string, string>)[rec.tag.sku] || "https://www.plantdoctor.com.au/assets/full/placeholder.jpg",
      description: rec.tag.used_for 
        ? `Specially formulated for ${rec.tag.used_for.replace(/,/g, ', ')}. ${rec.tag.goals ? `Helps ${rec.tag.goals.replace(/,/g, ', ')}.` : ''}`
        : rec.tag.goals 
          ? `Designed to ${rec.tag.goals.replace(/,/g, ', ')}.`
          : "Premium Plant Doctor product for optimal plant health.",
      link: (displayData.linkMap as Record<string, string>)[rec.tag.sku] || "https://www.plantdoctor.com.au/",
      alt: rec.tag.name.split(' ')[0],
      reasons: rec.reasons
    }));

    return products;
  }, [selections]);

  return (
    <div style={{ padding: '10px' }}>
      {/* Main container with 750px max width */}
      <div className="max-w-[750px] mx-auto">
        {/* Selection Summary Labels */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Your Selections:</h3>
          <div className="flex flex-wrap justify-center gap-2" style={{ padding: '0 10px' }}>
            {/* Situation Label */}
            {selections.situation && (
              <div className="bg-green-50 text-green-800 border-2 border-green-300 font-medium hover:bg-green-100 transition-colors text-xs"
                   style={{ borderRadius: '8px', padding: '6px 10px', maxWidth: '180px', margin: '4px' }}>
                📍 {selections.situation}
              </div>
            )}

            {/* Location Label */}
            {selections.location && (
              <div className="bg-blue-50 text-blue-800 border-2 border-blue-300 font-medium hover:bg-blue-100 transition-colors text-xs"
                   style={{ borderRadius: '8px', padding: '6px 10px', maxWidth: '180px', margin: '4px' }}>
                🌍 {selections.location.split('(')[0].trim()}
              </div>
            )}

            {/* Goals Label */}
            {selections.goals.length > 0 && (
              <div className="bg-purple-50 text-purple-800 border-2 border-purple-300 font-medium hover:bg-purple-100 transition-colors text-xs"
                   style={{ borderRadius: '8px', padding: '6px 10px', maxWidth: '180px', margin: '4px' }}>
                🎯 {selections.goals.join(' • ')}
              </div>
            )}

            {/* Issues Label */}
            <div className={`${selections.issues.length > 0 
              ? 'bg-orange-50 text-orange-800 border-orange-300 hover:bg-orange-100' 
              : 'bg-green-50 text-green-800 border-green-300 hover:bg-green-100'
            } border-2 font-medium transition-colors text-xs`}
                 style={{ borderRadius: '8px', padding: '6px 10px', maxWidth: '180px', margin: '4px' }}>
              {selections.issues.length > 0 ? '⚠️' : '✅'} {selections.issues.length > 0 
                ? selections.issues.join(' • ') 
                : 'No specific issues'}
            </div>

            {/* Soil Type Label */}
            <div className={`${selections.soil 
              ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100' 
              : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
            } border-2 font-medium transition-colors text-xs`}
                 style={{ borderRadius: '8px', padding: '6px 10px', maxWidth: '180px', margin: '4px' }}>
              🌱 {selections.soil || 'Soil type not specified'}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Personalized Plant Doctor Recommendations
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Based on your selections, here are our top picks for your {selections.situation ? selections.situation.toLowerCase() : 'garden'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12" style={{ gap: '10px' }}>
          {recommendedProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-green-50 hover:shadow-lg transition-all duration-300 group flex flex-col hover:scale-105 flex-shrink-0 border border-gray-200"
              style={{ 
                width: '250px', 
                height: '450px', 
                padding: '15px',
                borderRadius: '16px'
              }}
            >
              <div className="w-full h-24 mb-2 overflow-hidden bg-white flex items-center justify-center flex-shrink-0" style={{ borderRadius: '8px' }}>
                <img
                  src={product.image}
                  alt={product.alt}
                  className="max-w-full max-h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: '200px' }}
                  loading="lazy"
                />
              </div>
              
              <div className="flex-1 flex flex-col justify-between min-h-0" style={{ overflow: 'hidden' }}>
                <div className="flex-1 mb-2" style={{ overflow: 'hidden' }}>
                  <h3 className="font-semibold text-gray-900 leading-tight text-xs mb-2 line-clamp-3">
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {product.name}
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                    {product.description}
                  </p>
                </div>

                <div className="flex-shrink-0" style={{ marginTop: 'auto', paddingTop: '8px' }}>
                  <button
                    onClick={() => window.open(product.link, '_blank')}
                    className="text-center bg-primary text-white font-medium hover:bg-primary-dark transition-colors text-xs mx-auto"
                    style={{ 
                      borderRadius: '8px',
                      padding: '8px 12px',
                      maxWidth: '100px',
                      width: '100%',
                      display: 'block'
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spacing between products and bottom section */}
        <div className="mt-24" style={{ padding: '0 10px' }}>
          {/* Combined Tip and Help Block */}
          <div className="bg-white rounded-xl shadow-md transition hover:shadow-lg max-w-2xl mx-auto mb-12 border-l-4 border-purple-400" style={{ padding: '10px' }}>
            <div className="flex items-start gap-3 mb-4">
              <span className="text-purple-600 flex-shrink-0">✨</span>
              <p className="text-gray-700 text-sm text-left">
                <strong className="font-semibold">Pro tip:</strong> For best results, follow the application instructions on each product. Start with soil improvement products first, then apply fertilizers and treatments.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-green-600 flex-shrink-0">💬</span>
              <div className="text-gray-700 text-sm text-left">
                <strong className="font-semibold">Need More Help?</strong>
                <p className="mt-1">Contact our Plant Doctor experts for personalized advice and product recommendations tailored to your specific garden needs.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center" style={{ padding: '16px 0', gap: '16px' }}>
            <button
              onClick={onBack}
              className="bg-white text-gray-700 font-medium hover:bg-gray-100 transition border border-gray-300 mx-auto"
              style={{ 
                borderRadius: '8px',
                padding: '8px 12px',
                maxWidth: '120px',
                width: '100%',
                margin: '8px'
              }}
            >
              ← Back
            </button>
            <button
              onClick={onRestart}
              className="bg-primary text-white font-medium hover:bg-primary-dark transition mx-auto"
              style={{ 
                borderRadius: '8px',
                padding: '8px 12px',
                maxWidth: '180px',
                width: '100%',
                margin: '8px'
              }}
            >
              Start New Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5Results;
