'use client';

interface Step1SituationProps {
  selection: string;
  onSelect: (value: string) => void;
  onNext: () => void;
}

const situations = [
  'Lawn',
  'Garden beds',
  'Indoor plants',
  'Veggie garden',
  'New turf / soil prep'
];

export default function Step1_Situation({ selection, onSelect, onNext }: Step1SituationProps) {
  return (
    <div className="text-center" style={{ padding: '10px' }}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What are you working on?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Let&apos;s start by understanding your gardening situation so we can recommend the perfect products for you.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[10px] mb-8">
        {situations.map((situation) => (
          <button
            key={situation}
            onClick={() => {
              onSelect(situation);
              setTimeout(() => onNext(), 300);
            }}
            className={`text-center border-2 transition-all flex-shrink-0 hover:shadow-lg hover:scale-105 font-medium ${
              selection === situation
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
            {situation}
          </button>
        ))}
      </div>

      {/* Tip Block */}
      <div className="bg-white rounded-xl shadow-md transition hover:shadow-lg max-w-2xl mx-auto border-l-4 border-green-400 mt-4" style={{ padding: '10px' }}>
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">💡</span>
          <p className="text-gray-700 text-sm text-left">
            <strong className="font-semibold">Tip:</strong> Don&apos;t worry if you have multiple areas - you can run the guide again for different situations.
          </p>
        </div>
      </div>
    </div>
  );
}
