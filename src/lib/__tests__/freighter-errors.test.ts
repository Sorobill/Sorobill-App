import { describe, expect, it } from "vitest";
import { freighterUserMessage } from "@/lib/freighter-errors";

describe("freighterUserMessage", () => {
  it("guides missing extension", () => {
    expect(freighterUserMessage(new Error("Freighter wallet not found"))).toMatch(/Install the Freighter/i);
  });

  it("guides rejection", () => {
    expect(freighterUserMessage("User rejected")).toMatch(/rejected/i);
  });
});
