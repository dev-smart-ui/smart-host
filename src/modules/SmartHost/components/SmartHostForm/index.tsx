import React from "react";

import Premium from "../../../../icons/Premium.svg";
import Economy from "../../../../icons/Economy.svg";

import styles from "./smartHostForm.module.scss";

interface SmartHostFormProps {
    onPremiumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEconomyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}

export const SmartHostForm: React.FC<SmartHostFormProps> = ({onPremiumChange, onEconomyChange, onSubmit}) => {
    return <div className={styles.smartHostForm}>
        <div className={styles.inputContainer}>
            <div className={styles.inputBox}>
                <img src={Premium} alt="premium" />
                <label>Premium rooms</label>
                <input type="text" onChange={onPremiumChange} />
            </div>
            <div className={styles.inputBox}>
                <img src={Economy} alt="economy" />
                <label>Economy rooms</label>
                <input type="text" onChange={onEconomyChange} />
            </div>
        </div>
        <button onClick={onSubmit}>Submit</button>
    </div>;
};