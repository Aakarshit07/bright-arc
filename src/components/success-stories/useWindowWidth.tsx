import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function checkMobile() {
      setIsMobile(window.innerWidth < 640);
    }

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
