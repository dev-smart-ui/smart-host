import React from "react";

import Premium from "../../../../icons/Premium.svg";
import Economy from "../../../../icons/Economy.svg";

import styles from "./smartHostForm.module.scss";
import { Button } from "../../../../components/button";

interface SmartHostFormProps {
    onPremiumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEconomyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    economy: number;
    premium: number;
    onSubmit: () => void;
}

export const SmartHostForm: React.FC<SmartHostFormProps> = ({onPremiumChange, onEconomyChange, onSubmit, economy, premium}) => {
    return <div className={styles.smartHostForm}>
        <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
                <img src={Premium} alt="premium" />
                <label>Premium rooms</label>
                <input type="text" value={premium} onChange={onPremiumChange} />
            </div>
            <div className={styles.inputBox}>
                <img src={Economy} alt="economy" />
                <label>Economy rooms</label>
                <input type="text" value={economy} onChange={onEconomyChange} />
            </div>
        </div>
        
        <Button text="Submit" onClick={onSubmit} />
    </div>;
};