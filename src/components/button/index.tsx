import React, { ButtonHTMLAttributes } from "react";

import styles from "./button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
}

export const Button: React.FC<IButtonProps> = ({text, ...props}) => {
    return  <button className={styles.button} {...props}>{text}</button>;
};
