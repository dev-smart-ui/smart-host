import { useCallback, useState } from "react";
import { calculateIncome } from "../core/calculateIncome";
import { getGuests } from "../services/getGuests";

export const useCalculateIncome = (premiumCount: number, economyCount: number) => {
    const [income, setIncome] = useState<null | {economyIncome: number; premiumIncome: number}>(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setLoading(true);

            const guestBudget = await getGuests();

            const income = calculateIncome(guestBudget, premiumCount, economyCount);

            setIncome(income);
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, [premiumCount, economyCount]);

    return {
        onSubmit,
        premiumIncome: income?.premiumIncome || 0, 
        economyIncome: income?.economyIncome || 0, 
        totalIncome: income ? income?.economyIncome + income?.premiumIncome : null,
        isLoading: loading,
        reset: () => setIncome(null)
    };
};