import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  displayAllFlightDetails,
  displayAllFlights,
} from "../redux/actions/flightActions";

function Dummy() {
  const dispatch = useDispatch();
  const flightList = useSelector((state) => state.flight);

  useEffect(() => {
    dispatch(displayAllFlights());
  }, []);
  const showData = () => {
    if (flightList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(flightList.flights)) {
      return (
        <div>
          <ul>
            {flightList.flights.map((flightId) => {
              return <li>{flightId.id}</li>;
            })}
          </ul>
        </div>
      );
    }
    // if (flightList.error !== "") {
    //   return <p>{flightList.error}</p>;
    // }
  };

  return <div>{showData()}</div>;
}

export default Dummy;
