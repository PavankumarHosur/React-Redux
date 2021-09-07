import React, { useEffect, componentDidCatch } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DISPLAY_FLIGHTS } from "../redux/actionTypes/checkInActionTypes";
import { displayAllFlights } from "../redux/actions/flightActions";

function FlightList() {
  console.log("called1");
  const flight = useSelector((state) => state.flight.flights);
  const dispatch = useDispatch();

  const fetchFlights = async () => {
    try {
      const response = await fetch("http://localhost:8000/flights");

      if (!response.ok) {
        throw Error(response.statusText);
      }
      const flights = await response.json();

      dispatch(displayAllFlights(flights));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div>
      {flight.map((flight) => {
        return (
          <Link to={`/flights/${flight.id}`}>
            <ul>
              <li>{flight.id}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
}

export default FlightList;
