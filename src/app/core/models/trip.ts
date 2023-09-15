export interface TripTypeProps {
  selected: boolean,
  currentPriority?: number,
  currentPage?: number,
  items?: TripItem[],
}

export interface TripTypeSportProps extends TripTypeProps {
  sports?: string[]
}

// Information about the trip data
export interface TripType {
  beach?: TripTypeProps,
  common?: TripTypeProps,
  cultural?: TripTypeProps,
  mountain?: TripTypeProps,
  sport?: TripTypeSportProps,
  diving?: TripTypeProps,
  cycling?: TripTypeProps,
  pet?: TripTypeProps,
  baby?: TripTypeProps
}

export interface TripItem {
  name: string,
  es_name?: string, // just used when fetching, after that value is set in name prop depending on the selected language
  type?: string,
  priority: number,
  isNew?: boolean,
  showInSuitcase?: boolean,
  showInSuggestion?: boolean,
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
