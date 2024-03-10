import { CSSProperties } from "react";

export const toastStyle = {
   className: "",
   style: {
      zIndex: 9999,
   } as CSSProperties,
   success: {
      style: {
         color: "var(--accent-clr)",
         border: "var(--border)",
         background: "var(--primary-dark-clr)",
      } as CSSProperties,
      icon: "👏",
   },
   duration: 1000,
};
