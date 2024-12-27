import { useEffect } from "react";

const useClickOutside = (ref: React.RefObject<HTMLElement>, handler: () => void): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      if ((ref.current == null) || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
