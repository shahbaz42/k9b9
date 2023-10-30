import React from "react";

export interface SmallMenuBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const SmallMenuBox = React.forwardRef<HTMLDivElement, SmallMenuBoxProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={`small-menu-box ${className}`}>
        {children}
      </div>
    );
  }
);
