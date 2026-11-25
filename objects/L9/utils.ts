export type MailPreferences = {
  [key: string]: boolean|string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
};

// don't touch below this line

export function canContact(preferences: MailPreferences): boolean {
  return !(preferences.doNotDisturb || preferences.outOfOffice);
}
