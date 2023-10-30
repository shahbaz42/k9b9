import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
  ReactNode,
} from "react";
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

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<APIData>({
    tickets: [],
    users: [],
  });
  const [groupedData, setGroupedData] = useState<GroupedData | null>(null);
  const [DisplayConfig, setDisplayConfig] = useState({
    groupBy: "status",
    sortBy: "priority",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    console.log("grouping data")
    if (data) {
      console.log(DisplayConfig)
      console.log(groupDataBy(data, DisplayConfig.groupBy as groupBy))

      setGroupedData(groupDataBy(data, DisplayConfig.groupBy as groupBy))
    }
  }, [DisplayConfig, data]);

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
