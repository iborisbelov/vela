import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import HowTrialWorks from "./pages/HowTrialWorks";
import DreamLifeIntake from "./pages/DreamLifeIntake";
import DreamLifeVision from "./pages/DreamLifeVision";
import ChooseRitual from "./pages/ChooseRitual";
import CustomizeExperience from "./pages/CustomizeExperience";
import GeneratingMeditation from "./pages/GeneratingMeditation";
import SleepStreamMeditation from "./pages/SleepStreamMeditation";
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
          <Route path="/dream-life-intake" element={<DreamLifeIntake />} />
          <Route path="/dream-life-vision" element={<DreamLifeVision />} />
          <Route path="/choose-ritual" element={<ChooseRitual />} />
          <Route
            path="/customize-experience"
            element={<CustomizeExperience />}
          />
          <Route
            path="/generating-meditation"
            element={<GeneratingMeditation />}
          />
          <Route
            path="/sleep-stream-meditation"
            element={<SleepStreamMeditation />}
          />

          {/* Placeholder routes for future implementation */}
          <Route
            path="/sign-in"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-body">
                Sign In - Coming Soon
              </div>
            }
          />
          <Route
            path="/onboarding"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-body">
                Onboarding - Coming Soon
              </div>
            }
          />
          <Route
            path="/dream-builder"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-body">
                Dream Builder - Coming Soon
              </div>
            }
          />
          <Route
            path="/meditation"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-body">
                Meditation Player - Coming Soon
              </div>
            }
          />
          <Route
            path="/vault"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-body">
                Dream Vault - Coming Soon
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-body">
                Home Dashboard - Coming Soon
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="min-h-screen bg-vela-deep-space flex items-center justify-center text-vela-starlight-white font-body">
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
