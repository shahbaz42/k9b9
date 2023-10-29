export type TopBarProps = {
    children: React.ReactNode;
    type?: "hzScroll" | "collapsible";
    height?: string | number;
} & React.HTMLAttributes<HTMLDivElement>;

export type CardHolderProps = {
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    name: string;
    count?: number;
  } & React.HTMLAttributes<HTMLDivElement>;