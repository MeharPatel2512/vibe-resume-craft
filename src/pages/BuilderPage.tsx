
import { useState } from "react";
import { ResumeProvider } from "@/components/ResumeContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckIcon } from "lucide-react";
import PersonalInfoForm from "@/components/resume/PersonalInfoForm";
import EducationForm from "@/components/resume/EducationForm";
import ExperienceForm from "@/components/resume/ExperienceForm";
import SkillsForm from "@/components/resume/SkillsForm";
import ThemeSelector from "@/components/resume/ThemeSelector";
import ResumePreview from "@/components/resume/ResumePreview";

type Step = "personal" | "education" | "experience" | "skills" | "preview";

const steps: { id: Step; label: string }[] = [
  { id: "personal", label: "Personal Info" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "preview", label: "Preview" },
];

const BuilderPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>("personal");

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleNext = (step: Step) => {
    setCurrentStep(step);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "personal":
        return (
          <PersonalInfoForm onNext={() => handleNext("education")} />
        );
      case "education":
        return (
          <EducationForm 
            onNext={() => handleNext("experience")}
            onPrevious={() => handleNext("personal")}
          />
        );
      case "experience":
        return (
          <ExperienceForm 
            onNext={() => handleNext("skills")}
            onPrevious={() => handleNext("education")}
          />
        );
      case "skills":
        return (
          <SkillsForm 
            onNext={() => handleNext("preview")}
            onPrevious={() => handleNext("experience")}
          />
        );
      case "preview":
        return (
          <ResumePreview
            onPrevious={() => handleNext("skills")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ResumeProvider>
      <div className="pt-28 pb-16 bg-gray-50 min-h-screen">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-2">
            Resume Builder
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
            Create your professional resume in minutes with our easy-to-use builder. 
            Fill out each section and preview your resume before downloading.
          </p>
          
          {/* Progress Bar */}
          <div className="mb-12 max-w-3xl mx-auto">
            <Progress value={progress} className="h-2" />
            
            <div className="flex justify-between mt-4 relative">
              {steps.map((step, index) => {
                const isActive = currentStepIndex >= index;
                const isCurrentStep = currentStep === step.id;
                
                return (
                  <div 
                    key={step.id} 
                    className={`flex flex-col items-center cursor-pointer ${isActive ? "text-resume-primary" : "text-gray-400"}`}
                    onClick={() => index <= currentStepIndex && handleNext(step.id)}
                  >
                    <div 
                      className={`
                        h-8 w-8 rounded-full flex items-center justify-center 
                        ${isCurrentStep 
                          ? "bg-resume-primary text-white"
                          : isActive
                            ? "border-2 border-resume-primary"
                            : "border-2 border-gray-300"
                        }
                      `}
                    >
                      {isActive && !isCurrentStep ? (
                        <CheckIcon className="h-4 w-4" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    <span className="text-xs mt-1 hidden md:block">{step.label}</span>
                  </div>
                );
              })}
              
              {/* Connecting line */}
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2">
                <div 
                  className="h-full bg-resume-primary transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Form Container */}
          <div className="max-w-5xl mx-auto">
            {renderStepContent()}
            
            {currentStep !== "preview" && currentStep !== "personal" && (
              <div className="mt-8 py-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  You can always return to previous steps by clicking on the progress bar above.
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      const prevIndex = Math.max(0, currentStepIndex - 1);
                      handleNext(steps[prevIndex].id);
                    }}
                  >
                    Previous Step
                  </Button>
                  <Button
                    className="primary-button"
                    onClick={() => {
                      const nextIndex = Math.min(steps.length - 1, currentStepIndex + 1);
                      handleNext(steps[nextIndex].id);
                    }}
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ResumeProvider>
  );
};

export default BuilderPage;
