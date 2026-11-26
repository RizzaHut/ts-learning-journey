export type SupportBot = {
  id: string;
  name: string;
  status: string;
  language: string;
};

// don't touch above this line

export type Text = {
  messageLog: string[];
  sendMessage: (message:string) => string;
}

export type Voice = {
  callLog: string[];
  phoneNumber: string;
  dialNumber: (phoneNumber: string) => string;
}

export type TextBot = SupportBot & Text;

export type VoiceBot = SupportBot & Voice;
