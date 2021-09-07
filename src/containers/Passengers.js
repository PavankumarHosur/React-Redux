import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayPassengers } from "../redux/actions/passengersActions";

function Passengers() {
  const passengers = useSelector((state) => state.passenger.passengers);
  const dispatch = useDispatch();

  const fetchPassengers = async () => {
    const response = await fetch("http://localhost:8000/passengers");
    const passengers = await response.json();
    dispatch(displayPassengers(passengers));
  };

  useEffect(() => {
    fetchPassengers();
  }, []);
  return (
    <div>
      {passengers.map((pass) => (
        <h2>{pass.name}</h2>
      ))}
    </div>
  );
}

export default Passengers;
