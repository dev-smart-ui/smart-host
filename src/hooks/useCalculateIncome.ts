import { useCallback, useState } from "react";
import { calculateIncome } from "../core/calculateIncome";
import { getGuests } from "../services/getGuests";

export type RoomHosting = {
    usage: number, 
    income: number
};

export const useCalculateIncome = (premiumCount: number, economyCount: number) => {
    const [rooms, setRooms] = useState<null | {economy: RoomHosting; premium: RoomHosting}>(null);
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
        premiumRooms: rooms?.premium, 
        economyRooms: rooms?.economy, 
        totalIncome: rooms ? rooms?.economy.income + rooms?.premium.income : null,
        isLoading: loading,
        reset: () => setRooms(null)
    };
};