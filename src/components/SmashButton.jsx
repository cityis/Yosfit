import React from "react";

const SmashButton = () => {
  return (
    <button className="group w-[75%] relative px-8 py-4 font-bold text-white uppercase tracking-wider rounded-2xl bg-MonoRed border-b-8 border-red-700 active:border-b-0 active:translate-y-2 transition-all duration-100 shadow-[0_15px_25px_-10px_rgba(239,68,68,0.8)] focus:outline-none focus:ring-4 focus:ring-red-400/50">
      <span className="absolute inset-0 w-full h-full rounded-2xl bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
      <span className="absolute top-2 left-3 w-6 h-3 rounded-full bg-white/40 blur-[2px] pointer-events-none" />
      <span className="relative flex items-center justify-center gap-2 drop-shadow-md">
        <svg
          className="w-6 h-6 animate-pulse"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        Empieza Ahora
      </span>
    </button>
  );
};

export default SmashButton;
