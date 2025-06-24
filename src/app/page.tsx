'use client';

import { useState } from 'react';
import Step1_Situation from '@/components/Step1_Situation';
import Step2_Location from '@/components/Step2_Location';
import Step3_Goals from '@/components/Step3_Goals';
import Step4_Issues from '@/components/Step4_Issues';
import Step2_5_SoilType from '@/components/Step2_5_SoilType';
import Step5_Results from '@/components/Step5_Results';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({
    situation: '',
    location: '',
    goals: [] as string[],
    issues: [] as string[],
    soil: ''
  });

  const updateSelection = (key: string, value: string | string[]) => {
    setSelections(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const totalSteps = 6; // Including results as step 6

  const restartQuiz = () => {
    setCurrentStep(1);
    setSelections({
      situation: '',
      location: '',
      goals: [],
      issues: [],
      soil: ''
    });
  };

  if (currentStep === 6) {
    return (
      <Step5_Results 
        selections={selections} 
        onRestart={restartQuiz}
        onBack={prevStep}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-[600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Plant Doctor Product Guide
            </h1>
            <p className="text-base text-gray-600">
              Find the perfect products for your Australian garden
            </p>
          </div>

          {/* Main Content Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100" style={{ padding: '10px' }}>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-3">
                <span className="font-medium">Step {currentStep} of {totalSteps - 1}</span>
                <span>{Math.round((currentStep / (totalSteps - 1)) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step Content */}
            <div>
          {currentStep === 1 && (
            <Step1_Situation 
              selection={selections.situation}
              onSelect={(value) => updateSelection('situation', value)}
              onNext={nextStep}
            />
          )}
          
          {currentStep === 2 && (
            <Step2_Location 
              selection={selections.location}
              onSelect={(value) => updateSelection('location', value)}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          
          {currentStep === 3 && (
            <Step3_Goals 
              selections={selections.goals}
              onSelect={(value) => updateSelection('goals', value)}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          
          {currentStep === 4 && (
            <Step4_Issues 
              selections={selections.issues}
              onSelect={(value) => updateSelection('issues', value)}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          
          {currentStep === 5 && (
            <Step2_5_SoilType 
              selection={selections.soil}
              onSelect={(value) => updateSelection('soil', value)}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
            </div>

            {/* Footer */}
            <div className="text-center mt-8 text-gray-500 text-sm">
              <p>🇦🇺 Proudly Australian • <span className="font-medium text-green-700">Plant Doctor</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
