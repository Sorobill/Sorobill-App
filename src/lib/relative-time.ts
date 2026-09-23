/** Human-readable relative time for ISO timestamps. */
export function relativeTime(iso: string, now = Date.now()): string {
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return "unknown time";
  const diff = now - t;
  if (diff < 0) {
    const ahead = Math.round(-diff / 60000);
    if (ahead < 1) return "just now";
    if (ahead < 60) return `in ${ahead}m`;
    const hours = Math.round(ahead / 60);
    if (hours < 48) return `in ${hours}h`;
    return `in ${Math.round(hours / 24)}d`;
  }
  const mins = Math.round(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  if (hours < 48) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
}
