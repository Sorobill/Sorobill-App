import { downloadBlob } from "@/lib/download";

export function toCsv(rows: Record<string, string | number | undefined>[]): string {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const escape = (v: string | number | undefined) => {
    const s = v == null ? "" : String(v);
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };
  const lines = [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => escape(r[h])).join(",")),
  ];
  return lines.join("\n");
}

export function downloadCsv(filename: string, csv: string) {
  if (!csv) {
    throw new Error("Nothing to export — CSV is empty.");
  }
  const safeName = filename.toLowerCase().endsWith(".csv") ? filename : `${filename}.csv`;
  downloadBlob(safeName, new Blob([csv], { type: "text/csv;charset=utf-8" }));
}
