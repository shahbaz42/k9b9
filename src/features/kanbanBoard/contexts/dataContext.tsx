import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { APIData, DataContextProps, GroupedData, groupBy } from "../types";
import { groupDataBy } from "../utils";

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
});

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<APIData>({
    tickets: [],
    users: [],
  });
  const [groupedData, setGroupedData] = useState<GroupedData | null>(null);
  const [DisplayConfig, setDisplayConfig] = useState({
    groupBy: "status",
    sortBy: "select",
  });
  const [isLoading, setIsLoading] = useState(false);

  /**
   * This method sorts the groups of a Grouped Data by priority DESC
   * @param groupedData
   */
  const sortByPriority = (groupedData: GroupedData) => {
    let newGroupedData = { ...groupedData };
    newGroupedData.groups.forEach((group) => {
      group.tickets.sort((a, b) => b.priority - a.priority);
    });
    console.log(groupedData);
    setGroupedData(newGroupedData);
  };

  /**
   * This method sorts the groups of a Grouped Data by title ASC
   * @param groupedData
   */
  const sortByTitle = (groupedData: GroupedData) => {
    let newGroupedData = { ...groupedData };
    newGroupedData.groups.forEach((group) => {
      group.tickets.sort((a, b) => a.title.localeCompare(b.title));
    });
    setGroupedData(newGroupedData);
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
        setGroupedData(groupDataBy(response.data as APIData, "priority"));
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
      setGroupedData(groupDataBy(data, DisplayConfig.groupBy as groupBy));
      setDisplayConfig((prev) => ({
        ...prev,
        sortBy: "select",
      }));
    }
  }, [DisplayConfig.groupBy, data]);

  /**
   * This useEffect sorts the groups of the groupedData
   */
  useEffect(() => {
    if (groupedData) {
      if (DisplayConfig.sortBy === "priority") {
        sortByPriority(groupedData);
      } else if (DisplayConfig.sortBy === "title") {
        sortByTitle(groupedData);
      }
    }
  }, [DisplayConfig.sortBy]);

  const value = {
    data,
    setData,
    isLoading,
    groupedData,
    setGroupedData,
    DisplayConfig,
    setDisplayConfig,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
