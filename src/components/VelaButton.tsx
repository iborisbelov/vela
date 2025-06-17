import React from "react";
import { cn } from "@/lib/utils";

interface VelaButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const VelaButton: React.FC<VelaButtonProps> = ({
  children,
  variant = "primary",
  size = "default",
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        // Base styles
        "flex justify-center items-center font-body font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",

        // Size variants
        {
          "h-12 px-5 text-base": size === "default",
          "h-14 px-6 text-lg": size === "lg",
        },

        // Variant styles
        {
          "bg-vela-darker-variant text-vela-starlight-white rounded-vela hover:bg-opacity-90 active:scale-95":
            variant === "primary",
          "bg-transparent text-vela-starlight-white border border-vela-starlight-white rounded-vela hover:bg-vela-starlight-white hover:text-vela-deep-space":
            variant === "secondary",
        },

        className,
      )}
    >
      <div className="flex flex-col items-center">
        <div className="leading-6">{children}</div>
      </div>
    </button>
  );
};

export default VelaButton;
