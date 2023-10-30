import { useEffect, useContext } from "react";
import axios from "axios";
import {
  TopBar,
  TicketCardHolder,
  TicketCard,
  ButtonWithPopupMenu,
} from "../components";
import { CheckCircleIcon } from "../assets/icons";
import { DataContext } from "../contexts";

const KanbanDashBoardPage = () => {
  const { data, setData, groupedData, DisplayConfig, setDisplayConfig } =
    useContext(DataContext);

  useEffect(() => {
    console.log(data);
    console.log(groupedData);
  }, [data]);

  useEffect(() => {
    console.log(DisplayConfig);
  }, [DisplayConfig]);

  return (
    <>
      <TopBar type="hzScroll" className="topbar-container" height={64}>
        <div className="ml-2">
          {" "}
          <ButtonWithPopupMenu
            config={DisplayConfig}
            setConfig={setDisplayConfig}
          />
        </div>
      </TopBar>
      <div className="kanban-main-container">
        {groupedData &&
          groupedData.groups.map((group, index) => {
            return (
              <TicketCardHolder
                name={group.name}
                statusIcon={<CheckCircleIcon />}
                count={group.tickets.length}
                key={index}
              >
                {group.tickets.map((ticket, index) => {
                  const initials =
                    ticket.user?.name
                      ?.split(" ")
                      .map((name) => name[0].toUpperCase())
                      .join("") || "";
                  return (
                    <TicketCard
                      className="mt-3"
                      ticketId={ticket.id}
                      title={ticket.title}
                      status={ticket.status}
                      statusIcon={<CheckCircleIcon />}
                      userId={ticket.user?.id || ""}
                      userIconText={initials}
                      userAvailablity={ticket.user?.available || false}
                      priority={ticket.priority}
                      tags={ticket.tag}
                      showUserIcon={ groupedData.groupedBy === "user" ? false : true}
                      showStatusIcon={ groupedData.groupedBy === "status" ? false : true}
                      showPriorityIcon={ groupedData.groupedBy === "priority" ? false : true}
                      key={index}
                    />
                  );
                })}
              </TicketCardHolder>
            );
          })}
      </div>
    </>
  );
};

export { KanbanDashBoardPage };
