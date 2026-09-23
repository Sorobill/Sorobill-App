import { describe, expect, it } from "vitest";
import { toCsv } from "@/lib/csv";

describe("toCsv", () => {
  it("returns empty string for no rows", () => {
    expect(toCsv([])).toBe("");
  });

  it("escapes commas and quotes", () => {
    const csv = toCsv([{ name: 'Acme, "Inc"', amount: 10 }]);
    expect(csv.split("\n")[0]).toBe("name,amount");
    expect(csv).toContain('"Acme, ""Inc"""');
  });
});
