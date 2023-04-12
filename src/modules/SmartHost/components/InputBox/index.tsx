import React, { InputHTMLAttributes } from "react";

import styles from "./inputBox.module.scss";

interface IInputBox extends InputHTMLAttributes<HTMLInputElement>{
    iconSvg: string;
    iconAlt: string;
    label: string;
}

export const InputBox: React.FC<IInputBox> = ({iconSvg, iconAlt, label, ...props}) => {
    return (
        <div className={styles.inputBox}>
            <img src={iconSvg} alt={iconAlt} />
            <label>{label}</label>
            <input type="text" {...props} />
        </div>
    );
};