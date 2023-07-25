import { MAX_ALLOWED_SUITCASES, MAX_ALLOWED_SUITCASES_PREMIUM } from "../config/config";

export class ConfigService {
  
  getMaximumSuitcases(isPremium: boolean) {
    return isPremium ? MAX_ALLOWED_SUITCASES_PREMIUM : MAX_ALLOWED_SUITCASES;
  }
}

export const configServiceFactory = () => {
    return new ConfigService();
  };