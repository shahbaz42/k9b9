import React from "react";
import { TopBarProps } from "../types";

const TopBar = React.forwardRef<HTMLDivElement, TopBarProps>(
    ({ className, type = "hzScroll", height=50, ...props }, ref) => {
        return (
            <>
                {type === "hzScroll" ? (
                    <div
                        className={`kanban-topbar-hzScroll ${className}`}
                        ref={ref}
                        style={{ height }}
                        {...props}
                    >
                        {props.children}
                    </div>
                ) : (
                    <div
                        className={`kanban-topbar-collapsible ${className}`}
                        ref={ref}
                        style={{ height }}
                        {...props}
                    >
                        {/* To Do : To Implement vertically draggable TopBar like Topbar it Later */}
                    </div>
                )}
            </>
        );
    }
);

export { TopBar };
