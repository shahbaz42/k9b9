import { useEffect, useContext } from "react";
import axios from "axios";
import { TopBar, TicketCardHolder, TicketCard } from "../components";
import { CheckCircleIcon } from "../assets/icons";
import { DataContext } from "../contexts";

const KanbanDashBoardPage = () => {
  const { data, setData, groupedData } = useContext(DataContext);

  useEffect(() => {
    console.log(data)
    console.log(groupedData)
  }, [data]);

  return (
    <>
      <TopBar type="hzScroll" height={64}>
        <div style={{ border: "1px solid black" }}> Feature1</div>
      </TopBar>
      <div className="kanban-main-container">
        {
          groupedData && groupedData.groups.map((group, index) => {
            return(
              <TicketCardHolder
                name={group.name}
                statusIcon={<CheckCircleIcon />}
                count={group.tickets.length}
                key={index}
              >
                {
                  group.tickets.map((ticket, index) => {
                    return(
                      <TicketCard
                        className="mt-3"
                        ticketId={ticket.id}
                        title={ticket.title}
                        status={ticket.status}
                        statusIcon={<CheckCircleIcon />}
                        userId={ticket.user?.id || ""}
                        userIconText={ticket.user?.name || ""}
                        userAvailablity={ticket.user?.available || false}
                        priority={ticket.priority}
                        tags={ticket.tag}
                        showUserIcon={true}
                        showStatusIcon={true}
                        showPriorityIcon={true}
                        key={index}
                      />
                    )
                  })
                }
              </TicketCardHolder>
            )
          })
        }
      </div>
    </>
  );
};

export { KanbanDashBoardPage };