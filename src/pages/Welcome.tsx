import React from "react";
import { useNavigate } from "react-router-dom";
import VelaButton from "../components/VelaButton";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex flex-col bg-vela-deep-space overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fe2b1054892dc42b29c13bce357ce3603)",
      }}
    >
      {/* Hero image */}
      <div className="relative z-10 w-full flex justify-center pt-8">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/assets/b3f92eb613934d858f85eaa13a3f8306/img-3e3fc0?format=webp&width=800"
          alt="Vela hero constellation"
          className="w-auto h-auto max-w-[300px] max-h-[200px] object-contain"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center justify-center min-h-screen px-4 space-y-6">
          {/* Subtitle */}
          <div className="w-full text-vela-starlight-white text-center font-body text-subtitle font-normal italic">
            "Navigate from Within"
          </div>

          {/* Main Title */}
          <div className="w-full text-vela-starlight-white text-center font-heading text-title-hero font-light">
            Welcome to Vela
          </div>

          {/* Description */}
          <div className="w-full text-vela-starlight-white text-center font-body text-subtitle font-normal space-y-2">
            <div>
              the only meditation app built specifically for you. Personalized
              meditations built from your joy, identity, and dreams.
            </div>
          </div>

          {/* Get Started Button */}
          <div className="w-full">
            <VelaButton
              size="lg"
              onClick={() => navigate("/sign-up")}
              className="w-full"
            >
              Get Started
            </VelaButton>

            {/* Sign In Text */}
            <div className="text-center font-body text-subtitle">
              <span className="text-vela-constellation-50">
                Already have an account?{" "}
              </span>
              <span className="text-vela-starlight-white underline">
                Sign in
              </span>
            </div>
          </div>

          {/* Terms Text */}
          <div className="w-full max-w-[358px] text-center font-body text-terms leading-[21px] pt-2">
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

export default Welcome;
