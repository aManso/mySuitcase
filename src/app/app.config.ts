import { InjectionToken } from "@angular/core";

export interface AppConfig {
    apiUrl: string,
    title: string,
}

export const MYSUITCASE_CONFIG_TOKEN = new InjectionToken<AppConfig>('config');

export const MYSUITCASE_CONFIG: AppConfig = {
    apiUrl: 'mysuitcase.net',
    title: 'My Suitcase'
  };