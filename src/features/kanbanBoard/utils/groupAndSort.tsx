import { APIData, GroupedTicket, Group, GroupedData } from "../types";

/**
 * This method groups the data by status, priority or user
 * THis method is responsible for rendering various display types.
 * @param inputData
 * @param groupBy
 * @returns
 */
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

/**
 * This method sorts the groups of a Grouped Data in relevant order
 * This method brings order to the chaos
 * @param groupedData
 * @returns
 */
export const sortInRelevantOrder = (groupedData: GroupedData): GroupedData => {
  if (groupedData.groupedBy === "status") {
    const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
    const orderedGroupedData = groupedData.groups.sort((a, b) => {
      const orderA = statusOrder.indexOf(a.name);
      const orderB = statusOrder.indexOf(b.name);
      return orderA - orderB;
    });
    return { ...groupedData, groups: orderedGroupedData };
  } else {
    const orderedGroupedData = groupedData.groups.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return { ...groupedData, groups: orderedGroupedData };
  }
};

/**
 * This method sorts the groups of a Grouped Data by priority DESC
 * @param groupedData
 * @returns GroupedData
 */
export const sortByPriority = (groupedData: GroupedData): GroupedData => {
  let newGroupedData = { ...groupedData };
  newGroupedData.groups.forEach((group) => {
    group.tickets.sort((a, b) => b.priority - a.priority);
  });
  return newGroupedData;
};

/**
 * This method sorts the groups of a Grouped Data by title ASC
 * @param groupedData
 */
export const sortByTitle = (groupedData: GroupedData): GroupedData => {
  let newGroupedData = { ...groupedData };
  newGroupedData.groups.forEach((group) => {
    group.tickets.sort((a, b) => a.title.localeCompare(b.title));
  });
  return newGroupedData;
};