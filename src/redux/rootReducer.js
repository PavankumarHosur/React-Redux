import FlightReducer from "./reducers/flightListReducer";
import { combineReducers } from "redux";
import passengersReducer from "./reducers/passengerReducer";
import singleFlightReducer from "./reducers/singlrFlightReducer";

const rootReducer = combineReducers({
  flight: FlightReducer,
  passenger: passengersReducer,
  singleFlight: singleFlightReducer,
});

export default rootReducer;
