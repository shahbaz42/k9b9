import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
  ReactNode,
} from "react";
import axios from "axios";
import { APIData, DataContextProps, GroupedData } from "../types";
import { groupDataBy } from "../utils";

export const DataContext = createContext<DataContextProps>({
  data: null,
  setData: () => {},
  isLoading: false,
  groupedData: null,
  setGroupedData: () => {},
});

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<APIData>({
    tickets: [],
    users: [],
  });
  const [groupedData, setGroupedData] = useState<GroupedData | null>(null);
  const [groupBy, setGroupBy] = useState<"status" | "priority" | "user">(
    "status"
  ); // "status" | "priority" | "user
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
    if (data) {
      setGroupedData(groupDataBy(data, groupBy));
    }
  }, [groupBy, data]);

  const value = {
    data,
    setData,
    isLoading,
    groupedData,
    setGroupedData,
    groupBy,
    setGroupBy,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
