import {
  CHECK_IN_PASSENGERS_SEAT,
  DISPLAY_FLIGHTS,
  DISPLAY_SEAT_DETAILS,
} from "../actionTypes/checkInActionTypes";
import { UNDO_CHECK_IN_PASSENGERS } from "../actionTypes/checkInActionTypes";
import { DISPLAY_FLIGHT_DETAILS } from "../actionTypes/checkInActionTypes";

export const checkInPassengers = (flightId, seatNo, checkedIn) => {
  return {
    type: CHECK_IN_PASSENGERS_SEAT,
    payLoad: {
      flightId: flightId,
      seatNo: seatNo,
      checkedIn: checkedIn,
    },
  };
};

export const displayFlightDetails = (flightId) => {
  return {
    type: DISPLAY_FLIGHT_DETAILS,
    payLoad: flightId,
  };
};

export const displayAllFlights = (flights) => {
  return {
    type: DISPLAY_FLIGHTS,
    payLoad: flights,
  };
};

export const displaySeatDetails = (seats) => {
  return {
    type: DISPLAY_SEAT_DETAILS,
    payLoad: seats,
  };
};
