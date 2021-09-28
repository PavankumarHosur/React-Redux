import axios from "axios";
import {
  FETCH_FLIGHT_DETAILS_BY_ID,
  FETCH_FLIGHT_DETAILS_BY_ID_SUCCESS,
  FETCH_FLIGHT_DETAILS_BY_ID_FAILURE,
  FETCH_SEATS_DETAILS_BY_FLIGHT_ID,
  FETCH_SEATS_DETAILS_BY_FLIGHT_ID_SUCCESS,
  FETCH_SEATS_DETAILS_BY_FLIGHT_ID_FAILURE,
  UPDATE_CHECKIN_CHECKOUT,
  UPDATE_CHECKIN_CHECKOUT_SUCCESS,
  UPDATE_CHECKIN_CHECKOUT_FAILURE,
} from "../actionTypes/singleFlightActionType";

const fetchFlightDetailsById = () => {
  return {
    type: FETCH_FLIGHT_DETAILS_BY_ID,
  };
};

const fetchFlightDetailsByIdSuccess = (flight) => {
  return {
    type: FETCH_FLIGHT_DETAILS_BY_ID_SUCCESS,
    payLoad: flight,
  };
};
const fetchFlightDetailsByIdFailure = (error) => {
  return {
    type: FETCH_FLIGHT_DETAILS_BY_ID_FAILURE,
    payLoad: error,
  };
};

const fetchSeatsDeatils = () => {
  return {
    type: FETCH_SEATS_DETAILS_BY_FLIGHT_ID,
  };
};

const fetchSeatsDetailsSuccess = (seats) => {
  return {
    type: FETCH_SEATS_DETAILS_BY_FLIGHT_ID_SUCCESS,
    payLoad: seats,
  };
};
const fetchSeatsDetailsFailure = (error) => {
  return {
    type: FETCH_SEATS_DETAILS_BY_FLIGHT_ID_FAILURE,
    payLoad: error,
  };
};

export const displaySingleFlightDetails = (flightId) => {
  return (dispatch) => {
    dispatch(fetchFlightDetailsById());
    axios
      .get(`http://localhost:8000/flights/${flightId}`)
      .then((response) => {
        dispatch(fetchFlightDetailsByIdSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFlightDetailsByIdFailure(error.message));
      });
  };
};

export const displaySeatDetails = (flightId) => {
  return (dispatch) => {
    dispatch(fetchSeatsDeatils());
    axios
      .get(`http://localhost:8000/seats/${flightId}`)
      .then((response) => {
        dispatch(fetchSeatsDetailsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchSeatsDetailsFailure(error.message));
      });
  };
};

export const updateCheckInCheckOutSuccess = (updatedSeats) => {
  return {
    type: UPDATE_CHECKIN_CHECKOUT_SUCCESS,
    payLoad: {
      updatedSeats,
    },
  };
};

export const updateCheckInCheckOutFailure = (error) => {
  return {
    type: UPDATE_CHECKIN_CHECKOUT_SUCCESS,
    payLoad: error,
  };
};

export const updateSeatDetails = (flightId, seatNo, seats, isCheckedIn) => {
  return (dispatch) => {
    const updatedSeats = seats.map((seat) =>
      seat.id === seatNo ? { ...seat, checkedIn: isCheckedIn } : seat
    );
    axios
      .patch(`http://localhost:8000/seats/${flightId}`, { seat: updatedSeats })
      .then((response) => {
        const re = response;
        dispatch(updateCheckInCheckOutSuccess(updatedSeats));
      })
      .catch((error) => {
        const erro = error;
      });
  };
};
