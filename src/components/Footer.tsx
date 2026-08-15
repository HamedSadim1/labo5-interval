import { Zap } from "lucide-react";
import { COPY } from "@/config";
import { TEXT_MUTED } from "@/theme";

const Footer = () => {
  return (
    <footer className="mt-14 text-center">
      <div className={`inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-2.5 text-sm ${TEXT_MUTED}`}>
        <Zap className="h-4 w-4 text-amber-400" />
        {COPY.footer.builtWith}
      </div>
      <p className="mt-4 text-xs text-slate-500">{COPY.footer.shortcuts}</p>
    </footer>
  );
};

export default Footer;
