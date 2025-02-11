import { useState, useEffect } from "react";

export const useKeyboardControls = () => {
  const [controls, setControls] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      // eslint-disable-next-line default-case
      switch (event.key) {
        case "w":
        case "ArrowUp":
          setControls((prev) => ({ ...prev, forward: true }));
          break;
        case "s":
        case "ArrowDown":
          setControls((prev) => ({ ...prev, backward: true }));
          break;
        case "a":
        case "ArrowLeft":
          setControls((prev) => ({ ...prev, left: true }));
          break;
        case "d":
        case "ArrowRight":
          setControls((prev) => ({ ...prev, right: true }));
          break;
      }
    };

    const handleKeyUp = (event) => {
      // eslint-disable-next-line default-case
      switch (event.key) {
        case "w":
        case "ArrowUp":
          setControls((prev) => ({ ...prev, forward: false }));
          break;
        case "s":
        case "ArrowDown":
          setControls((prev) => ({ ...prev, backward: false }));
          break;
        case "a":
        case "ArrowLeft":
          setControls((prev) => ({ ...prev, left: false }));
          break;
        case "d":
        case "ArrowRight":
          setControls((prev) => ({ ...prev, right: false }));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return controls;
};
