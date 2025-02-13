"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Proposal() {
  // State used to count No button clicks.
  const [noClicks, setNoClicks] = useState(0);
  const background = "/ak.jpg";
  const [message, setMessage] = useState(
    "Congrats on almost winning! Before you get your prize, I must ask, will you please be my valentine?"
  );

  // Update the proposal message based on the number of No clicks.
  useEffect(() => {
    if (noClicks > 0 && noClicks < 3) {
      setMessage("Pleaseeeeeeee be my valentine");
    } else if (noClicks > 2 && noClicks < 6) {
      setMessage("Pretty pretty pleaseeeee");
    } else if (noClicks > 5 && noClicks < 9) {
      setMessage("Pleaseee with a cute cherry on top??");
    } else if (noClicks > 8 && noClicks < 12) {
      setMessage("Ok how about 5 cherries on top? pls..");
    } else if (noClicks > 11 && noClicks < 15) {
      setMessage("Please please please I'll give 15 raspberries");
    } else if (noClicks > 14 && noClicks < 18) {
      setMessage("Please with sad puppy dog eyes");
    } else if (noClicks > 17 && noClicks < 21) {
      setMessage("Pleaseeeeeeeeeeeeeeeeeeeeee");
    } else {
      // Use the default message for all other cases.
      setMessage(
        "Alas, all more I can say is, please be my valentine.."
      );
    }
  }, [noClicks]);

  // Button scaling: each "No" click increases the Yes button by 0.05 and decreases the No button by 0.05, with a minimum of 0.2.
  const yesScale = 1 + noClicks * 0.05;
  const noScale = Math.max(1 - noClicks * 0.05, 0.2);

  return (
    <div className="relative min-h-screen text-center">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      ></div>

      {/* Content Container: Message, Buttons, Prat Image */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full">
        {/* Proposal Message with extra bottom margin */}
        <h1 className="text-7xl font-bold text-white mb-12">{message}</h1>

        {/* Buttons Row with extra bottom margin */}
        <div className="flex space-x-8 justify-center mb-12">
          {/* Yes Button */}
          <button
            className="continue-button"
            onClick={() => (window.location.href = "/win")}
            style={{
              transform: `scale(${yesScale})`,
              transition: "transform 0.2s ease",
              padding: "1rem 2rem",
              fontSize: "2rem",
            }}
          >
            Yes
          </button>
          {/* No Button */}
          <button
            className="restart-button"
            onClick={() => setNoClicks(noClicks + 1)}
            style={{
              transform: `scale(${noScale})`,
              transition: "transform 0.2s ease",
              padding: "1rem 2rem",
              fontSize: "2rem",
            }}
          >
            No
          </button>
        </div>

        {/* Prat Image */}
        <div>
          <Image src="/prat.png" alt="Prat" width={400} height={400} priority />
        </div>
      </div>
    </div>
  );
}