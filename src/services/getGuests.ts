import { GUESTS_SRC } from "../config";

export const getGuests = async () => {
    const response = await fetch(GUESTS_SRC);
    const guestBudget = await response.json();

    return guestBudget;
};