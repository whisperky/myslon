import { keyframes } from "@emotion/react";
import React, { useEffect, useState } from "react";

export const formatNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 10000) {
    return num.toLocaleString();
  } else if (num < 1000000) {
    return Math.floor(num / 1000) + "K";
  } else {
    return (num / 1000000).toFixed(1) + "M";
  }
};

export const glowAnimation = keyframes`
    0% { box-shadow: 0 0 5px rgba(255, 0, 187, 0.5); }
    50% { box-shadow: 0 0 20px rgba(255, 0, 187, 0.8); }
    100% { box-shadow: 0 0 5px rgba(255, 0, 187, 0.5); }
  `;

export const TypewriterText = ({
  text,
  speed = 20,
}: {
  text: string;
  speed: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let i = 0;

    const typeNextChar = () => {
      if (isMounted && i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        setTimeout(typeNextChar, speed);
      } else if (isMounted) {
        setIsTypingComplete(true);
      }
    };

    typeNextChar();

    return () => {
      isMounted = false;
    };
  }, [text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isTypingComplete]);

  return (
    <>
      {displayedText}
      {!isTypingComplete && (
        <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
      )}
    </>
  );
};
