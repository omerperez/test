import { debounce } from "@/utils/debounce";
import { useEffect, useState } from "react";

interface WindowSizeState {
  height: number;
  width: number;
}

export const useWindowSize = (): WindowSizeState => {
  const [windowSize, setWindowSize] = useState<WindowSizeState>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    const debouncedResizeHandler = debounce(handleResize, 200);

    window.addEventListener("resize", debouncedResizeHandler);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);

  return windowSize;
};
