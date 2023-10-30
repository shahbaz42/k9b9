import React from "react";
import { TicketCardHolderProps } from "../types";
import { PlusIcon, EllipsisHzIcon } from "../assets/icons";

export const TicketCardHolder = React.forwardRef<HTMLDivElement, TicketCardHolderProps>(
  ({ className="", statusIcon, name, count, ...props }, ref) => {
    return (
      <div className={`ticket-card-holder ${className}`} ref={ref} {...props}>
        <div className="ticket-card-holder-header">
          <div className="ticket-card-holder-header-info">
            <div className="icon">{statusIcon}</div>
            <div className="heading-3">{name}</div>
            <div className="muted-heading-3">{count}</div>
          </div>

          <div className="ticket-card-holder-header-actions">
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
