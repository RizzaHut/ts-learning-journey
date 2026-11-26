export type SupportRequest = {
  id: string;
  severity: RequestSeverity;
  description: string;
};

// don't touch above this line

export enum RequestSeverity {
  Low,
  Medium,
  High,
  Critical
}

export function isCritical(request: SupportRequest) {
  return request.severity == RequestSeverity.Critical
}
