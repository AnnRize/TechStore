import { ButtonHTMLAttributes, forwardRef } from "react";
import style from "./MyButton.module.scss";

export const MyButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
   ({ children, className, ...props }, ref) => {
      return (
         <button className={`${style.myButton} ${className}`} {...props} ref={ref}>
            {children}
         </button>
      );
   },
);
