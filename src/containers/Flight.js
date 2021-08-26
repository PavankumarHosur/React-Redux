import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { checkInPassengers } from "../redux/actions/flightActions";

function Flight() {
  const { flightId } = useParams();
  const dispatch = useDispatch();
  //console.log("flightId" + flightId);
  const flightList = useSelector((state) => state.flight.flights);
  const flight = flightList.find((flight) => {
    return flight.id === flightId;
  });
  console.log(flightList);
  // alert(flight.source);

  const handleChangeChk = (e, flightId, seatNo) => {
    dispatch(checkInPassengers(flightId, seatNo, e.target.checked));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={flight.seats[0].checkIn}
        onChange={(e) => handleChangeChk(e, flight.id, 0)}
      />
      <input
        type="checkbox"
        checked={flight.seats[1].checkIn}
        onChange={(e) => handleChangeChk(e, flight.id, 1)}
      />
    </div>
  );
}

export default Flight;
