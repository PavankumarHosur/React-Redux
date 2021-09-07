import FlightReducer from "./reducers/flightReducers";
import { combineReducers } from "redux";
import passengersReducer from "./reducers/passengerReducer";

const rootReducer = combineReducers({
  flight: FlightReducer,
  passenger: passengersReducer,
});

export default rootReducer;
