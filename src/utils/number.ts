export const numberCommaFormatter = Intl.NumberFormat("ko-kr", {
  compactDisplay: "long",
}).format;

export const extractDigits = (value: string): string =>
  value.replace(/[^\d]/g, "");
