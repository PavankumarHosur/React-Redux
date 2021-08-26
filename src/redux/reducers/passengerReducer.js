import { CHECK_IN_PASSENERS } from "../actionTypes/checkInActionTypes";
import { UNDO_CHECK_IN_PASSENGERS } from "../actionTypes/checkInActionTypes";
const initialState = {
  name: "Pavan",
  planeId: "F1",
  seatNo: 1,
  checkIn: false,
};

const passengersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IN_PASSENERS:
      return state;

    case UNDO_CHECK_IN_PASSENGERS:
      return state;

    default:
      return state;
  }
};

export default passengersReducer;
