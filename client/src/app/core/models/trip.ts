// Information about the trip data
export interface TripLocation {
  country: string;
  city?: string;
  street?: string;
  coordinates: {
    lat: number,
    lng: number,
  };
}
