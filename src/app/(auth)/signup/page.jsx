"use client";

import { useState } from "react";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { title: "이름을 입력해주세요.", content: "Enter your personal information." },
    { title: "비밀번호를 입력해주세요.", content: "Set up your account credentials." },
    { title: "약관동의", content: "Review and confirm your details." },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Progress percentage calculation
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="p-6 bg-white rounded-lg">
      {/* Step Progress Bar */}
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="h-2 rounded-full bg-indigo-600 transition-all duration-300"
          />
        </div>
        <div className="mt-6 grid grid-cols-3 text-sm font-medium text-gray-600">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center ${
                index <= currentStep ? "text-indigo-600" : "text-gray-400"
              }`}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="text-center mt-6">
        <h2 className="text-lg font-semibold text-gray-800">
          {steps[currentStep].title}
        </h2>
        <p className="mt-2 text-gray-600">{steps[currentStep].content}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className={`px-4 py-2 rounded-md font-medium ${
            currentStep === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          onClick={handlePrev}
          disabled={currentStep === 0}
        >
          Prev
        </button>
        <button
          className={`px-4 py-2 rounded-md font-medium ${
            currentStep === steps.length - 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>

      {/* Completion Message */}
      {currentStep === steps.length - 1 && (
        <div className="mt-4 text-center text-green-600 font-semibold">
          All steps are complete! 🎉
        </div>
      )}
    </div>
  );
}
