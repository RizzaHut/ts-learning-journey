export const TWO_FACTOR = Symbol("twoFactor");
export const BIOMETRIC_LOCK = Symbol("biometricLock");

export type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [TWO_FACTOR]: boolean;
  [BIOMETRIC_LOCK]: boolean;
};

// don't touch above this line

export function isSecure(preferences: MailPreferences) {
  if (preferences[TWO_FACTOR] === true || 
      preferences[BIOMETRIC_LOCK] === true) {
      return true; 
  }
  return false
}
