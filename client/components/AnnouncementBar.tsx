import React from "react";

const AnnouncementBar = () => (
  <div className="w-full bg-gradient-to-r from-[#211278] to-[#828cc6] text-white text-center py-2 px-4 font-semibold text-sm sm:text-base tracking-wide animate-pulse z-50">
    🔥 Technolthon Merch is now LIVE! Grab yours today exclusively at{" "}
    <a
      href="https://trendydice.in"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-yellow-300 transition"
    >
      TrendyDice.in
    </a>{" "}
    – don’t miss out on the latest drops!
  </div>
);

export default AnnouncementBar;
