import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  APIData,
  DataContextProps,
  GroupedData,
  groupBy,
  Ticket,
} from "../types";
import {
  groupDataBy,
  sortInRelevantOrder,
  sortByPriority,
  sortByTitle,
} from "../utils";

export const DataContext = createContext<DataContextProps>({
  data: null,
  setData: () => {},
  isLoading: false,
  groupedData: null,
  setGroupedData: () => {},
  DisplayConfig: {
    groupBy: "status",
    sortBy: "priority",
  },
  setDisplayConfig: () => {},
  createNewTicket: () => {},
});

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<APIData>(() => {
    const storedData = localStorage.getItem("kanban_board_data");
    if (storedData) {
      return JSON.parse(storedData);
    }
    return { tickets: [], users: [] };
  });
  const [groupedData, setGroupedData] = useState<GroupedData | null>(null);
  const [DisplayConfig, setDisplayConfig] = useState({
    groupBy: "status",
    sortBy: "select",
  });
  const [isLoading, setIsLoading] = useState(false);

  /**
   * This function creates a new ticket
   * @param ticket
   */
  const createNewTicket = (ticket: Ticket) => {
    setData((prev) => ({
      ...prev,
      tickets: [ticket, ...prev.tickets],
    }));
  };

  /**
   * This useEffect fetches the data from the API and
   * sets the data and groupedData states
   */
  useEffect(() => {
    setIsLoading(true);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.quicksell.co/v1/internal/frontend-assignment",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setData(response.data as APIData);
        setGroupedData(
          sortInRelevantOrder(groupDataBy(response.data as APIData, "priority"))
        );
        localStorage.setItem("kanban_board_data", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  /**
   * This useEffect groups the data
   * when groupBy property of the DisplayConfig changes
   */
  useEffect(() => {
    console.log("grouping data");
    if (data) {
      setGroupedData(
        sortInRelevantOrder(groupDataBy(data, DisplayConfig.groupBy as groupBy))
      );
      setDisplayConfig((prev) => ({
        ...prev,
        sortBy: "select",
      }));
    }
    console.log("grouped data", groupedData);
  }, [DisplayConfig.groupBy, data]);

  /**
   * This useEffect sorts the groups of the groupedData
   */
  useEffect(() => {
    if (groupedData) {
      if (DisplayConfig.sortBy === "priority") {
        setGroupedData(sortByPriority(groupedData));
      } else if (DisplayConfig.sortBy === "title") {
        setGroupedData(sortByTitle(groupedData));
      }
    }
  }, [DisplayConfig.sortBy]);

  useEffect(() => {
    localStorage.setItem("kanban_board_data", JSON.stringify(data));
  }, [data]);

  const value = {
    data,
    setData,
    isLoading,
    groupedData,
    setGroupedData,
    DisplayConfig,
    setDisplayConfig,
    createNewTicket,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
