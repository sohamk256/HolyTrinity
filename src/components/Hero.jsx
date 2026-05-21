import { motion } from "framer-motion";
import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineCube } from "react-icons/hi";

const features = [
  {
    icon: HiOutlineLightningBolt,
    title: "Zero Gas Fees",
    description: "Mint your badge without needing any ETH. Gas is paid via Mock USD through UGF.",
    color: "#00d4ff",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "On-Chain Badge",
    description: "Your personalized SVG badge lives entirely on the blockchain. No IPFS needed.",
    color: "#7b61ff",
  },
  {
    icon: HiOutlineCube,
    title: "Base Sepolia",
    description: "Built on Base L2 for fast, affordable transactions. Perfect for events.",
    color: "#00ff88",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Badge Pill */}
      <motion.div
        variants={itemVariants}
        className="mb-8 px-5 py-2 rounded-full glass border border-cyan-400/20 text-sm text-cyan-400 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        Powered by UGF &middot; Gasless Transactions
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-6xl md:text-7xl font-black text-center leading-tight max-w-4xl mb-6"
      >
        Claim Your{" "}
        <span className="gradient-text">Event Badge</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl text-gray-400 text-center max-w-2xl mb-12 leading-relaxed"
      >
        Mint your personalized NFT badge{" "}
        <span className="text-white font-medium">without ETH gas fees</span>.
        Connect your wallet and claim in seconds.
      </motion.p>

      {/* CTA Button */}
      <motion.div variants={itemVariants} className="mb-20">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <appkit-button />
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Connect your MetaMask to get started
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full"
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass rounded-2xl p-6 group cursor-default transition-all duration-300 hover:shadow-glow"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${feature.color}15` }}
            >
              <feature.icon
                className="w-6 h-6"
                style={{ color: feature.color }}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
