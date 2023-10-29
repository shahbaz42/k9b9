import React from "react";
import { CardHolderProps } from "../types";
import { PlusIcon, EllipsisHzIcon } from "../assets/icons";

export const CardHolder = React.forwardRef<HTMLDivElement, CardHolderProps>(
  ({ className, icon, name, count, ...props }, ref) => {
    return (
      <div className={`kanban-card-holder ${className}`} ref={ref} {...props}>
        <div className="kanban-card-holder-header">
          <div className="kanban-card-holder-header-info">
            <div className="icon">{icon}</div>
            <div className="heading-3">{name}</div>
            <div className="muted-heading-3">{count}</div>
          </div>

          <div className="kanban-card-holder-header-actions">
            <div className="icon">
              <PlusIcon />
            </div>
            <div className="icon">
              <EllipsisHzIcon />
            </div>
          </div>
        </div>
        {props.children}
      </div>
    );
  }
);
