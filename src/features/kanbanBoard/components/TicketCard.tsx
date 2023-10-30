import React from "react";
import { PriorityIcon } from "../assets/icons";
import { AvatarWithAvailability, TagWithCircle } from "./ui";
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
      userIconText,
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
      <div ref={ref} className={`${className}`}>
        <div className="ticket-card-header">
          <div className="muted-heading-3">{ticketId}</div>
          {showUserIcon && (
            <AvatarWithAvailability
              avatarText={userIconText}
              isAvailable={userAvailablity}
            />
          )}
        </div>
        <div className="ticket-card-title">
          {showStatusIcon && <div className="icon">{statusIcon}</div>}
          <div className="heading-3 ticket-title">{title}</div>
        </div>
        <div className="ticket-card-footer">
          {showPriorityIcon && (
            <div className="icon">
              <PriorityIcon />
            </div>
          )}
          {tags &&
            tags.map((tag, index) => {
              return (
                <TagWithCircle
                  key={index}
                  className="ml-2"
                  color="#
                  #c6c7c8"
                  tagText={tag}
                />
              );
            })}
        </div>
      </div>
    );
  }
);
