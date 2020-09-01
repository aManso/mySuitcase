// Information about the suitcase
import {TripLocation} from './trip';

export interface Suitcase {
  name: string;
  date: {
    from: Date;
    to: Date;
  }
  place: TripLocation;
  type: string;
  isInProgress: boolean;
}
