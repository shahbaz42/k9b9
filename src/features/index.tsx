import { KanbanDashBoardPage } from "./kanbanBoard";
import { DataProvider } from "./kanbanBoard/contexts";

const KanbanDashBoard = () => {
  return (
    <>
      <DataProvider>
        <KanbanDashBoardPage />
      </DataProvider>
    </>
  );
};

export { KanbanDashBoard };
