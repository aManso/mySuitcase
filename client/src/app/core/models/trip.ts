// Information about the trip data
export interface TripType {
  beach?: {
    selected: boolean,
    currentPriority?: number,
    currentPage?: number,
    items?: TripItem[],
  }
  common?: {
    selected: boolean,
    currentPriority?: number,
    currentPage?: number,
    items?: TripItem[],
  }
  cultural?: {
    selected: boolean,
    currentPriority?: number,
    currentPage?: number,
    items?: TripItem[],
  }
  mountain?: {
    selected: boolean,
    currentPriority?: number,
    currentPage?: number,
    items?: TripItem[],
  }
  sport?: {
    selected: boolean,
    currentPriority?: number,
    currentPage?: number,
    sports?: string[],
    items?: TripItem[],
  }
}

export interface TripItem {
  name: string,
  type?: string,
  priority: number,
  isNew?: boolean,
  show?: boolean,
  quantity?: number;
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
