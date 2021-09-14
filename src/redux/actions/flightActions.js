import {
  CHECK_IN_PASSENGERS_SEAT,
  DISPLAY_FLIGHTS,
  DISPLAY_SEAT_DETAILS,
  FETCH_FLIGHT_DETAILS,
  FETCH_FLIGHT_SUCCESS,
  FETCH_FLIGHT_FAILURE,
} from "../actionTypes/checkInActionTypes";
import axios from "axios";
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

export const fetchFlightDetails = () => {
  return {
    type: FETCH_FLIGHT_DETAILS,
  };
};
export const fetchFlightSuccess = (flight) => {
  return {
    type: FETCH_FLIGHT_SUCCESS,
    payLoad: flight,
  };
};
export const fetchFlightFailure = (error) => {
  return {
    type: FETCH_FLIGHT_FAILURE,
    payLoad: error,
  };
};

export const displayAllFlightDetails = () => {
  return (dispatch) => {
    try {
      dispatch(fetchFlightDetails());
      axios
        .get("http://localhost:8000/flights")
        .then((response) => {
          const flights = response.data;
          dispatch(fetchFlightSuccess(flights));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchFlightFailure(errorMsg));
        });
    } catch (error) {}
  };
};
