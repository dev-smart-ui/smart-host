const PREMIUM_ROOM_PRICE = 100;

export const calculateIncome = (guestPayments: number[], premiumRoomsCount: number, economyRoomsCount: number) => {
    guestPayments.sort((a,b) => a - b).reverse();

    const {premiumRooms, economyRooms} = guestPayments.reduce((acc, guestBudget) => {
        const reservedEconomy = acc.economyRooms.length;
        const reservedPremium = acc.premiumRooms.length;
        if(guestBudget < PREMIUM_ROOM_PRICE && reservedEconomy < economyRoomsCount)
            return {...acc, economyRooms: [...acc.economyRooms, guestBudget]};

        else if(guestBudget >= PREMIUM_ROOM_PRICE && reservedPremium < premiumRoomsCount)
            return {...acc, premiumRooms: [...acc.premiumRooms, guestBudget]};

        else if(reservedPremium < premiumRoomsCount)
        {
            const highestPayment = acc.economyRooms.shift();
        
            if(highestPayment) {
                return {
                    premiumRooms: [...acc.premiumRooms, highestPayment],
                    economyRooms: [...acc.economyRooms, guestBudget]
                };
            }
        }

        return acc;
    }, {premiumRooms: [] as number[], economyRooms: [] as number[]});

    return {
        economy: {
            usage: economyRooms.length,
            income: economyRooms.reduce((acc, room) => acc + room, 0)
        }, 
        premium: {
            usage: premiumRooms.length,
            income: premiumRooms.reduce((acc, room) => acc + room, 0)
        }
    };
};