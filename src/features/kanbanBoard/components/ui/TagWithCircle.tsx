import React from "react";
import { TagWithCircleProps } from "../../types";

export const TagWithCircle = React.forwardRef<HTMLDivElement, TagWithCircleProps>(
    ({ className="", color = "gray", tagText }, ref) => {
        return (
            <div ref={ref} className={`tag-with-circle ${className}`}>
                <div className="tag-circle" style={{backgroundColor: color}}></div>
                <div className="tag-text ml-2">{tagText}</div>
            </div>
        );
    }
);
