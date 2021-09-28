import {
  FETCH_PASSENGERS_DETAILS,
  FETCH_PASSENGERS_SUCCESS,
  FETCH_PASSENGERS_FAILURE,
  UPDATE_PASSENGER_CHECKIN_CHECKOUT,
} from "../actionTypes/passengerActionTypes";

import produce from "immer";

const initialState = {
  passengers: [],
  loading: false,
  error: "",
};

const passengersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PASSENGERS_DETAILS: {
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = "";
      });
    }
    case FETCH_PASSENGERS_SUCCESS: {
      return produce(state, (draft) => {
        draft.passengers = action.payLoad;
        draft.loading = false;
        draft.error = "";
      });
    }

    case FETCH_PASSENGERS_FAILURE: {
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payLoad;
      });
    }

    case UPDATE_PASSENGER_CHECKIN_CHECKOUT: {
      const updatedPassenger = action.payLoad;
      const updatedPassList = state.passengers.map((passengers) =>
        updatedPassenger.id === passengers.id ? updatedPassenger : passengers
      );

      return produce(state, (draft) => {
        draft.passengers = updatedPassList;
      });
    }

    default:
      return state;
  }
};

export default passengersReducer;
