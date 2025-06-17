import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GeneratingMeditation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate generation process - redirect after 5 seconds
    const timer = setTimeout(() => {
      // Navigate to Sleep Stream Meditation player page
      console.log("Meditation generation complete!");
      navigate("/sleep-stream-meditation");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="relative min-h-screen flex flex-col bg-vela-deep-space overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Ffb5645559ede4ce7b190024271b8c38e)",
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 z-0">
        {/* Spiral/vortex animation container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Multiple rotating rings for vortex effect */}
          <div className="absolute w-96 h-96 animate-spin duration-[20s] opacity-30">
            <div className="w-full h-full rounded-full border border-white/10" />
          </div>
          <div
            className="absolute w-80 h-80 animate-spin opacity-40"
            style={{ animationDirection: "reverse", animationDuration: "15s" }}
          >
            <div className="w-full h-full rounded-full border border-white/15" />
          </div>
          <div className="absolute w-64 h-64 animate-spin duration-[10s] opacity-50">
            <div className="w-full h-full rounded-full border border-white/20" />
          </div>
          <div
            className="absolute w-48 h-48 animate-spin opacity-60"
            style={{ animationDirection: "reverse", animationDuration: "8s" }}
          >
            <div className="w-full h-full rounded-full border border-white/25" />
          </div>
          <div className="absolute w-32 h-32 animate-spin duration-[6s] opacity-70">
            <div className="w-full h-full rounded-full border border-white/30" />
          </div>

          {/* Central glowing core */}
          <div className="absolute w-16 h-16 bg-white/20 rounded-full blur-sm animate-pulse" />
          <div
            className="absolute w-8 h-8 bg-white/40 rounded-full animate-pulse"
            style={{ filter: "blur(1px)" }}
          />
          <div className="absolute w-4 h-4 bg-white/60 rounded-full animate-pulse" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col justify-center items-center min-h-screen px-4">
        {/* Loading text */}
        <div className="text-center">
          <p className="text-vela-starlight-white font-satoshi text-subtitle font-bold leading-5 max-w-[278px] animate-pulse">
            We're shaping your vision into a meditative journey…
          </p>
        </div>

        {/* Loading dots animation */}
        <div className="flex items-center space-x-2 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-vela-starlight-white rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.4s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneratingMeditation;
