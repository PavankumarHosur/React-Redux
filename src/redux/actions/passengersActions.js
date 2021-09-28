// import { DISPLAY_PASSENGERS } from "../actionTypes/passengerActionTypes";

// export const displayPassengers = (passengers) => {
//   return {
//     type: DISPLAY_PASSENGERS,
//     payLoad: passengers,
//   };
// };

import {
  FETCH_PASSENGERS_DETAILS,
  FETCH_PASSENGERS_SUCCESS,
  FETCH_PASSENGERS_FAILURE,
  UPDATE_PASSENGER_CHECKIN_CHECKOUT,
} from "../actionTypes/passengerActionTypes";
import { updateSeatDetails } from "./singleFlightAction";

import axios from "axios";

export const fetchPasengersDetails = () => {
  return {
    type: FETCH_PASSENGERS_DETAILS,
  };
};
export const fetchPassengersSuccess = (passengers) => {
  return {
    type: FETCH_PASSENGERS_SUCCESS,
    payLoad: passengers,
  };
};
export const fetchPassengersFailure = (error) => {
  return {
    type: FETCH_PASSENGERS_FAILURE,
    payLoad: error,
  };
};

export const displayAllPassengers = () => {
  return (dispatch) => {
    try {
      dispatch(fetchPasengersDetails());
      axios
        .get("http://localhost:8000/passengers")
        .then((response) => {
          const passengers = response.data;
          dispatch(fetchPassengersSuccess(passengers));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchPassengersFailure(errorMsg));
        });
    } catch (error) {}
  };
};

export const updatePassengerSeatDetails = (passenger, isCheckedIn) => {
  const pasId = passenger.id;
  const updatedPass = { ...passenger, checkedIn: isCheckedIn };
  const fID = updatedPass.fid;
  const seatNo = updatedPass.seatNo;
  let responseStatus = 0;
  return (dispatch) => {
    axios
      .patch(`http://localhost:8000/passengers/${pasId}`, updatedPass)
      .then((response) => {
        if (response.status === 200) {
          responseStatus = response.status;
          dispatch({
            type: UPDATE_PASSENGER_CHECKIN_CHECKOUT,
            payLoad: updatedPass,
          });

          axios
            .get(`http://localhost:8000/seats/${fID}`)
            .then((response) => {
              const a = response;
              const res = dispatch(
                updateSeatDetails(fID, seatNo, response.data.seat, isCheckedIn)
              );
            })
            .catch((error) => {});

          // dispatch(updateSeatDetails(updatedPass.fid,updatedPass.s,updatedPass.));
        }
      })
      .catch((error) => {});
  };
};
