import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HowTrialWorks: React.FC = () => {
  const navigate = useNavigate();
  const [planType, setPlanType] = useState<"annual" | "monthly">("annual");

  const handleStartTrial = () => {
    // Handle trial start logic
    console.log("Starting trial with plan:", planType);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col bg-vela-deep-space overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fe2b1054892dc42b29c13bce357ce3603)",
      }}
    >
      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col justify-between items-center min-h-screen">
        {/* Back arrow - top left */}
        <button
          onClick={() => navigate("/create-account")}
          className="absolute left-4 top-6 w-6 h-6 transition-all hover:opacity-80 z-20"
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

        {/* Logo at top */}
        <img
          loading="lazy"
          alt="Vela logo"
          src="https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2"
          className="aspect-square object-cover object-center w-auto mt-5 min-h-5 min-w-5 overflow-hidden max-w-[91px]"
        />

        {/* Main content */}
        <div className="flex flex-col items-stretch self-stretch flex-1">
          {/* Title section */}
          <div className="flex flex-col items-center self-stretch px-4 pt-5 pb-3">
            <h1 className="self-stretch text-vela-starlight-white text-center font-canela text-title-hero font-light">
              How your trial works
            </h1>
          </div>

          {/* Subtitle and toggle section */}
          <div className="flex flex-col items-center gap-5 self-stretch px-4 pt-1 pb-3">
            <div className="self-stretch text-vela-starlight-white text-center font-satoshi text-subtitle">
              <span className="font-bold">First 4 days free</span>
              <span className="font-normal">, then $79/year ($6.58/month)</span>
            </div>

            {/* Toggle Container */}
            <div className="flex w-full max-w-[328px] items-start gap-5">
              <div className="flex w-full justify-between items-center relative">
                {/* Annual (Active) */}
                <button
                  onClick={() => setPlanType("annual")}
                  className={`flex h-12 min-w-[84px] px-5 justify-center items-center flex-1 rounded-vela transition-all ${
                    planType === "annual"
                      ? "bg-vela-darker-variant text-vela-starlight-white"
                      : "bg-transparent text-vela-starlight-white"
                  }`}
                >
                  <div className="font-satoshi font-bold text-subtitle">
                    Annual
                  </div>
                </button>

                {/* Monthly */}
                <button
                  onClick={() => setPlanType("monthly")}
                  className={`flex h-12 min-w-[84px] px-5 justify-center items-center rounded-r-[70px] transition-all ${
                    planType === "monthly"
                      ? "bg-vela-darker-variant text-vela-starlight-white"
                      : "bg-vela-constellation-50/10 backdrop-blur-sm text-vela-starlight-white"
                  }`}
                  style={{
                    width: "189px",
                    paddingLeft: "40px",
                    paddingRight: "20px",
                  }}
                >
                  <div className="font-satoshi font-bold text-subtitle">
                    Monthly
                  </div>
                </button>
              </div>
            </div>

            {/* Info Container */}
            <div className="flex w-full max-w-[328px] p-5 pl-10 flex-col items-start gap-4 rounded-[20px] bg-vela-constellation-50/10 backdrop-blur-sm relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-5 w-px h-[209px] bg-white/14"></div>

              {/* Share your goals */}
              <div className="flex flex-col items-start relative z-10">
                {/* Dot */}
                <div className="absolute -left-[34px] top-1 w-2.5 h-2.5 rounded-full bg-vela-dream-blue"></div>
                <div className="text-vela-starlight-white font-satoshi font-bold text-subtitle">
                  Share your goals
                </div>
                <div className="text-vela-starlight-white font-satoshi text-subtitle leading-5 max-w-[246px]">
                  We've set up your profile based on your answers.
                </div>
              </div>

              {/* Today */}
              <div className="flex flex-col items-start relative z-10 mt-4">
                {/* Dot */}
                <div className="absolute -left-[34px] top-1 w-2.5 h-2.5 rounded-full bg-vela-dream-blue"></div>
                <div className="text-vela-starlight-white font-satoshi font-bold text-subtitle">
                  Today
                </div>
                <div className="text-vela-starlight-white font-satoshi text-subtitle leading-5 max-w-[246px]">
                  Unlock our library of meditations, sleep sounds, and more
                </div>
              </div>

              {/* In 4 days */}
              <div className="flex flex-col items-start relative z-10 mt-4">
                {/* Dot */}
                <div className="absolute -left-[34px] top-1 w-2.5 h-2.5 rounded-full bg-vela-dream-blue"></div>
                <div className="text-vela-starlight-white font-satoshi font-bold text-subtitle">
                  In 4 days
                </div>
                <div className="text-vela-starlight-white font-satoshi text-subtitle leading-5 max-w-[246px]">
                  You'll be charged, cancel anytime before.
                </div>
              </div>
            </div>

            {/* Why 4 days section */}
            <div className="self-stretch text-vela-starlight-white text-center font-canela text-title-hero font-light px-4 pt-5">
              Why 4 days?
            </div>
            <div className="self-stretch text-vela-starlight-white text-center font-satoshi text-subtitle leading-5 px-4">
              Neuroscience has shown that 4 days is all it takes to start
              rewiring your brain.
            </div>
          </div>

          {/* Start trial button */}
          <div className="flex justify-center items-start self-stretch">
            <div className="flex max-w-[480px] px-4 py-3 flex-col items-start gap-3 flex-1">
              <button
                onClick={handleStartTrial}
                className="flex h-12 min-w-[84px] max-w-[480px] px-5 justify-center items-center self-stretch rounded-vela bg-vela-darker-variant text-vela-starlight-white font-satoshi font-bold text-subtitle transition-all hover:bg-opacity-90"
              >
                <div className="flex flex-col items-center">
                  <div className="truncate text-center">
                    Start my free trial
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center pb-5">
          {/* Terms and conditions */}
          <div className="w-auto max-w-[358px] mx-auto px-4 text-center font-satoshi text-terms leading-[21px]">
            <span className="text-vela-darker-variant">
              By continuing, you agree to our{" "}
            </span>
            <span className="text-vela-starlight-white">Terms of Service</span>
            <span className="text-vela-darker-variant"> and </span>
            <span className="text-vela-starlight-white">Privacy Policy.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTrialWorks;
