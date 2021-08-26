import { DISPLAY_FLIGHTS } from "../actionTypes/checkInActionTypes";
import { DISPLAY_FLIGHT_DETAILS } from "../actionTypes/checkInActionTypes";
import { CHECK_IN_PASSENERS } from "../actionTypes/checkInActionTypes";
import { UNDO_CHECK_IN_PASSENGERS } from "../actionTypes/checkInActionTypes";
import produce from "immer";
const initialState = {
  flights: [
    {
      id: "F1",
      source: "Bengaluru",
      destination: "Hubballi",
      timeOfDepart: "22.00",
      seats: [
        {
          checkIn: false,
        },
        {
          checkIn: true,
        },
      ],
    },
    {
      id: "F2",
      source: "Delhi",
      destination: "Mumbai",
      timeOfDepart: "20.00",
      seats: [
        {
          checkIn: false,
        },
        {
          checkIn: false,
        },
      ],
    },
  ],
};

const FlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_FLIGHTS:
      return state;
      break;

    case CHECK_IN_PASSENERS:
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
