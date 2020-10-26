// Information about the trip data
export interface TripType {
  beach?: {
    selected: boolean,
    priority: number,
  }
  common?: {
    selected: boolean,
    priority: number,
  }
  cultural?: {
    selected: boolean,
    priority: number,
  }
  mountain?: {
    selected: boolean,
    priority: number,
  }
  sport?: {
    selected: boolean,
    priority: number,
  }
}

export interface TripLocation {
  country: string;
  city?: string;
  street?: string;
  coordinates: Coordinates;
}

export interface Coordinates {
  lat: number,
  lng: number,
}
