import {
  FETCH_FLIGHT_DETAILS_BY_ID,
  FETCH_FLIGHT_DETAILS_BY_ID_SUCCESS,
  FETCH_FLIGHT_DETAILS_BY_ID_FAILURE,
  FETCH_SEATS_DETAILS_BY_FLIGHT_ID,
  FETCH_SEATS_DETAILS_BY_FLIGHT_ID_SUCCESS,
  FETCH_SEATS_DETAILS_BY_FLIGHT_ID_FAILURE,
  UPDATE_CHECKIN_CHECKOUT_SUCCESS,
} from "../actionTypes/singleFlightActionType";
import produce from "immer";
import { updateCheckInCheckOutSuccess } from "../actions/singleFlightAction";

const initialState = {
  loading: false,
  error: "",
  flightId: "",
  scheduledDate: "",
  time: "",
  source: "",
  destination: "",
  seats: [],
};

const singleFlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHT_DETAILS_BY_ID: {
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = "";
      });
    }

    case FETCH_FLIGHT_DETAILS_BY_ID_SUCCESS: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = "";
        draft.flightId = action.payLoad.id;
        draft.scheduledDate = action.payLoad.scheduleDate;
        draft.time = action.payLoad.time;
        draft.source = action.payLoad.source;
        draft.destination = action.payLoad.destination;
        // draft.seats = action.payLoad.seats;
      });
    }

    case FETCH_FLIGHT_DETAILS_BY_ID_FAILURE: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payLoad;
      });
    }

    case FETCH_SEATS_DETAILS_BY_FLIGHT_ID: {
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = "";
      });
    }

    case FETCH_SEATS_DETAILS_BY_FLIGHT_ID_SUCCESS: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = "";
        draft.seats = action.payLoad.seat;
      });
    }

    case FETCH_SEATS_DETAILS_BY_FLIGHT_ID_FAILURE: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payLoad;
      });
    }

    case UPDATE_CHECKIN_CHECKOUT_SUCCESS: {
      return produce(state, (draft) => {
        draft.seats = action.payLoad.updatedSeats;
      });
    }
    default:
      return state;
  }
};
export default singleFlightReducer;
