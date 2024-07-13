export interface Settings {
  general: General;
  voice: Voice;
}

export interface General {
  /**
   * system
   * dark
   * light
   */
  theme: string;

  /**
   * true
   * false
   */
  alwaysShowCodeWhenUsingDataAnalyst: boolean;

  /**
   * auto-detect
   * english
   */
  language: string;
}

export interface Voice {
  /**
   * Cove
   * Breeze
   */
  voice: string;
}
