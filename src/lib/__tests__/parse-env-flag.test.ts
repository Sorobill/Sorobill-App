import { describe, expect, it } from "vitest";
import { parseEnvFlag } from "@/lib/parse-env-flag";

describe("parseEnvFlag", () => {
  it("parses truthy values", () => {
    expect(parseEnvFlag("true")).toBe(true);
    expect(parseEnvFlag("1")).toBe(true);
    expect(parseEnvFlag("YES")).toBe(true);
  });

  it("parses falsey values", () => {
    expect(parseEnvFlag("false")).toBe(false);
    expect(parseEnvFlag("0")).toBe(false);
  });

  it("uses default for empty/unknown", () => {
    expect(parseEnvFlag(undefined, true)).toBe(true);
    expect(parseEnvFlag("maybe", false)).toBe(false);
  });
});
