import { useState } from "react";
import { motion } from "framer-motion";
import { useAppKitAccount } from "@reown/appkit/react";
import { HiOutlineSparkles, HiOutlineUser } from "react-icons/hi";
import { useMintBadge } from "../hooks/useMintBadge";
import BadgePreview from "./BadgePreview";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ClaimBadge({ onSuccess }) {
  const [name, setName] = useState("");
  const { address } = useAppKitAccount();
  const { mintBadge, isLoading, error } = useMintBadge();

  const handleClaim = async () => {
    if (!name.trim()) return;

    try {
      const result = await mintBadge(name);
      onSuccess(result);
    } catch (err) {
      // Error already handled in the hook via toast
      console.error("Mint failed:", err);
    }
  };

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left — Form */}
        <motion.div variants={itemVariants}>
          <div className="glass-strong rounded-3xl p-8 sm:p-10">
            {/* Header */}
            <div className="mb-8">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4"
                style={{
                  background: "rgba(0, 255, 136, 0.1)",
                  color: "#00ff88",
                  border: "1px solid rgba(0, 255, 136, 0.2)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-mint-400 animate-pulse" />
                Wallet Connected
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Claim Your <span className="gradient-text">Badge</span>
              </h2>
              <p className="text-gray-400">
                Enter your name to mint a personalized NFT badge.
                <br />
                <span className="text-cyan-400/80 text-sm">
                  No ETH needed — gas paid via Mock USD
                </span>
              </p>
            </div>

            {/* Connected Address */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-xs font-bold">
                {address ? address.slice(2, 4).toUpperCase() : "??"}
              </div>
              <div>
                <p className="text-sm text-gray-400">Connected as</p>
                <p className="text-sm font-mono text-white">{shortAddress}</p>
              </div>
            </motion.div>

            {/* Name Input */}
            <motion.div variants={itemVariants} className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <HiOutlineUser className="inline w-4 h-4 mr-1.5 -mt-0.5" />
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                maxLength={50}
                disabled={isLoading}
                className="input-field"
                onKeyDown={(e) => e.key === "Enter" && handleClaim()}
                id="name-input"
              />
              <p className="text-xs text-gray-500 mt-2">
                This will appear on your NFT badge ({name.length}/50)
              </p>
            </motion.div>

            {/* Error Display */}
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-4 px-4 py-3 rounded-xl text-sm"
                style={{
                  background: "rgba(255, 68, 102, 0.1)",
                  border: "1px solid rgba(255, 68, 102, 0.2)",
                  color: "#ff4466",
                }}
              >
                {error}
              </motion.div>
            )}

            {/* Claim Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              onClick={handleClaim}
              disabled={isLoading || !name.trim()}
              className="btn-primary w-full text-lg flex items-center justify-center gap-3"
              id="claim-button"
            >
              {isLoading ? (
                <>
                  <div className="spinner !w-5 !h-5 !border-2" />
                  Minting via UGF...
                </>
              ) : (
                <>
                  <HiOutlineSparkles className="w-5 h-5" />
                  Claim Badge — Gasless
                </>
              )}
            </motion.button>

            {/* Info */}
            <motion.p
              variants={itemVariants}
              className="text-center text-gray-500 text-xs mt-4"
            >
              Gas is sponsored via UGF. You&apos;ll approve a Mock USD payment.
            </motion.p>
          </div>
        </motion.div>

        {/* Right — Badge Preview */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <BadgePreview name={name} />
        </motion.div>
      </div>
    </motion.section>
  );
}
