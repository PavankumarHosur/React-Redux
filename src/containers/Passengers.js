import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayPassengers } from "../redux/actions/passengersActions";

function Passengers() {
  const passengersList = useSelector((state) => state.passenger.passengers);
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
      Hello
      {passengersList.map((pass) => (
        <h2>{pass.name}</h2>
      ))}
    </div>
  );
}

export default Passengers;
