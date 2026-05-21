export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
            </svg>
          </div>
          <span>
            <span className="text-gray-400 font-medium">GaslessBadge</span> —
            Hackathon Demo
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a
            href="https://universalgasframework.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            UGF Docs
          </a>
          <a
            href="https://sepolia.basescan.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            BaseScan
          </a>
          <a
            href="https://docs.base.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            Base Docs
          </a>
        </div>
      </div>
    </footer>
  );
}
