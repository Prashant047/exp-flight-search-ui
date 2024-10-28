import { type SearchResults } from "./types";

const data: SearchResults = [
  {
    totalCost: 2344,
    flightClass: "BUSINESS",
    tag: "FASTEST",
    srcToDest: {
      departureDate: "14 June, 2023",
      departureTime: "9:10PM",
      arrivalDate: "15 June, 2023",
      arrivalTime: "2:50PM",
      totalTime: "11h 40m",
      flightNumber: "MU 788",
    },
    destToSrc: {
      departureDate: "26 June, 2023",
      departureTime: "12:30PM",
      arrivalDate: "27 June 2023",
      arrivalTime: "7:10PM",
      totalTime: "12h 40m",
      flightNumber: "MU 787",
    },
  },
  {
    totalCost: 1970,
    flightClass: "ECONOMY",
    tag: "CHEAPEST",
    srcToDest: {
      departureDate: "14 June, 2023",
      departureTime: "9:10PM",
      arrivalDate: "15 June, 2023",
      arrivalTime: "2:50PM",
      totalTime: "11h 40m",
      flightNumber: "MU 788",
    },
    destToSrc: {
      departureDate: "26 June, 2023",
      departureTime: "12:30PM",
      arrivalDate: "27 June 2023",
      arrivalTime: "7:10PM",
      totalTime: "12h 40m",
      flightNumber: "MU 787",
    },
  },
  {
    totalCost: 3122,
    flightClass: "BUSINESS",
    srcToDest: {
      departureDate: "14 June, 2023",
      departureTime: "9:10PM",
      arrivalDate: "15 June, 2023",
      arrivalTime: "2:50PM",
      totalTime: "11h 40m",
      flightNumber: "MU 788",
    },
    destToSrc: {
      departureDate: "26 June, 2023",
      departureTime: "12:30PM",
      arrivalDate: "27 June 2023",
      arrivalTime: "7:10PM",
      totalTime: "12h 40m",
      flightNumber: "MU 787",
    },
  },
];

export default data;
