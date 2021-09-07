import {
  DISPLAY_FLIGHTS,
  DISPLAY_SEAT_DETAILS,
} from "../actionTypes/checkInActionTypes";
import { DISPLAY_FLIGHT_DETAILS } from "../actionTypes/checkInActionTypes";
import { CHECK_IN_PASSENGERS_SEAT } from "../actionTypes/checkInActionTypes";
import { UNDO_CHECK_IN_PASSENGERS } from "../actionTypes/checkInActionTypes";
import produce from "immer";
const initialState = {
  flights: [],
  seats: [],
};

const FlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_FLIGHTS:
      return { ...state, flights: action.payLoad };

    case DISPLAY_SEAT_DETAILS:
      return {
        ...state,
        seats: action.payLoad,
      };

    case CHECK_IN_PASSENGERS_SEAT:
      const flightIndex = state.flights.findIndex(
        (flight) => flight.id == action.payLoad.flightId
      );

      return produce(state, (draft) => {
        draft.flights[flightIndex].seats[action.payLoad.seatNo].checkIn =
          action.payLoad.checkedIn;
      });

    default:
      return state;
      break;
  }
};

export default FlightReducer;
