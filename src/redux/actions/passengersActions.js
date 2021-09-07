import { DISPLAY_PASSENGERS } from "../actionTypes/passengerActionTypes";

export const displayPassengers = (passengers) => {
  return {
    type: DISPLAY_PASSENGERS,
    payLoad: passengers,
  };
};
