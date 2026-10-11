import { describe, expect, it } from "vitest";
import {
  freighterUserMessage,
  isFreighterMissingError,
  isWrongNetworkError,
  FREIGHTER_INSTALL_URL,
} from "@/lib/freighter-errors";

describe("freighterUserMessage", () => {
  it("guides missing extension", () => {
    expect(freighterUserMessage(new Error("Freighter wallet not found"))).toMatch(/Install the Freighter/i);
    expect(freighterUserMessage("Extension not installed")).toMatch(/Install the Freighter/i);
    expect(freighterUserMessage("Freighter is missing")).toMatch(/Install the Freighter/i);
  });

  it("guides rejection", () => {
    expect(freighterUserMessage("User rejected")).toMatch(/rejected/i);
  });

  it("guides wrong network", () => {
    expect(freighterUserMessage(new Error("Wrong network selected"))).toMatch(/Switch Freighter to Testnet/i);
    expect(freighterUserMessage("Network mismatch detected")).toMatch(/Switch Freighter to Testnet/i);
  });

  it("guides generic network error with testnet tip", () => {
    expect(freighterUserMessage(new Error("Network connection error"))).toMatch(/Switch Freighter to Testnet/i);
  });

  it("guides bad union switch error", () => {
    expect(freighterUserMessage(new Error("bad union switch"))).toMatch(/Wallet\/SDK protocol mismatch/i);
  });

  it("guides unallowed domain error", () => {
    expect(freighterUserMessage(new Error("not allowed"))).toMatch(/Allow sorobill-app.vercel.app/i);
  });

  it("identifies helper classifiers correctly", () => {
    expect(isFreighterMissingError(new Error("wallet not found"))).toBe(true);
    expect(isFreighterMissingError("freighter not detected")).toBe(true);
    expect(isFreighterMissingError("all good")).toBe(false);

    expect(isWrongNetworkError(new Error("wrong network"))).toBe(true);
    expect(isWrongNetworkError("network mismatch")).toBe(true);
    expect(isWrongNetworkError("all good")).toBe(false);

    expect(FREIGHTER_INSTALL_URL).toBe("https://www.freighter.app/");
  });
});