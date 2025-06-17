import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DreamLifeIntake: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [goals, setGoals] = useState<string>("");

  const ageOptions = ["18-24", "25-34", "35-44", "45-54", "55+"];
  const genderOptions = ["Female", "Male", "Non-binary/Other"];

  // Check if all required fields are filled
  const isFormValid = selectedAge && selectedGender && goals.trim();

  const handleNext = () => {
    if (!isFormValid) return;
    // Navigate to second step of meditation generator
    console.log("Form data:", { selectedAge, selectedGender, goals });
    navigate("/dream-life-vision");
  };

  const handleBack = () => {
    navigate("/how-trial-works");
  };

  return (
    <div
      className="relative min-h-screen flex flex-col bg-vela-deep-space overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Ffb5645559ede4ce7b190024271b8c38e)",
      }}
    >
      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col min-h-screen">
        {/* Header with navigation and breadcrumbs */}
        <div className="flex justify-between items-center pt-6 px-4 mb-8">
          {/* Back arrow */}
          <button
            onClick={handleBack}
            className="w-6 h-6 transition-all hover:opacity-80"
          >
            <svg
              className="w-[18px] h-4 fill-vela-starlight-white"
              width="18"
              height="16"
              viewBox="0 0 18 16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 8C18 8.41421 17.6642 8.75 17.25 8.75H2.56031L8.03063 14.2194C8.32368 14.5124 8.32368 14.9876 8.03063 15.2806C7.73757 15.5737 7.26243 15.5737 6.96937 15.2806L0.219375 8.53063C0.0785422 8.38995 -0.000590086 8.19906 -0.000590086 8C-0.000590086 7.80094 0.0785422 7.61005 0.219375 7.46937L6.96937 0.719375C7.26243 0.426319 7.73757 0.426319 8.03063 0.719375C8.32368 1.01243 8.32368 1.48757 8.03063 1.78062L2.56031 7.25H17.25C17.6642 7.25 18 7.58579 18 8Z"
                fill="#F2EFEA"
              />
            </svg>
          </button>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-1 flex-1 justify-center">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`h-2 flex-1 max-w-[37px] rounded-full ${
                  step === 1 ? "bg-vela-dream-blue" : "bg-white/8"
                }`}
              />
            ))}
          </div>

          {/* Info icon */}
          <button className="w-6 h-6 transition-all hover:opacity-80">
            <svg
              className="w-[22px] h-[22px] fill-vela-dream-blue"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path
                d="M11 13.2C10.728 13.2 10.4622 13.2806 10.2361 13.4317C10.01 13.5828 9.83373 13.7976 9.72966 14.0488C9.62559 14.3001 9.59836 14.5765 9.65141 14.8432C9.70447 15.11 9.83542 15.355 10.0277 15.5473C10.22 15.7396 10.465 15.8705 10.7317 15.9236C10.9985 15.9766 11.2749 15.9494 11.5262 15.8453C11.7774 15.7413 11.9922 15.565 12.1433 15.3389C12.2943 15.1128 12.375 14.8469 12.375 14.575C12.375 14.2103 12.2301 13.8606 11.9723 13.6027C11.7144 13.3449 11.3647 13.2 11 13.2ZM11 11.55C11.2917 11.55 11.5715 11.4341 11.7778 11.2278C11.9841 11.0215 12.1 10.7417 12.1 10.45V7.15C12.1 6.85826 11.9841 6.57847 11.7778 6.37218C11.5715 6.16589 11.2917 6.05 11 6.05C10.7083 6.05 10.4285 6.16589 10.2222 6.37218C10.0159 6.57847 9.89999 6.85826 9.89999 7.15V10.45C9.89999 10.7417 10.0159 11.0215 10.2222 11.2278C10.4285 11.4341 10.7083 11.55 11 11.55ZM11 0C8.8244 0 6.69766 0.645139 4.88873 1.85383C3.07979 3.06253 1.66989 4.78049 0.837329 6.79048C0.00476612 8.80047 -0.21307 11.0122 0.211367 13.146C0.635803 15.2798 1.68345 17.2398 3.22183 18.7782C4.7602 20.3165 6.72021 21.3642 8.854 21.7886C10.9878 22.2131 13.1995 21.9952 15.2095 21.1627C17.2195 20.3301 18.9374 18.9202 20.1461 17.1113C21.3548 15.3023 22 13.1756 22 11C21.9967 8.08361 20.8368 5.2876 18.7746 3.22541C16.7124 1.16321 13.9164 0.00324344 11 0ZM11 19.8C9.25952 19.8 7.55813 19.2839 6.11098 18.3169C4.66383 17.35 3.53591 15.9756 2.86986 14.3676C2.20381 12.7596 2.02954 10.9902 2.36909 9.2832C2.70864 7.57617 3.54676 6.00816 4.77746 4.77746C6.00816 3.54676 7.57617 2.70864 9.2832 2.36909C10.9902 2.02954 12.7596 2.20381 14.3676 2.86986C15.9756 3.53591 17.35 4.66383 18.3169 6.11098C19.2839 7.55813 19.8 9.25952 19.8 11C19.7973 13.3331 18.8693 15.5698 17.2196 17.2196C15.5698 18.8693 13.3331 19.7973 11 19.8Z"
                fill="#C9DFF4"
              />
            </svg>
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center px-4 space-y-6">
          {/* Title section */}
          <div className="flex flex-col items-center gap-1.5 w-full">
            <h1 className="text-vela-starlight-white text-center font-canela text-title-hero font-light">
              Dream life intake
            </h1>
            <div className="text-vela-starlight-white text-center font-satoshi text-terms font-bold tracking-wider">
              THE VISION BUILDER
            </div>
          </div>

          {/* Description container */}
          <div className="w-full max-w-[358px] p-5 rounded-[20px] bg-vela-constellation-50/50 backdrop-blur-sm">
            <p className="text-vela-starlight-white text-center font-satoshi text-subtitle leading-5">
              Take a quiet moment to connect with yourself. These questions
              aren't just journaling—they activate the parts of your brain
              responsible for vision, clarity, and motivation. You're about to
              build a blueprint for your dream life.
            </p>
          </div>

          {/* Age question */}
          <div className="w-full max-w-[358px] py-2.5 flex flex-col items-start gap-2">
            <div className="pb-2">
              <p className="text-vela-starlight-white font-satoshi text-subtitle leading-5">
                How old are you?
              </p>
            </div>
            <div className="flex items-start gap-2.5 flex-wrap">
              {ageOptions.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  className={`h-9 px-5 flex justify-center items-center rounded-[20px] transition-all hover:opacity-80 ${
                    selectedAge === age ? "ring-2 ring-vela-dream-blue" : ""
                  }`}
                  style={{
                    background: "rgba(164, 199, 234, 0.53)",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <span className="text-vela-dream-blue font-satoshi text-terms font-bold leading-6">
                    {age}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Gender question */}
          <div className="w-full max-w-[358px] py-2.5 flex flex-col items-start gap-2">
            <div className="pb-2">
              <p className="text-vela-starlight-white font-satoshi text-subtitle leading-5">
                Gender?
              </p>
            </div>
            <div className="flex items-start gap-2.5 w-full">
              {genderOptions.map((gender) => (
                <button
                  key={gender}
                  onClick={() => setSelectedGender(gender)}
                  className={`h-9 px-5 flex justify-center items-center rounded-[20px] transition-all hover:opacity-80 ${
                    gender === "Non-binary/Other" ? "flex-1" : ""
                  } ${
                    selectedGender === gender
                      ? "ring-2 ring-vela-dream-blue"
                      : ""
                  }`}
                  style={{
                    background: "rgba(164, 199, 234, 0.53)",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <span className="text-vela-dream-blue font-satoshi text-terms font-bold leading-6">
                    {gender}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Goals question */}
          <div className="w-full max-w-[358px] flex flex-col items-start gap-2.5">
            <div className="pb-2">
              <p className="text-vela-starlight-white font-satoshi text-subtitle leading-5">
                Are there specific goals you want to accomplish, experiences you
                want to have, or habits you want to form or change?
              </p>
            </div>
            <div className="w-full">
              <textarea
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="Describe your text..."
                className="w-full h-[140px] p-5 rounded-[10px] border-none outline-none resize-none text-vela-starlight-white font-satoshi text-terms leading-6 placeholder:text-vela-dream-blue"
                style={{
                  background: "rgba(164, 199, 234, 0.53)",
                  backdropFilter: "blur(5px)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Next button */}
        <div className="w-full px-4 pb-3">
          <div className="max-w-[480px] px-3 py-3 mx-auto">
            <button
              onClick={handleNext}
              disabled={!isFormValid}
              className={`flex h-12 w-full px-5 justify-center items-center rounded-vela font-satoshi font-bold text-subtitle transition-all relative ${
                isFormValid
                  ? "bg-vela-darker-variant text-vela-starlight-white hover:bg-opacity-90"
                  : "bg-vela-darker-variant/30 text-vela-starlight-white/50 cursor-not-allowed"
              }`}
            >
              <span>Next</span>
              <svg
                className={`w-6 h-6 absolute right-5 ${
                  isFormValid
                    ? "fill-vela-starlight-white"
                    : "fill-vela-starlight-white/50"
                }`}
                width="18"
                height="16"
                viewBox="0 0 18 16"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 8C0 8.41421 0.335787 8.75 0.75 8.75H15.4397L9.96937 14.2194C9.67632 14.5124 9.67632 14.9876 9.96937 15.2806C10.2624 15.5737 10.7376 15.5737 11.0306 15.2806L17.7806 8.53063C17.9215 8.38995 18.0006 8.19906 18.0006 8C18.0006 7.80094 17.9215 7.61005 17.7806 7.46937L11.0306 0.719375C10.7376 0.426319 10.2624 0.426319 9.96937 0.719375C9.67632 1.01243 9.67632 1.48757 9.96937 1.78062L15.4397 7.25H0.75C0.335787 7.25 0 7.58579 0 8Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamLifeIntake;
