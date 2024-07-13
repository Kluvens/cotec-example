export * from "./settings";

export interface Chat {
  id: string;
  message: string;
  response: Response;
}

export interface Response {
  response: string | null;
  audioUrl: string;
  isResponseBad: boolean;
}
