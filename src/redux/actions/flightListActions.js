import {
  FETCH_FLIGHT_DETAILS,
  FETCH_FLIGHT_SUCCESS,
  FETCH_FLIGHT_FAILURE,
} from "../actionTypes/flightListActionTypes";
import axios from "axios";

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
