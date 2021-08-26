import { CHECK_IN_PASSENERS } from "../actionTypes/checkInActionTypes";
import { UNDO_CHECK_IN_PASSENGERS } from "../actionTypes/checkInActionTypes";
import { DISPLAY_FLIGHT_DETAILS } from "../actionTypes/checkInActionTypes";

export const checkInPassengers = (flightId, seatNo, checkedIn) => {
  return {
    type: CHECK_IN_PASSENERS,
    payLoad: {
      flightId: flightId,
      seatNo: seatNo,
      checkedIn: checkedIn,
    },
  };
};

const displayFlightDetails = (flightId) => {
  return {
    type: DISPLAY_FLIGHT_DETAILS,
    payLoad: flightId,
  };
};
