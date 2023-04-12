import React from "react";
import { useCallback, useState } from "react";
import { useCalculateIncome } from "../../hooks/useCalculateIncome";
import { SmartHostForm } from "./components/SmartHostForm";
import { SmartHostResult } from "./components/SmartHostResult";
import { Loader } from "../../components/loader";

export const SmartHost = () => {
    const [{premium, economy}, setRooms] = useState({premium: 0, economy: 0});
    const {onSubmit, totalIncome, economyIncome, premiumIncome, isLoading} = useCalculateIncome(premium, economy);
    
    const incomeRevealed = totalIncome && economyIncome && premiumIncome;

    const onPremiumChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRooms(rooms => ({...rooms, premium: +e.target.value}));
    }, []);

    const onEconomyChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRooms(rooms => ({...rooms, economy: +e.target.value}));
    }, []);

    if(isLoading){
        return <div>
            <Loader />
        </div>;
    }

    return (
        <div>
            {!incomeRevealed && <SmartHostForm 
                onEconomyChange={onEconomyChange} 
                onPremiumChange={onPremiumChange} 
                onSubmit={onSubmit} 
            />}

            {incomeRevealed && <SmartHostResult 
                economyIncome={economyIncome} 
                premiumIncome={premiumIncome} 
                totalIncome={totalIncome} 
            />}

        </div>
    );
};