import { sum } from "../utils/sum";

describe("sum function", () => {
  it("should add two numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-1, 1)).toBe(0);
  });
});
