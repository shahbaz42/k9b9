import { TopBar, CardHolder } from "../components";
import { CheckCircleIcon } from "../assets/icons";

const KanbanDashBoard = () => {
  return (
    <>
      <TopBar type="hzScroll">
        <div style={{ border: "1px solid black" }}> Feature1 </div>
      </TopBar>
      <div className="kanban-main-container">
        <CardHolder name="To do" icon={<CheckCircleIcon/>} count={10} >

        </CardHolder>
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
