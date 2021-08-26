import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FlightList() {
  const flight = useSelector((state) => state.flight.flights);

  return (
    <div>
      {flight.map((flight) => (
        <Link to={`/flights/${flight.id}`}>
          <h2>{flight.id}</h2>
        </Link>
      ))}
    </div>
  );
}

export default FlightList;
