"use client";

import { useState } from "react";
import Image from "next/image";

export default function MonkeyGame() {
  const [clicks, setClicks] = useState(0);
  // This state tracks the horizontal offset for the monkey image.
  const [offset, setOffset] = useState(0);
  const [background] = useState("/jungleback.jpg");
  const [message, setMessage] = useState("Below is Eduardo. He has to stay quiet, but you should PLAY with him!");
  const [showMonkey, setShowMonkey] = useState(true);
  const [showAlligator, setShowAlligator] = useState(false);

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    // Before the alligator appears (clicks less than 31),
    // update the monkey's horizontal offset so it moves side to side.
    if (newClicks < 31 && showMonkey) {
      setOffset((prev) => (prev === 10 ? -10 : 10));
    }

    // Update the game messages based on the click count.
    if (newClicks != 0 && newClicks < 2) {
      setMessage("YESSS, please PLAY with me missy!!");
    } else if (newClicks < 10) {
      setMessage("YESS, keep playing with me!!");
    } else if (newClicks < 20) {
      setMessage("You're making me feel GOOD!");
    } else if (newClicks < 28) {
      setMessage("I LOVE it when you PLAY with me!");
    } else if (newClicks < 30) {
      setMessage("This is perfect!");
    } else if (newClicks === 30) {
      setMessage("Whoa, what's that? An alligator!!");
      setShowAlligator(true);
    } else if (newClicks === 31) {
      setMessage("CHOMP CHOMP");
      setShowMonkey(false);
    } else if (newClicks > 31) {
      setMessage("Game Over: The alligator has won!");
    }
  };

  // Define inline style for the monkey to add side-to-side movement.
  const monkeyStyle = {
    transform: `translateX(${offset}px)`,
    transition: "transform 0.2s ease",
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
          opacity: clicks > 30 ? 0.3 : 0.7,
        }}
      ></div>

      {/* Game Message */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-6xl font-bold">{message}</h1>
      </div>

      {/* Monkey / Alligator Container at the bottom center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        {/* Before 30 clicks, show the clickable monkey */}
        {clicks < 30 && showMonkey && (
          <div onClick={handleClick} className="cursor-pointer" style={monkeyStyle}>
            <Image src="/monkeee.jpg" alt="Monkey" width={400} height={400} priority />
          </div>
        )}

        {/* At exactly 30 clicks, show both the monkey (still clickable with side-to-side motion) and the alligator side by side */}
        {clicks === 30 && showMonkey && showAlligator && (
          <div className="flex justify-center items-center space-x-8">
            <div onClick={handleClick} className="cursor-pointer" style={monkeyStyle}>
              <Image src="/monkeee.jpg" alt="Monkey" width={400} height={400} priority />
            </div>
            <div>
              <Image src="/crcocoo.jpg" alt="Alligator" width={500} height={500} priority />
            </div>
          </div>
        )}

        {/* Once the monkey is eaten (31 clicks and beyond), show only the alligator */}
        {clicks > 30 && !showMonkey && showAlligator && (
          <div>
            <Image src="/crcocoo.jpg" alt="Alligator" width={500} height={500} priority />
          </div>
        )}
      </div>

      {/* Restart Button displayed when the game is over (after 31 clicks) */}
      {clicks == 29 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center space-y-8 w-1/2">
          <button className="continue-button" onClick={() => (window.location.href = "/proposal")}>
            Continue
          </button>
        </div>
      )}

      {clicks > 30 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center space-y-8 w-1/2">
          <button className="restart-button" onClick={() => (window.location.href = "/")}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}