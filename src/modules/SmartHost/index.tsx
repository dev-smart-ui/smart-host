import React from "react";
import { useCallback, useState } from "react";
import { useCalculateIncome } from "../../hooks/useCalculateIncome";
import { SmartHostForm } from "./components/SmartHostForm";
import { SmartHostResult } from "./components/SmartHostResult";
import { Loader } from "../../components/loader";

export const SmartHost = () => {
    const [{premium, economy}, setRooms] = useState({premium: 0, economy: 0});
    const {onSubmit, totalIncome, economyIncome, premiumIncome, reset, isLoading} = useCalculateIncome(premium, economy);

    const onPremiumChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRooms(rooms => ({...rooms, premium: +e.target.value.replace(/\D/g, "")}));
    }, []);

    const onEconomyChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setRooms(rooms => ({...rooms, economy: +e.target.value.replace(/\D/g, "")}));
    }, []);

    if(isLoading){
        return <div>
            <Loader />
        </div>;
    }

    return (
        <div>
            {!(totalIncome) && <SmartHostForm
                onEconomyChange={onEconomyChange}
                onPremiumChange={onPremiumChange}
                economy={economy}
                premium={premium}
                onSubmit={onSubmit} 
            />}

            {!!totalIncome && <SmartHostResult 
                economyIncome={economyIncome} 
                premiumIncome={premiumIncome} 
                totalIncome={totalIncome} 
                reset={reset}
            />}

        </div>
    );
};