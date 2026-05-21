import { useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClaimBadge from "./components/ClaimBadge";
import MintSuccess from "./components/MintSuccess";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/Footer";

function App() {
  const { isConnected } = useAppKitAccount();
  const [mintResult, setMintResult] = useState(null);

  const handleMintSuccess = (result) => {
    setMintResult(result);
  };

  const handleReset = () => {
    setMintResult(null);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "rgba(15, 15, 35, 0.95)",
            color: "#fff",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            backdropFilter: "blur(20px)",
            fontFamily: "Inter, sans-serif",
          },
          success: {
            iconTheme: { primary: "#00ff88", secondary: "#0a0a1a" },
          },
          error: {
            iconTheme: { primary: "#ff4466", secondary: "#0a0a1a" },
          },
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {mintResult ? (
            <MintSuccess
              key="success"
              result={mintResult}
              onReset={handleReset}
            />
          ) : isConnected ? (
            <ClaimBadge key="claim" onSuccess={handleMintSuccess} />
          ) : (
            <Hero key="hero" />
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
