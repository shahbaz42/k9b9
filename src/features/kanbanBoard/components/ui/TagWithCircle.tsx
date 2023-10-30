import React from "react";
import { TagWithCircleProps } from "../../types";

export const TagWithCircle = React.forwardRef<HTMLDivElement, TagWithCircleProps>(
    ({ className, color = "grey", tagText }, ref) => {
        return (
            <div ref={ref} className={`tag-with-circle flex flex-row align-center ${className}`}>
                <div className="tag-circle" style={{backgroundColor: color}}></div>
                <div className="tag-text">{tagText}</div>
            </div>
        );
    }
);
