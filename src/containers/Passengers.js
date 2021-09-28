import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import "react-dropdown/style.css";
import {
  displayAllPassengers,
  updatePassengerSeatDetails,
} from "../redux/actions/passengersActions";
import _ from "lodash";
import "../CSS/passenger.scss";

function Passengers() {
  const passengersList = useSelector((state) => state.passenger);
  const dispatch = useDispatch();
  let [filter, setFilter] = useState("");
  const handleFilter = (e) => {
    let value = e.target.value;
    setFilter(value);
  };

  const handleSeatChange = (passenger, event) => {
    dispatch(updatePassengerSeatDetails(passenger, event.target.checked));
  };

  useEffect(() => {
    dispatch(displayAllPassengers());
  }, []);

  const getUpdatedPassengers = () => {
    if (filter === "") {
      return passengersList.passengers;
    } else if (filter === "CheckedIn") {
      return passengersList.passengers.filter((passenger) => {
        return passenger.checkedIn;
      });
    } else if (filter === "CheckedOut") {
      return passengersList.passengers.filter((passenger) => {
        return !passenger.checkedIn;
      });
    } else if (filter === "Infant") {
      return passengersList.passengers.filter((passenger) => {
        return passenger.infants;
      });
    } else {
      return passengersList.passengers.filter((passenger) => {
        return passenger.wheelchairRequired;
      });
    }
  };

  const showData = () => {
    if (passengersList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(passengersList.passengers)) {
      return (
        <div>
          <div className="filter-link">
            <select name="Filter" id="cars" onChange={(e) => handleFilter(e)}>
              <option hidden>Add Filter</option>
              <option value="CheckedIn">CheckedIn</option>
              <option value="CheckedOut">CheckedOut</option>
              <option value="Infant">Infant</option>
              <option value="WheeChair">WheeChair</option>
            </select>
          </div>

          <table className="passengers-list">
            <tr>
              <th>Name</th>
              <th>Flight ID</th>
              <th>Seat No.</th>
              <th>Ancillary Services</th>
            </tr>
            {getUpdatedPassengers().map((passenger) => {
              return (
                <tr>
                  <td>{passenger.name}</td>
                  <td>{passenger.fid}</td>
                  <td>
                    {passenger.seatNo}{" "}
                    <input
                      type="checkbox"
                      id="1A"
                      checked={passenger.checkedIn}
                      onChange={(e) => handleSeatChange(passenger, e)}
                    />
                  </td>
                  <td>{passenger.ancillaryServices}</td>
                </tr>
              );
            })}
          </table>
        </div>
      );
    }
    if (passengersList.error !== "") {
      return <p>{passengersList.error}</p>;
    }
  };

  return <div className="passengers"> {showData()}</div>;
}

export default Passengers;
