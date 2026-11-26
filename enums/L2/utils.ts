export type SupportRequest = {
  id: string;
  severity: RequestSeverity;
  description: string;
};

// don't touch above this line

export enum RequestSeverity {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
  Critical = "CRITICAL"
};

export function convertSeverityToLabel(severity: number) {
  switch (severity) {
    case 0:
      return RequestSeverity.Low;
    case 1:
      return RequestSeverity.Medium;
    case 2:
      return RequestSeverity.High;
    case 3:
      return RequestSeverity.Critical;
    default:
      throw new Error("Unknown Severity")
  }
}
