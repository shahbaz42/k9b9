export type TopBarProps = {
    children: React.ReactNode;
    type?: "hzScroll" | "collapsible";
    height?: string | number;
} & React.HTMLAttributes<HTMLDivElement>;