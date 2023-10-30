import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
  ReactNode,
} from "react";
import axios from "axios";
import { Ticket as TicketType, User as UserType, APIData } from "../types";

interface DataContextProps {
  data: APIData | null;
  setData: React.Dispatch<React.SetStateAction<APIData>>;
  isLoading: boolean;
}

export const DataContext = createContext<DataContextProps>({
    data: null,
    setData: () => {},
    isLoading: false,
});

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<APIData>({
    tickets: [],
    users: [],
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
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const value = { data, setData, isLoading };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
