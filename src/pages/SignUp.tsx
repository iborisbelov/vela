import React from "react";
import { useNavigate } from "react-router-dom";
import StarryBackground from "@/components/StarryBackground";
import VelaButton from "@/components/VelaButton";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center py-5 px-4 bg-vela-deep-space overflow-hidden">
      <StarryBackground />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-vela-starlight-white font-canela text-title-hero font-light">
            Continue to Sign Up
          </h1>
          <p className="text-vela-starlight-white font-satoshi text-subtitle">
            Choose your preferred sign-up method
          </p>
        </div>

        {/* Sign-up options */}
        <div className="w-full space-y-4">
          <VelaButton className="w-full" variant="primary">
            Continue with Apple
          </VelaButton>
          <VelaButton className="w-full" variant="secondary">
            Continue with Google
          </VelaButton>
          <VelaButton className="w-full" variant="secondary">
            Continue with Facebook
          </VelaButton>
          <VelaButton className="w-full" variant="secondary">
            Continue with Email
          </VelaButton>
        </div>

        {/* Footer text */}
        <div className="text-center">
          <p className="text-vela-constellation-50 font-satoshi text-subtitle">
            If you already have an account, we'll log you in.
          </p>
        </div>

        {/* Back button */}
        <div className="pt-4">
          <button
            onClick={() => navigate("/")}
            className="text-vela-starlight-white font-satoshi text-subtitle underline"
          >
            Back to Welcome
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
