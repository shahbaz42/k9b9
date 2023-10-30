import { TopBar, TicketCardHolder, TicketCard } from "../components";
import { CheckCircleIcon } from "../assets/icons";

const KanbanDashBoard = () => {
  return (
    <>
      <TopBar type="hzScroll" height={64}>
        <div style={{ border: "1px solid black" }}> Feature1</div>
      </TopBar>
      <div className="kanban-main-container">
        <TicketCardHolder
          name="To do"
          statusIcon={<CheckCircleIcon />}
          count={10}
        >
          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support"
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={false}
            showPriorityIcon={true}
          />

          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support"
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={true}
            showPriorityIcon={true}
          />
        </TicketCardHolder>
        <TicketCardHolder
          name="To do"
          statusIcon={<CheckCircleIcon />}
          count={10}
        >
          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support "
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={true}
            showPriorityIcon={true}
          />

          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support"
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={true}
            showPriorityIcon={true}
          />
        </TicketCardHolder>
        <TicketCardHolder
          name="To do"
          statusIcon={<CheckCircleIcon />}
          count={10}
        >
          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support "
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={true}
            showPriorityIcon={true}
          />

          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support"
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={true}
            showPriorityIcon={true}
          />
        </TicketCardHolder>
        <TicketCardHolder
          name="To do"
          statusIcon={<CheckCircleIcon />}
          count={10}
        >
          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support"
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={true}
            showPriorityIcon={true}
          />

          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support"
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={true}
            showPriorityIcon={true}
          />
        </TicketCardHolder>
        <TicketCardHolder
          name="To do"
          statusIcon={<CheckCircleIcon />}
          count={10}
        >
          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support "
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={true}
            showPriorityIcon={true}
          />

          <TicketCard
            className="mt-3"
            ticketId="CAM-5"
            title="Add multi Language support"
            status="Todo"
            statusIcon={<CheckCircleIcon />}
            userId="1"
            userIconText="SA"
            userAvailablity={true}
            priority={5}
            tags={["Bug", "Feature"]}
            showUserIcon={true}
            showStatusIcon={true}
            showPriorityIcon={true}
          />
        </TicketCardHolder>

      </div>
    </>
  );
};

export { KanbanDashBoard };
