'use client';

interface Step2LocationProps {
  selection: string;
  onSelect: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const locations = [
  'Tropical (e.g., Darwin, Cairns, Townsville)',
  'Subtropical (e.g., Brisbane, Gold Coast, Byron Bay)',
  'Temperate (e.g., Sydney, Adelaide, Perth)',
  'Cool Temperate (e.g., Melbourne, Canberra, Hobart)',
  'Arid (e.g., Alice Springs, Broken Hill, Kalgoorlie)'
];

export default function Step2_Location({ selection, onSelect, onNext, onBack }: Step2LocationProps) {
  const canContinue = selection.length > 0;

  const handleSelect = (location: string) => {
    console.log('Location selected:', location); // Debug log
    onSelect(location);
  };

  return (
    <div style={{ padding: '10px' }}>
      <div className="text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Where are you located?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Different climate zones need different products. Select your Australian climate zone.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[10px] mb-16">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => handleSelect(location)}
              className={`text-center border-2 transition-all flex-shrink-0 hover:shadow-lg hover:scale-105 font-medium ${
                selection === location
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
              {location}
            </button>
          ))}
        </div>

        {/* Tip Block */}
        <div className="bg-white rounded-xl shadow-md transition hover:shadow-lg max-w-2xl mx-auto mb-12 border-l-4 border-green-400" style={{ padding: '10px' }}>
          <div className="flex items-start gap-3">
            <span className="text-green-600 flex-shrink-0">🌡️</span>
            <p className="text-gray-700 text-sm text-left">
              <strong className="font-semibold">Climate matters:</strong> Your location helps us recommend products formulated for your specific temperature, humidity, and seasonal conditions.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-lg mt-12">
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
              disabled={!canContinue}
              className={`font-medium transition mx-auto ${
                canContinue
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              style={{ 
                borderRadius: '8px',
                padding: '8px 12px',
                maxWidth: '120px',
                width: '100%'
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
