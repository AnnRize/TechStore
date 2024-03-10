import { InputHTMLAttributes, forwardRef } from "react";
import style from "./MyInput.module.scss";

export const MyInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
   ({ children, className, ...props }, ref) => {
      return (
         <input className={`${style.myInput} ${className}`} {...props} ref={ref}>
            {children}
         </input>
      );
   },
);
