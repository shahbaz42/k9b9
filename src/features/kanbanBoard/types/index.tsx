/*************** Contexts  *********************/

export interface DataContextProps {
  data: APIData | null;
  setData: React.Dispatch<React.SetStateAction<APIData>>;
  isLoading: boolean;
  groupedData: GroupedData | null;
  setGroupedData: React.Dispatch<React.SetStateAction<GroupedData | null>>;
  DisplayConfig: DisplayConfig;
  setDisplayConfig: React.Dispatch<React.SetStateAction<DisplayConfig>>;
  createNewTicket: (ticket: Ticket) => void;
}

export type groupBy = "status" | "priority" | "user";
export type sortBy = "priority" | "title" | "select";

export interface DisplayConfig {
  groupBy: ("status" | "priority" | "user");
  sortBy: ("priority" | "title" | "select");
}

export interface Ticket {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
  priority: number;
}

export interface User {
  id: string;
  name: string;
  available: boolean;
}

export interface APIData {
  tickets: Ticket[];
  users: User[];
}

export interface GroupedTicket {
  id: string;
  title: string;
  tag: string[];
  user: User | undefined;
  status: string;
  priority: number;
}

export interface Group {
  name: string;
  tickets: GroupedTicket[];
}

export interface GroupedData {
  groupedBy: string;
  groups: Group[];
}

/*********** Components *********************/
export interface ButtonWithPopupMenuProps {
  className?: string;
  config: DisplayConfig;
  setConfig: React.Dispatch<React.SetStateAction<DisplayConfig>>;
}

export interface SelectWithLabelProps {
  className?: string;
  label: string;
  options: string[];
  value: string;
  setValue: (v: string) => void ;
}

export type TopBarProps = {
  children: React.ReactNode;
  type?: "hzScroll" | "collapsible";
  height?: string | number;
} & React.HTMLAttributes<HTMLDivElement>;

export type TicketCardHolderProps = {
  children?: React.ReactNode;
  className?: string;
  statusIcon?: React.ReactNode;
  name: string;
  count?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export type TicketCardProps = {
  className?: string;
  ticketId: string;
  title: string;
  status: string;
  statusIcon: React.ReactNode;
  userId: string;
  userIconText: string;
  userAvailablity: boolean;
  priority: number;
  tags: string[];
  showUserIcon?: boolean;
  showStatusIcon?: boolean;
  showPriorityIcon?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

/***************  UI Components **************/

export type AvatarWithAvailabilityProps = {
  avatarText: string;
  isAvailable: boolean;
  avatarUrl?: string;
};

export type TagWithCircleProps = {
  className?: string;
  color?: string;
  tagText?: string;
};
