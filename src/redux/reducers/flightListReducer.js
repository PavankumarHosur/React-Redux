// import { DISPLAY_FLIGHT_DETAILS } from "../actionTypes/flightActionTypes";
// import { CHECK_IN_PASSENGERS_SEAT } from "../actionTypes/flightActionTypes";
// import { UNDO_CHECK_IN_PASSENGERS } from "../actionTypes/flightActionTypes";
// import produce from "immer";
// const initialState = {
//   loading: false,
//   flights: [],
//   seats: [],
//   error: "",
// };

// const FlightReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DISPLAY_FLIGHTS:
//       return { ...state, flights: action.payLoad };

//     case DISPLAY_SEAT_DETAILS:
//       return {
//         ...state,
//         seats: action.payLoad,
//       };

//     case CHECK_IN_PASSENGERS_SEAT:
//       const flightIndex = state.flights.findIndex(
//         (flight) => flight.id == action.payLoad.flightId
//       );

//       return produce(state, (draft) => {
//         draft.flights[flightIndex].seats[action.payLoad.seatNo].checkIn =
//           action.payLoad.checkedIn;
//       });

//     case FETCH_FLIGHT_DETAILS: {
//       return produce(state, (draft) => {
//         draft.loading = true;
//         draft.error = "";
//       });
//       return {
//         ...state,
//         loading: true,
//       };
//     }

//     case FETCH_FLIGHT_SUCCESS: {
//       return produce(state, (draft) => {
//         draft.loading = false;
//         draft.flights = action.payLoad;
//         draft.error = "";
//       });
//       return {
//         ...state,
//         loading: false,
//         flights: action.payLoad,
//       };
//     }

//     case FETCH_FLIGHT_FAILURE: {
//       return produce(state, (draft) => {
//         draft.loading = false;
//         draft.error = action.payLoad;
//       });
//       return {
//         ...state,
//         loading: false,
//         error: action.payLoad,
//       };
//     }

//     default:
//       return state;
//       break;
//   }
// };

// export default FlightReducer;

import {
  FETCH_FLIGHT_DETAILS,
  FETCH_FLIGHT_SUCCESS,
  FETCH_FLIGHT_FAILURE,
} from "../actionTypes/flightListActionTypes";
import produce from "immer";

const initialState = {
  loading: false,
  flights: [],
  seats: [],
  error: "",
};

const FlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHT_DETAILS: {
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = "";
      });
    }
    case FETCH_FLIGHT_SUCCESS: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.flights = action.payLoad;
        draft.error = "";
      });
    }

    case FETCH_FLIGHT_FAILURE: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payLoad;
      });
    }

    default:
      return state;
  }
};

export default FlightReducer;
