import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import StarryBackground from "@/components/StarryBackground";
import VelaButton from "@/components/VelaButton";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center py-5 px-4 bg-vela-deep-space overflow-hidden">
      <StarryBackground />

      <div className="relative z-10 max-w-md mx-auto text-center space-y-6">
        <h1 className="text-6xl font-bold text-vela-dream-blue font-canela">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-vela-starlight-white font-canela">
          Page not found
        </h2>
        <p className="text-vela-starlight-white font-satoshi text-subtitle">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <VelaButton onClick={() => navigate("/")} className="mt-6">
          Go back home
        </VelaButton>
      </div>
    </div>
  );
};

export default NotFound;
