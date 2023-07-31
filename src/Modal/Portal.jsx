import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const target = document.querySelector("#myportal");
    if (target) {
      setMounted(true);
    }
  }, []);

  return mounted
    ? createPortal(children, document.querySelector("#myportal"))
    : null;
};

export default Portal;
