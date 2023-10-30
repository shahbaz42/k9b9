import React from "react";
import { SelectWithLabelProps } from "../../types";

export const SelectWithLabel = React.forwardRef<
  HTMLSelectElement,
  SelectWithLabelProps
>(({ className, label, options, value, setValue }, ref) => {
  return (
    <div className={`select-with-label ${className}`}>
      <label className="text-smaller text-semibold">{label}</label>
      <select
        ref={ref}
        className="text-smaller select-comp"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});
