import { describe, expect, it } from "vitest";
import { relativeTime } from "@/lib/relative-time";

describe("relativeTime", () => {
  const now = Date.parse("2026-09-23T12:00:00.000Z");

  it("formats recent past", () => {
    expect(relativeTime("2026-09-23T11:59:00.000Z", now)).toBe("1m ago");
  });

  it("formats future", () => {
    expect(relativeTime("2026-09-23T13:00:00.000Z", now)).toBe("in 1h");
  });

  it("handles invalid iso", () => {
    expect(relativeTime("not-a-date", now)).toBe("unknown time");
  });
});
