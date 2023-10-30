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
  userIcon: React.ReactNode;
  userAvailablity: boolean;
  priority: number;
  tags: string[];
  showUserIcon?: boolean;
  showStatusIcon?: boolean;
  showPriorityIcon?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
