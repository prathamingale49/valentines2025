"use client";

import { useState } from "react";
import Image from "next/image";

export default function ElephantGame() {
  const [clicks, setClicks] = useState(0);
  const [cloudImage, setCloudImage] = useState("/drycloud.png");
  const [background, setBackground] = useState("/drysavannah.png");
  const [message, setMessage] = useState(
    "Welcome! Below is Bogo, who is SAD and DRY. Try to make her WET!"
  );
  const [showElephant, setShowElephant] = useState(true);
  const [showCloud, setShowCloud] = useState(true);

  const handleClick = () => {
    // On the very first click update the cloud & message
    if (clicks === 0) {
      setCloudImage("/raining.png");
      setMessage("Keep clicking to make her WET!");
    }
    
    const newClicks = clicks + 1;
    setClicks(newClicks);

    // These conditions update the message as the number of clicks increases:
    if (clicks > 7) {
      setMessage("Jeez missy, you're GOOD at this!");
    }
    // When exactly 14 clicks are reached
    if (newClicks === 14) {
      setBackground("/svaanahh.jpg");
      setCloudImage("/drycloud.png");
      setMessage("You did it! Bogo is no longer THIRSTY!");
      // Hide the cloud so that the user can only continue now
    } else if (newClicks > 14) {
      // For clicks beyond 14, trigger the flood state
      setBackground("/flood.jpg");
      setMessage("Oh no! Bogo got TOO WET and drowned.");
      setShowElephant(false);
      setShowCloud(false);
    }
  };

  return (
    <div className="relative min-h-screen text-center">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: clicks > 14 ? 0.3 : 0.7,
        }}
      ></div>

      {/* Cloud Button at Center Top */}
      {showCloud && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
          <button onClick={handleClick} className="cloud-button">
            <Image
              src={cloudImage}
              alt="Cloud"
              width={300}
              height={300}
              priority
            />
          </button>
        </div>
      )}

      {/* Middle Content: Message, Continue or Restart Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center space-y-8">
        <h1 className="text-6xl font-bold">{message}</h1>
        {/* Continue button appears when there are exactly 14 clicks */}
        {clicks === 14 && (
          <button
            className="continue-button"
            onClick={() => (window.location.href = "/monkey")}
          >
            Continue
          </button>
        )}
        {/* If more than 14 clicks, the flood condition applies and only the restart button is shown */}
        {clicks > 14 && (
          <button
            className="restart-button"
            onClick={() => (window.location.href = "/")}
          >
            Restart
          </button>
        )}
      </div>

      {/* Elephant at Center Bottom */}
      {showElephant && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
          <Image
            src="/elephant.png"
            alt="Elephant"
            width={400}
            height={225}
            priority
          />
        </div>
      )}
    </div>
  );
}