/*************** Contexts  *********************/

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

/*********** Components *********************/

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
