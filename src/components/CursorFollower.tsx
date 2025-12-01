import { useState, useEffect } from "react";
import { snulion1, snulion2 } from "@/assets/image";

export function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setTimeout(() => setIsClicked(false), 200);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100"
      style={{
        left: `${position.x - 40}px`,
        top: `${position.y + 10}px`,
        transform: isClicked ? "scale(2)" : "scale(2)",
      }}
    >
      <img
        src={isClicked ? snulion2 : snulion1}
        alt="cursor"
        className="w-10 h-10 transition-all duration-200"
        style={{
          filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
        }}
      />
    </div>
  );
}
