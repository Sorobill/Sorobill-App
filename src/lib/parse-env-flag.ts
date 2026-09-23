/** Parse common truthy/falsey env flag strings. */
export function parseEnvFlag(value: string | undefined, defaultValue = false): boolean {
  if (value == null || value.trim() === "") return defaultValue;
  const v = value.trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(v)) return true;
  if (["0", "false", "no", "off"].includes(v)) return false;
  return defaultValue;
}
