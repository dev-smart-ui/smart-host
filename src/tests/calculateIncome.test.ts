import { calculateIncome } from "../core/calculateIncome";
import { INPUT_2_7, INPUT_3_3, INPUT_7_1, INPUT_7_5 } from "./testData";

const guestBudgetsMock = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

describe("test calculate income logic", () => {
    it("should give an income premium: 738 and economy: 167", () => {
        expect(calculateIncome(guestBudgetsMock, 3, 3)).toEqual(INPUT_3_3);
    });

    it("should give an income premium: 1054 and economy: 189", () => {
        expect(calculateIncome(guestBudgetsMock, 7, 5)).toEqual(INPUT_7_5);
    });

    it("should give an income premium: 583 and economy: 189", () => {
        expect(calculateIncome(guestBudgetsMock, 2, 7)).toEqual(INPUT_2_7);
    });

    it("should give an income premium: 1153 and economy: 45", () => {
        expect(calculateIncome(guestBudgetsMock, 7, 1)).toEqual(INPUT_7_1);
    });
});
