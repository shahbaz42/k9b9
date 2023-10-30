import React from "react";
import { PriorityIcon } from "../assets/icons";
import { TicketCardProps } from "../types";

export const TicketCard = React.forwardRef<HTMLDivElement, TicketCardProps>(
  (
    {
      className,
      ticketId,
      title,
      status,
      statusIcon,
      userId,
      userIcon,
      userAvailablity,
      priority,
      tags,
      showUserIcon,
      showStatusIcon,
      showPriorityIcon,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`${className}`}>
        <div className="ticket-card-header">
          <div className="muted-heading-3">{ticketId}</div>
          {showUserIcon && (
            <div className="user-icon">
              {" "}
              {/*todo : isolate this component */}
              <div className="relative">
                <div className="icon">{userIcon}</div>
                <div className="user-status-icon absolute">x</div>
              </div>
            </div>
          )}
        </div>
        <div className="ticket-card-title">
          {showStatusIcon && <div className="icon">{statusIcon}</div>}
          <div className="heading-3">{title}</div>
        </div>
        <div className="ticket-card-footer">
          {showPriorityIcon && (
            <div className="icon">
              <PriorityIcon />
            </div>
          )}
          {
            tags && tags.map((tag, index) => {
              return <div key={index} className="tag">{tag}</div>;
            })
          }
        </div>
      </div>
    );
  }
);