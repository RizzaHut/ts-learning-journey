export enum InternalErrors {
  InvalidPrompt = 1001,
  ContextWindowOverflow = 1004,
  ModelOverload = 1420,
  EthicalGuardrailTriggered = 2233,
  TokenLimitExceeded = 2401,
  SelfAwarenessAchieved = 9999,
}

// don't touch above this line

export function getErrorLabel(code: number) {
  const errorName = InternalErrors[code];

  if (!errorName) {
    return `${code}: Unknown error`;
  }
  return `${code}: ${errorName}`;

}
