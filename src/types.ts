export type TagName = "CHEAPEST" | "FASTEST";
export type FlightClass = "BUSINESS" | "FIRST" | "ECONOMY"


export type FlighDetail = {
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  totalTime: string;
  flightNumber: string;
};

export type TripDetail = {
  totalCost: number;
  flightClass: FlightClass;
  tag?: TagName;
  srcToDest: FlighDetail;
  destToSrc: FlighDetail;
};

export type SearchResults = Array<TripDetail>
