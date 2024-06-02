import { useEffect, useState } from "react";

function useScreenHeight() {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    function updateScreenHeight() {
      setScreenHeight(window.innerHeight);
    }

    // Initial screen height
    updateScreenHeight();

    // Event listener for screen height changes
    window.addEventListener("resize", updateScreenHeight);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", updateScreenHeight);
  }, []);

  return screenHeight;
}

export default useScreenHeight;
