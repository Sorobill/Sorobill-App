/** Trigger a browser download for a Blob or text payload. */
export function downloadBlob(filename: string, blob: Blob) {
  if (typeof document === "undefined") {
    throw new Error("downloadBlob requires a browser environment");
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  a.click();
  URL.revokeObjectURL(url);
}

export function downloadText(filename: string, text: string, mime = "text/plain;charset=utf-8") {
  downloadBlob(filename, new Blob([text], { type: mime }));
}
