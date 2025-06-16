import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import HowTrialWorks from "./pages/HowTrialWorks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Vela App Routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/how-trial-works" element={<HowTrialWorks />} />

          {/* Placeholder routes for future implementation */}
          <Route
            path="/sign-in"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-satoshi">
                Sign In - Coming Soon
              </div>
            }
          />
          <Route
            path="/onboarding"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-satoshi">
                Onboarding - Coming Soon
              </div>
            }
          />
          <Route
            path="/dream-builder"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-satoshi">
                Dream Builder - Coming Soon
              </div>
            }
          />
          <Route
            path="/meditation"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-satoshi">
                Meditation Player - Coming Soon
              </div>
            }
          />
          <Route
            path="/vault"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-satoshi">
                Dream Vault - Coming Soon
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-satoshi">
                Home Dashboard - Coming Soon
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-satoshi">
                Profile - Coming Soon
              </div>
            }
          />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
