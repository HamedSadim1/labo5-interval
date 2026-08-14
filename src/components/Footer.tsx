import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-14 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-slate-400 backdrop-blur-md">
        <Zap className="h-4 w-4 text-amber-300" />
        Built with React, Vite & Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
