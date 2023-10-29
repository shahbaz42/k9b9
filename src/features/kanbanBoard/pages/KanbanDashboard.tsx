import { TopBar } from "../components";

const KanbanDashBoard = () => {
  return (
    <>
      <TopBar type="hzScroll">
        <div style={{ border: "1px solid black" }}> Feature1 </div>
      </TopBar>
      <div className="kanban-main-container">
        <div className="kanban-card-container"></div>
        <div className="kanban-card-container"></div>
        <div className="kanban-card-container"></div>
        <div className="kanban-card-container"></div>
        <div className="kanban-card-container"></div>
        <div className="kanban-card-container"></div>
        <div className="kanban-card-container"></div>
        <div className="kanban-card-container"></div>
        <div className="kanban-card-container"></div>
      </div>
    </>
  );
};

export { KanbanDashBoard };
