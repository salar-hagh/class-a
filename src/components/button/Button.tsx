import { ComponentProps, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { twMerge } from "tailwind-merge";

type IButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode;
  icon?: string;
};

function Button({ children, className, icon, ...rest }: IButtonProps) {

  return (
    <button
      {...rest}
      className={twMerge(
        `bg-sky-500 text-white rounded flex items-center px-4 py-1`,
        className
      )}
    >
      {children}

      {icon && <img className="w-3 ml-2" src={icon} alt="" />}
    </button>
  );
}

export default Button;
