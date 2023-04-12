import React from "react";

import styles from "./smartHostResult.module.scss";
import { Divider } from "../../../../components/divider";
import { Button } from "../../../../components/button";

interface ISmartHostResultProps {
    economyIncome: number;
    premiumIncome: number;
    totalIncome: number;
    reset: () => void;
}

export const SmartHostResult: React.FC<ISmartHostResultProps> = ({economyIncome, premiumIncome, totalIncome, reset}) => {
    return <div className={styles.smartHostResult}>
        <div className={styles.incomeContainer}>
            <div className={styles.roomsIncome}>
                <div>Premium: <span>{premiumIncome} $</span></div>
                <div>Economy: <span>{economyIncome} $</span></div>
            </div>
            <Divider />
            <div className={styles.totalIncome}>
                <h2>Total income</h2>
                <div>{totalIncome} $</div>
            </div>
        </div>
        <Button text="Recalculate" onClick={reset} />
    </div>;
};