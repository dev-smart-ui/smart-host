import { useCallback, useState } from "react";
import { calculateIncome } from "../core/calculateIncome";
import { getGuests } from "../services/getGuests";

export const useCalculateIncome = (premiumCount: number, economyCount: number) => {
    const [rooms, setRooms] = useState<null | {economy: {usage: number, income: number}; premium: {usage: number, income: number}}>(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setLoading(true);

            const guestBudget = await getGuests();

            const income = calculateIncome(guestBudget, premiumCount, economyCount);

            setRooms(income);
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, [premiumCount, economyCount]);

    return {
        onSubmit,
        premiumIncome: rooms?.premium.income || 0, 
        economyIncome: rooms?.economy.income || 0, 
        totalIncome: rooms ? rooms?.economy.income + rooms?.premium.income : null,
        isLoading: loading,
        reset: () => setRooms(null)
    };
};