import { MAX_ALLOWED_SUITCASES, MAX_ALLOWED_SUITCASES_PREMIUM } from "../config/config";

const LOCALE_KEY = 'locale';
export const META_TAGS = {
  // Google las cortará después de unos 160 caracteres en el escritorio y los 120 caracteres en el móvil.
  DESCRIPTION: $localize `Use mysuitcase to easily list all you need to pack in your suitcase for your next trip. Save, reuse or print those lists`
}

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