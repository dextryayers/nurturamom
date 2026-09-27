const BAD_A = String.fromCharCode(8212);
const BAD_B = String.fromCharCode(8211);

export function assertNoEmdash(text: string, label = "copy"): void {
  if (text.includes(BAD_A) || text.includes(BAD_B)) {
    throw new Error("Copy tidak valid di " + label + ": hapus karakter U+2014 dan U+2013.");
  }
}

export function cleanCopy(text: string): string {
  return text.replaceAll(BAD_A, ",").replaceAll(BAD_B, "-");
}
