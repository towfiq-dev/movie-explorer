import React, { useState, useEffect } from "react";

const PreLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#070913] text-white select-none">
      {/* Background Ambient Glow */}
      <div className="absolute w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Brand Icon & Spinner */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-24 h-24 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <div className="absolute text-3xl animate-pulse">
          🎬
        </div>
      </div>

      {/* Brand Name */}
      <div className="text-center space-y-1 z-10">
        <h2 className="text-3xl font-black tracking-tight">
          Movie<span className="text-primary">Explorer</span>
        </h2>
        <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
          Loading Cinematic Experience...
        </p>
      </div>

      {/* Dynamic Animated Progress Bar */}
      <div className="w-64 max-w-[80vw] mt-8 flex flex-col items-center gap-2">
        <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden border border-white/10 p-[1px]">
          <div
            className="h-full bg-gradient-to-r from-primary via-indigo-500 to-secondary rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(99,102,241,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Live Percentage Counter */}
        <span className="text-xs font-mono font-semibold text-slate-400">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default PreLoader;