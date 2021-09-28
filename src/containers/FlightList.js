import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { displayAllFlightDetails } from "../redux/actions/flightListActions";
import { Link } from "react-router-dom";

function FlightList() {
  const dispatch = useDispatch();
  const flightList = useSelector((state) => state.flight);

  useEffect(() => {
    dispatch(displayAllFlightDetails());
  }, []);

  const showData = () => {
    if (flightList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(flightList.flights)) {
      return (
        <div>
          <ul>
            {flightList.flights.map((flight) => {
              return (
                <Link to={`/flights/${flight.id}`}>
                  <ul>
                    <li>{flight.id}</li>
                  </ul>
                </Link>
              );
            })}
          </ul>
        </div>
      );
    }
    if (flightList.error !== "") {
      return <p>{flightList.error}</p>;
    }
  };

  return <div>{showData()}</div>;
}

export default FlightList;
