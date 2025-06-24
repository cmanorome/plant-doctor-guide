'use client';

interface Step3GoalsProps {
  selections: string[];
  onSelect: (values: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const goals = [
  'Green up lawn',
  'Improve soil structure',
  'Build root health',
  'Boost plant growth',
  'Increase flowering',
  'Enhance fruit/vegetable production',
  'Improve plant resilience',
  'Prepare soil for planting'
];

export default function Step3_Goals({ selections, onSelect, onNext, onBack }: Step3GoalsProps) {
  const handleToggle = (goal: string) => {
    console.log('Goal toggled:', goal); // Debug log
    if (selections.includes(goal)) {
      onSelect(selections.filter(s => s !== goal));
    } else {
      onSelect([...selections, goal]);
    }
  };

  const canContinue = selections.length > 0;

  return (
    <div style={{ padding: '10px' }}>
      <div className="text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What do you want to achieve?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Select all the goals that apply to your gardening situation. You can choose multiple options.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[10px] mb-16">
          {goals.map((goal) => {
            const isSelected = selections.includes(goal);
            return (
              <button
                key={goal}
                onClick={() => handleToggle(goal)}
                className={`text-center border-2 transition-all flex-shrink-0 hover:shadow-lg hover:scale-105 font-medium ${
                  isSelected
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
                <div className="flex flex-col items-center justify-center">
                  <span>{goal}</span>
                  {isSelected && (
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tip Block */}
        <div className="bg-white rounded-xl shadow-md transition hover:shadow-lg max-w-2xl mx-auto mb-12 border-l-4 border-blue-400" style={{ padding: '10px' }}>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 flex-shrink-0">🎯</span>
            <p className="text-gray-700 text-sm text-left">
              <strong className="font-semibold">Multiple goals?</strong> No problem! Select all that apply and we'll recommend products that work together to achieve your combined objectives.
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
