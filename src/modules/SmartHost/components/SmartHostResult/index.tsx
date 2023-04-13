import React from "react";

import styles from "./smartHostResult.module.scss";
import { Divider } from "../../../../components/divider";
import { Button } from "../../../../components/button";
import { RoomHosting } from "../../../../hooks/useCalculateIncome";

interface ISmartHostResultProps {
    economyRooms: RoomHosting;
    premiumRooms: RoomHosting;
    totalIncome: number;
    reset: () => void;
}

export const SmartHostResult: React.FC<ISmartHostResultProps> = ({economyRooms, premiumRooms, totalIncome, reset}) => {
    return <div className={styles.smartHostResult}>
        <div className={styles.incomeContainer}>
            <div className={styles.roomsIncome}>
                <div>Premium: {premiumRooms.usage}  <span>({premiumRooms.income} $)</span></div>
                <div>Economy: {economyRooms.usage}  <span>({economyRooms.income} $)</span></div>
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