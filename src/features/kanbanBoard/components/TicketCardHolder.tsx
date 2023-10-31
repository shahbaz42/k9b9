import React, { useState, useEffect } from "react";
import { TicketCardHolderProps } from "../types";
import { PlusIcon, EllipsisHzIcon, XMarkIcon } from "../assets/icons";
import { DataContext } from "../contexts";
import { PriorityMap } from "../utils";

export const TicketCardHolder = React.forwardRef<
  HTMLDivElement,
  TicketCardHolderProps
>(({ className = "", statusIcon, name, count, group, ...props }, ref) => {
  const { data, createNewTicket, groupedData } = React.useContext(DataContext);

  const [addingTicket, setAddingTicket] = useState(false);

  const [id, setId] = useState(`CAM-${getTopId() + 1}`);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [userId, setUserId] = useState(groupedData?.groupedBy === "user" ? data?.users.find(user => user.name === group.name)?.id as string : "");
  const [status, setStatus] = useState( groupedData?.groupedBy === "status" ? name : "Todo");
  const [priority, setPriority] = useState( groupedData?.groupedBy === "priority" ? Number(group.name) : 0 );

  /**
   * This is to make sure that the id is always unique
   */
  useEffect(() => {
    setId(`CAM-${getTopId() + 1}`);
  }, [data]);

  /**
   * This function returns the top id of the tickets
   * @returns
   */
  function getTopId() {
    let topId = 0;
    {
      data &&
        data.tickets.forEach((ticket) => {
          const id = parseInt(ticket.id.split("-")[1]);
          if (id > topId) {
            topId = id;
          }
        });
      return topId;
    }
  }

  /**
   * This function creates a new ticket
   * @returns
   */
  function createTicket() {
    if (title === "" || tag === "" || userId === "" || status === "") {
      alert("Please fill all the fields");
      return;
    }
    createNewTicket({
      id: id,
      title: title,
      tag: [tag],
      userId: userId,
      status: status,
      priority: priority,
    });
    setAddingTicket(false);
    setTitle("");
    setTag("");
    { !(groupedData?.groupedBy === "status") && setStatus("Todo")}
    { !(groupedData?.groupedBy === "priority") && setPriority(0)}
  }

  return (
    <div className={`ticket-card-holder ${className}`} ref={ref} {...props}>
      <div className="ticket-card-holder-group">
        <div className="ticket-card-holder-header">
          <div className="ticket-card-holder-header-info">
            <div className="icon">{statusIcon}</div>
            <div className="heading-3">
              {groupedData?.groupedBy === "priority"
                ? PriorityMap[Number(name)]
                : name}
            </div>
            <div className="muted-heading-3">{count}</div>
          </div>

          <div className="ticket-card-holder-header-actions">
            {!addingTicket ? (
              <div onClick={() => setAddingTicket(true)} className="icon btn">
                <PlusIcon />
              </div>
            ) : (
              <div onClick={() => setAddingTicket(false)} className="icon btn">
                <XMarkIcon />
              </div>
            )}
            <div className="icon">
              <EllipsisHzIcon />
            </div>
          </div>
        </div>
        <div className="ticket-card-holder-content">
          {addingTicket && (
            <div className="ticket-card ">
              <div style={{display:"none"}} className="hz-input-group">
                <label className="text-smaller text-semibold">Ticket ID</label>
                <input
                  className="input-comp disabled"
                  value={id}
                  disabled
                  type="text"
                />
              </div>
              <div className="hz-input-group mt-2">
                <label className="text-smaller text-semibold">Title</label>
                <input
                  className="input-comp"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                />
              </div>
              <div className="hz-input-group mt-2">
                <label className="text-smaller text-semibold">Tag</label>
                <input
                  className="input-comp"
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                  type="text"
                />
              </div>
              <div className="hz-input-group mt-2">
                <label className="text-smaller text-semibold">Assign To</label>
                <select
                  value={userId}
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                  className="input-comp px-2"
                  style={{ width: 210 }}
                >
                  <option value={""} key={0}>
                    Select
                  </option>
                  {data &&
                    data.users.map((user) => {
                      return (
                        <option value={user.id} key={user.id}>
                          {user.name} ( {user.available ? "Present" : "Away"} )
                        </option>
                      );
                    })}
                </select>
              </div>
              <div style={{ display: `${(groupedData?.groupedBy === "status")&& "none"}` }}  className="hz-input-group mt-2">
                <label className="text-smaller text-semibold">Status</label>
                <select
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  className="input-comp px-2"
                  style={{ width: 210 }}
                >
                  <option value="Todo">Todo</option>
                  <option value="In progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Backlog">Backlog</option>
                </select>
              </div>
              <div style={{ display: `${(groupedData?.groupedBy === "priority")&& "none"}` }}  className="hz-input-group mt-2">
                <label className="text-smaller text-semibold">Priority</label>
                <select
                  disabled={groupedData?.groupedBy === "priority"}
                  value={priority}
                  onChange={(e) => {
                    setPriority(parseInt(e.target.value));
                  }}
                  className="input-comp px-2"
                  style={{ width: 210 }}
                >
                  <option value={0}>No</option>
                  <option value={1}>Low</option>
                  <option value={2}>Medium</option>
                  <option value={3}>High</option>
                  <option value={4}>Urgent</option>
                </select>
              </div>

              <div className="btn-left-wrapper mt-2">
                <button
                  className="create_button"
                  onClick={() => {
                    createTicket();
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          )}

          {props.children}
        </div>
      </div>
    </div>
  );
});
