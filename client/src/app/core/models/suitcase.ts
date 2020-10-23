// Information about the suitcase
import {TripLocation, TripType} from './trip';

export interface Suitcase {
  name: string;
  date: {
    from: Date;
    to: Date;
  }
  place: TripLocation;
  type: TripType;
  isInProgress: boolean;
}
