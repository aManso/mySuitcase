import { MAX_ALLOWED_SUITCASES, MAX_ALLOWED_SUITCASES_PREMIUM } from "../config/config";

const LOCALE_KEY = 'locale';

export class ConfigService {
  
  getMaximumSuitcases(isPremium: boolean) {
    return isPremium ? MAX_ALLOWED_SUITCASES_PREMIUM : MAX_ALLOWED_SUITCASES;
  }

  setLocale(locale: string) {
    localStorage.setItem(LOCALE_KEY, locale); 
  }

  getLocale() {
    return localStorage.getItem(LOCALE_KEY); 
  }
}

export const configServiceFactory = () => {
  return new ConfigService();
};

export const configLocaleFactory = ():string => {
  return new ConfigService().getLocale();
};