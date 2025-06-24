'use client';

interface Step2_5SoilTypeProps {
  selection: string;
  onSelect: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const soilTypes = [
  'Clay Soil',
  'Sandy Soil', 
  'Loam Soil',
  'Chalky Soil',
  'Not Sure'
];

export default function Step2_5_SoilType({ selection, onSelect, onNext, onBack }: Step2_5SoilTypeProps) {
  return (
    <div style={{ padding: '10px' }}>
      <div className="text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What type of soil do you have? (Optional)</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Knowing your soil type helps us recommend the most effective products for your specific conditions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[10px] mb-16">
          {soilTypes.map((soil) => (
            <button
              key={soil}
              onClick={() => onSelect(soil)}
              className={`text-center border-2 transition-all flex-shrink-0 hover:shadow-lg hover:scale-105 font-medium ${
                selection === soil
                  ? 'border-green-500 bg-green-500 text-white shadow-xl ring-4 ring-green-300 transform scale-105'
                  : 'border-gray-300 bg-white hover:border-green-500 hover:bg-green-100 text-gray-900'
              }`}
              style={{ 
                borderRadius: '8px',
                padding: '8px 12px',
                maxWidth: '200px',
                width: '100%',
                minHeight: '60px'
              }}
            >
              {soil}
            </button>
          ))}
        </div>

        {/* Tip Block */}
        <div className="bg-white rounded-xl shadow-md transition hover:shadow-lg max-w-2xl mx-auto mb-12 border-l-4 border-yellow-400" style={{ padding: '10px' }}>
          <div className="flex items-start gap-3">
            <span className="text-yellow-600 flex-shrink-0">💡</span>
            <p className="text-gray-700 text-sm text-left">
              <strong className="font-semibold">Not sure about your soil type?</strong> You can select "Not Sure" and we'll recommend versatile products that work well with most soil types.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-lg">
          <div className="flex justify-center gap-4">
            <button
              onClick={onBack}
              className="bg-white text-gray-700 font-medium hover:bg-gray-100 transition border border-gray-300 mx-auto"
              style={{ 
                borderRadius: '8px',
                padding: '8px 12px',
                maxWidth: '120px',
                width: '100%'
              }}
            >
              ← Back
            </button>
            
            <button
              onClick={onNext}
              className="bg-primary text-white font-medium hover:bg-primary-dark transition mx-auto"
              style={{ 
                borderRadius: '8px',
                padding: '8px 12px',
                maxWidth: '200px',
                width: '100%'
              }}
            >
              Get My Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
