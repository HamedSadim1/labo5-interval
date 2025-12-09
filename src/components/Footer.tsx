import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-12 text-center">
      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-xl">
        <Zap className="w-5 h-5 text-yellow-300" />
        <span className="text-white/80">Built with React & Tailwind CSS</span>
      </div>
    </div>
  );
};

export default Footer;
