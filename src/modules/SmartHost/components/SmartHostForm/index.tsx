import React from "react";

import Premium from "../../../../icons/Premium.svg";
import Economy from "../../../../icons/Economy.svg";

import styles from "./smartHostForm.module.scss";
import { Button } from "../../../../components/button";
import { InputBox } from "../InputBox";

interface ISmartHostFormProps {
    onPremiumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEconomyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    economy: number;
    premium: number;
    onSubmit: () => void;
}

export const SmartHostForm: React.FC<ISmartHostFormProps> = ({onPremiumChange, onEconomyChange, onSubmit, economy, premium}) => {
    return <div className={styles.smartHostForm}>
        <div className={styles.inputContainer}>
            <InputBox 
                iconSvg={Premium}
                label="Premium rooms"
                value={premium} 
                onChange={onPremiumChange} 
                iconAlt="premium"
            />
            <InputBox 
                iconSvg={Economy}
                label="Economy rooms"
                value={economy} 
                onChange={onEconomyChange}
                iconAlt="economy"
            />
        </div>
        
        <Button text="Submit" disabled={!economy && !premium} onClick={onSubmit} />
    </div>;
};