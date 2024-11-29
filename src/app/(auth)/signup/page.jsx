"use client";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsChecked, setTermsChecked] = useState({ term1: false, term2: false });

  const handleNext = () => {
    if (currentStep === 0 && !emailError && email) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 1 && !passwordError && password) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2 && termsChecked.term1 && termsChecked.term2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 기본 Enter 동작 방지 (폼 제출 방지)
      handleNext();
    }
  };

  // 이메일 유효성 검사 함수
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "유효한 이메일 주소를 입력해주세요.";
    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const error = validateEmail(value);
    setEmailError(error);
  };

  // 비밀번호 유효성 검사 함수
  const validatePassword = (value) => {
    const isValidLength = value.length <= 16;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    // const hasNumber = /\d/.test(value);

    if (!isValidLength) return "비밀번호는 16자 이하로 입력해주세요.";
    if (!hasSpecialChar) return "비밀번호에는 적어도 하나의 특수문자가 포함되어야 합니다.";
    // if (!hasNumber) return "비밀번호에는 적어도 하나의 숫자가 포함되어야 합니다.";

    return "";
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const error = validatePassword(value);
    setPasswordError(error);
  };

  // 약관 체크박스 상태 업데이트
  const handleTermsChange = (e) => {
    const { name, checked } = e.target;
    setTermsChecked((prev) => ({ ...prev, [name]: checked }));
  };

  // Progress percentage calculation
  const progressPercentage = ((currentStep + 1) / 3) * 100;

  return (
    <div className="bg-white rounded-lg flex flex-col gap-4 flex-1">
      {currentStep <= 2 && (
        <>
          {/* Step Progress Bar */}
          <div aria-hidden="true" className="mt-6">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="h-2 rounded-full bg-indigo-600 transition-all duration-300"
              />
            </div>
            <div className="mt-6 grid grid-cols-3 text-sm font-medium text-gray-600">
              <div className={`text-center ${currentStep >= 0 ? "text-indigo-600" : "text-gray-400"}`}>
                이메일을 입력해주세요.
              </div>
              <div className={`text-center ${currentStep >= 1 ? "text-indigo-600" : "text-gray-400"}`}>
                비밀번호를 입력해주세요.
              </div>
              <div className={`text-center ${currentStep >= 2 ? "text-indigo-600" : "text-gray-400"}`}>
                약관동의
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="text-center mt-6 flex-1">
            {currentStep === 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800">이메일을 입력해주세요.</h2>
                <form className="mt-4" onKeyPress={handleKeyPress}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      value={email}
                      onChange={handleEmailChange}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        emailError
                          ? "border-red-500 text-red-900 focus:ring-red-500"
                          : "border-gray-300 text-gray-900 focus:ring-indigo-600"
                      }`}
                    />
                  </div>
                  {emailError && (
                    <p id="email-error" className="mt-2 text-sm text-red-600">
                      {emailError}
                    </p>
                  )}
                </form>
              </div>
            )}
            {currentStep === 1 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800">비밀번호를 입력해주세요.</h2>
                <form className="mt-4" onKeyPress={handleKeyPress}>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      value={password}
                      onChange={handlePasswordChange}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="비밀번호"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        passwordError
                          ? "border-red-500 text-red-900 focus:ring-red-500"
                          : "border-gray-300 text-gray-900 focus:ring-indigo-600"
                      }`}
                    />
                  </div>
                  {passwordError && (
                    <p id="password-error" className="mt-2 text-sm text-red-600">
                      {passwordError}
                    </p>
                  )}
                </form>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800">약관 동의</h2>
                <p className="mt-2 text-gray-600">아래 약관에 동의해주세요.</p>
                <div className="mt-4 flex flex-col gap-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="term1"
                      checked={termsChecked.term1}
                      onChange={handleTermsChange}
                      className="mr-2"
                    />
                    약관 1 동의
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="term2"
                      checked={termsChecked.term2}
                      onChange={handleTermsChange}
                      className="mr-2"
                    />
                    약관 2 동의
                  </label>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {currentStep === 3 && (
        <div className="mt-4 text-center text-green-600 font-semibold flex flex-col justify-center items-center">
          <div>
         🎉
          </div>
         회원가입이 완료되었습니다!
        </div>
      )}

      {/* Navigation Buttons */}
      {currentStep <= 2 && (
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
            이전
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium ${
              (currentStep === 0 && (!email || emailError)) ||
              (currentStep === 1 && (!password || passwordError)) ||
              (currentStep === 2 && !(termsChecked.term1 && termsChecked.term2))
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
            onClick={handleNext}
            disabled={
              (currentStep === 0 && (!email || emailError)) ||
              (currentStep === 1 && (!password || passwordError)) ||
              (currentStep === 2 && !(termsChecked.term1 && termsChecked.term2))
            }
          >
            {currentStep === 2 ? "완료" : "다음"}
          </button>
        </div>
      )}
    </div>
  );
}
