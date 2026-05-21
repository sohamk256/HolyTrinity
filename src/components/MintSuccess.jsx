import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { HiOutlineExternalLink, HiOutlineRefresh, HiOutlineCheckCircle } from "react-icons/hi";
import { EXPLORER_URL } from "../config/contract";
import BadgePreview from "./BadgePreview";

// ─── Confetti Generator ───
function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        size: 4 + Math.random() * 8,
        color: ["#00d4ff", "#7b61ff", "#00ff88", "#ff6b9d", "#ffd700"][
          Math.floor(Math.random() * 5)
        ],
        rotation: Math.random() * 360,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.6}px`,
            backgroundColor: p.color,
            borderRadius: "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Main Component ───
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MintSuccess({ result, onReset }) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const txHash = result?.txHash;
  const shortHash = txHash
    ? `${txHash.slice(0, 10)}...${txHash.slice(-8)}`
    : null;

  return (
    <>
      {showConfetti && <Confetti />}

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-16"
      >
        <div className="max-w-4xl w-full flex flex-col items-center">
          {/* Success Icon */}
          <motion.div
            variants={itemVariants}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-mint-400/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-20 h-20 rounded-full bg-mint-400/10 border-2 border-mint-400/40 flex items-center justify-center">
                <HiOutlineCheckCircle className="w-10 h-10 text-mint-400" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-black text-center mb-3"
          >
            Badge <span className="gradient-text">Minted!</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-center text-lg mb-10 max-w-lg"
          >
            Your personalized NFT badge has been minted gaslessly on Base
            Sepolia. Welcome aboard, <span className="text-white font-medium">{result?.name}</span>!
          </motion.p>

          {/* Badge Preview */}
          <motion.div variants={itemVariants} className="mb-10">
            <BadgePreview name={result?.name} tokenId="✓" />
          </motion.div>

          {/* Transaction Details Card */}
          <motion.div
            variants={itemVariants}
            className="glass-strong rounded-2xl p-6 w-full max-w-lg mb-8"
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Transaction Details
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 text-sm">Status</span>
                <span className="flex items-center gap-1.5 text-mint-400 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-mint-400" />
                  Confirmed
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 text-sm">Network</span>
                <span className="text-white text-sm">Base Sepolia</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 text-sm">Gas Fee</span>
                <span className="text-cyan-400 text-sm font-medium">
                  Paid via Mock USD (UGF)
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-gray-400 text-sm">Badge Name</span>
                <span className="text-white text-sm">{result?.name}</span>
              </div>

              {txHash && (
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400 text-sm">Tx Hash</span>
                  <a
                    href={`${EXPLORER_URL}/tx/${txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm font-mono hover:underline flex items-center gap-1"
                  >
                    {shortHash}
                    <HiOutlineExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-lg"
          >
            {txHash && (
              <a
                href={`${EXPLORER_URL}/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold glass border border-cyan-400/20 text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300"
              >
                <HiOutlineExternalLink className="w-5 h-5" />
                View on BaseScan
              </a>
            )}

            <button
              onClick={onReset}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold btn-primary"
            >
              <HiOutlineRefresh className="w-5 h-5" />
              Claim Another Badge
            </button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
