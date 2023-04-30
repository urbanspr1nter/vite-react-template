import sum from "./sum";

describe("sum tests", () => {
    it("should add", () => {
        const result = sum(1, 3);

        expect(result).toBe(4);
    });
});
