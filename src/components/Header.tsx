import { Clock } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-3">
        <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          <Clock className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Interval Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Header;
