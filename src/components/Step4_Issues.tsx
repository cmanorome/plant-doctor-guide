'use client';

interface Step4IssuesProps {
  selections: string[];
  onSelect: (values: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const issues = [
  'Yellowing leaves',
  'Poor growth',
  'Dry soil',
  'Compacted clay',
  'Sandy soil',
  'Pest problems',
  'Disease issues',
  'Nutrient deficiency',
  'Poor drainage',
  'Weak root system',
  'No specific issues - just want to improve'
];

export default function Step4_Issues({ selections, onSelect, onNext, onBack }: Step4IssuesProps) {
  const handleToggle = (issue: string) => {
    if (selections.includes(issue)) {
      onSelect(selections.filter(s => s !== issue));
    } else {
      onSelect([...selections, issue]);
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <div className="text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Any specific issues? (Optional)</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Select any problems you're experiencing. This helps us recommend more targeted solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[10px] mb-16">
          {issues.map((issue) => {
            const isSelected = selections.includes(issue);
            return (
              <button
                key={issue}
                onClick={() => handleToggle(issue)}
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
                  <span>{issue}</span>
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
            <span className="text-blue-600 flex-shrink-0">ℹ️</span>
            <p className="text-gray-700 text-sm text-left">
              <strong className="font-semibold">Optional step:</strong> You can skip this section if you don&apos;t have any specific issues. We&apos;ll still provide great recommendations!
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
