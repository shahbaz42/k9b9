import React from "react";

type CardHolderProps = {
    children: React.ReactNode;
    className?: string;
    icon: React.ReactNode;
    name: string;
    count: number;
} & React.HTMLAttributes<HTMLDivElement>;

const CardHolder = React.forwardRef<HTMLDivElement, CardHolderProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                className={`kanban-card-holder ${className}`}
                ref={ref}
                {...props}
            >

                {props.children}
            </div>
        );
    }
);

