import React from "react";
import { useNavigate } from "react-router-dom";
import VelaButton from "@/components/VelaButton";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center py-5 px-0 bg-vela-deep-space overflow-hidden">
      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col justify-between items-center min-h-screen py-5">
        {/* Logo/Brand */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2"
          alt="Vela logo"
          className="aspect-square object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden max-w-[91px]"
        />

        {/* Hero Image */}
        <div
          className="w-full max-w-[314px] h-[292px] flex-shrink-0 rounded-lg mb-8 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2F37ab520a469a459bae058a74cc3589da)",
          }}
        />

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-end items-center text-center px-4 space-y-6">
          {/* Subtitle */}
          <div className="w-full text-vela-starlight-white text-center font-satoshi text-subtitle font-normal italic">
            "Navigate from Within"
          </div>

          {/* Main Title */}
          <div className="w-full text-vela-starlight-white text-center font-canela text-title-hero font-light">
            Welcome to Vela
          </div>

          {/* Description */}
          <div className="w-full text-vela-starlight-white text-center font-satoshi text-subtitle font-normal space-y-2">
            <div>
              the only meditation app built specifically for you. Personalized
              meditations built from your joy, identity, and dreams.
            </div>
            <div>Guided by AI, grounded in neuroscience.</div>
            <div className="font-bold">
              Set sail to manifest your dream life, with Vela.
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full flex flex-col items-center space-y-3 pt-4">
            {/* Get Started Button */}
            <div className="w-full px-4">
              <VelaButton
                onClick={() => navigate("/sign-up")}
                className="w-full"
                size="lg"
              >
                Get Started
              </VelaButton>
            </div>

            {/* Sign In Text */}
            <div className="text-center font-satoshi text-subtitle">
              <span className="text-vela-constellation-50">
                Already have an account?
              </span>
              <span className="text-vela-starlight-white"> Sign In</span>
            </div>
          </div>

          {/* Terms Text */}
          <div className="w-full max-w-[358px] text-center font-satoshi text-terms leading-[21px] pt-2">
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
