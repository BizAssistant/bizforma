import { Check } from 'lucide-react';

interface Step {
  id: number;
  name: string;
  description: string;
}

interface ProgressStepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function ProgressStepper({ steps, currentStep, onStepClick }: ProgressStepperProps) {
  return (
    <div className="relative">
      {/* Progress bar container with glass effect */}
      <div className="absolute top-5 left-0 right-0 h-2 backdrop-blur-sm bg-white/[0.03] rounded-full overflow-hidden border border-white/5">
        {/* Metallic progress bar with glow */}
        <div
          className="relative h-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        >
          {/* Gradient fill */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 blur-sm"></div>
          
          {/* Shine animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
        </div>
      </div>

      {/* Steps */}
      <div className="relative flex justify-between">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;

          return (
            <button
              key={step.id}
              onClick={() => onStepClick(step.id)}
              className="flex flex-col items-center group cursor-pointer relative"
            >
              {/* Glow effect for current/completed steps */}
              {(isCurrent || isCompleted) && (
                <div className="absolute top-0 w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              )}
              
              {/* Step circle with glass effect */}
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all backdrop-blur-md relative overflow-hidden ${
                    isCompleted
                      ? 'bg-gradient-to-br from-cyan-500 to-purple-600 border-cyan-400/50 text-white shadow-lg shadow-cyan-500/50'
                      : isCurrent
                      ? 'bg-white/[0.08] border-orange-400 text-orange-300 shadow-lg shadow-orange-500/30'
                      : 'bg-white/[0.03] border-white/10 text-gray-500'
                  }`}
                >
                  {/* Metallic shine overlay */}
                  {(isCurrent || isCompleted) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                  )}
                  
                  {isCompleted ? (
                    <Check className="w-5 h-5 relative z-10" />
                  ) : (
                    <span className="relative z-10">{step.id}</span>
                  )}
                </div>
              </div>
              
              <div className="mt-2 text-center hidden lg:block">
                <div
                  className={`text-xs transition-colors ${
                    isCurrent 
                      ? 'text-transparent bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text' 
                      : isCompleted 
                      ? 'text-gray-300' 
                      : 'text-gray-600'
                  }`}
                >
                  {step.name}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}