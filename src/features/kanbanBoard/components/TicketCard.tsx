import React, { useState } from "react";
import { PriorityIcon } from "../assets/icons";
import { AvatarWithAvailability, TagWithCircle } from "./ui";
import { TicketCardProps } from "../types";
import { getPriorityIcon } from "../utils";
import { DeleteIcon } from "../assets/icons";
import { DataContext } from "../contexts";
import { Ticket } from "../types";

export const TicketCard = React.forwardRef<HTMLDivElement, TicketCardProps>(
  (
    {
      className = "",
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
    const { data, setData } = React.useContext(DataContext);
    const [openAction, setOpenAction] = useState(false);

    function updateStatus(status: string) {
      if (!data) return;
      const newTickets = data.tickets.map((ticket) => {
        if (ticket.id === ticketId) {
          return {
            ...ticket,
            status: status,
          };
        }
        return ticket;
      });
      setData({
        ...data,
        tickets: newTickets as Ticket[],
      });
    }

    return (
      <div ref={ref} className={`ticket-card cursor ${className}`}>
        <div
          className="cursor"
          onClick={() => {
            setOpenAction(!openAction);
          }}
        >
          <div className="ticket-card-header">
            <div className="muted-heading-3">{ticketId}</div>
            {showUserIcon && (
              <AvatarWithAvailability
                avatarText={userIconText}
                isAvailable={userAvailablity}
              />
            )}
          </div>
          <div className="ticket-card-title mt-2">
            {showStatusIcon && <div className="icon">{statusIcon}</div>}
            <div className=" ml-2 heading-3 ticket-title">{title}</div>
          </div>
          <div className="ticket-card-footer mt-3">
            {showPriorityIcon && (
              <div className="icon grey-icon">
                {getPriorityIcon(priority) || <PriorityIcon />}
              </div>
            )}
            {tags &&
              tags.map((tag, index) => {
                return (
                  <TagWithCircle
                    key={index}
                    className="ml-2"
                    color="#c6c7c8"
                    tagText={tag}
                  />
                );
              })}
            <div></div>
          </div>
        </div>
        {openAction && (
          <div className="card-action-footer">
            <button
              onClick={(e) => {
                updateStatus("Cancelled");
              }}
              className="delete-btn"
            >
              <DeleteIcon />
            </button>
            <select
              onChange={(e) => {
                updateStatus(e.target.value);
              }}
              className="input-comp-status"
            >
              <option value="" selected>
                Choose Action
              </option>
              {!(status === "Todo") && (
                <option value="Todo" >
                  Todo
                </option>
              )}
              {!(status === "In progress") && (
                <option value="In progress" >
                  In progress
                </option>
              )}
              {!(status === "Done") && (
                <option value="Done" >
                  Done
                </option>
              )}
              {!(status === "Backlog") && (
                <option value="Backlog" >
                  Backlog
                </option>
              )}
            </select>
          </div>
        )}
      </div>
    );
  }
);
