import React from "react";

interface IHeaderProps {
    title: string;
}

export const Heading:React.FC<IHeaderProps> = ({title}) => {
    return <h1>
        {title}
    </h1>;
};