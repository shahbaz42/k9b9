import { APIData, GroupedTicket, Group, GroupedData } from "../types";

export function groupDataBy(
  inputData: APIData,
  groupBy: "status" | "priority" | "user"
): GroupedData {
  const groups: Group[] = inputData.tickets.reduce(
    (result: Group[], ticket) => {
      let groupName: string = "";

      if (groupBy === "status") {
        groupName = ticket.status;
      } else if (groupBy === "priority") {
        groupName = ticket.priority.toString();
      } else if (groupBy === "user") {
        const user = inputData.users.find((user) => user.id === ticket.userId);
        groupName = user ? user.name : "Unknown User";
      }

      let group = result.find((group) => group.name === groupName);

      if (!group) {
        group = { name: groupName, tickets: [] };
        result.push(group);
      }

      const groupedTicket: GroupedTicket = {
        id: ticket.id,
        title: ticket.title,
        tag: ticket.tag,
        user: inputData.users.find((user) => user.id === ticket.userId),
        status: ticket.status,
        priority: ticket.priority,
      };

      group.tickets.push(groupedTicket);

      return result;
    },
    []
  );

  return {
    groupedBy: groupBy,
    groups,
  };
}
