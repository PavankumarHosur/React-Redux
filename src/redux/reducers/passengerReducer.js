import { DISPLAY_PASSENGERS } from "../actionTypes/passengerActionTypes";
const initialState = {
  passengers: [],
};

const passengersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_PASSENGERS:
      return { ...state, passengers: action.payLoad };

    default:
      return state;
  }
};

export default passengersReducer;
