import { describe, expect, it } from "vitest";
import { errorMessage } from "@/lib/error-message";

describe("errorMessage", () => {
  it("reads Error.message", () => {
    expect(errorMessage(new Error("boom"))).toBe("boom");
  });

  it("reads plain strings", () => {
    expect(errorMessage("nope")).toBe("nope");
  });

  it("uses fallback for unknown values", () => {
    expect(errorMessage(null, "fallback")).toBe("fallback");
    expect(errorMessage(42)).toMatch(/something went wrong/i);
  });

  it("reads message from plain objects", () => {
    expect(errorMessage({ message: "obj" })).toBe("obj");
  });
});
