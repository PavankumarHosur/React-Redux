import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { checkInPassengers } from "../redux/actions/flightActions";
import "../CSS/Style.css";
import { displaySeatDetails } from "../redux/actions/flightActions";

// npx json-server --watch Data/db.json --port 8000
function Flight() {
  const { flightId } = useParams();
  const dispatch = useDispatch();
  //console.log("flightId" + flightId);
  const flightList = useSelector((state) => state.flight.flights);
  const flight = flightList.find((element) => element.id == flightId);
  console.log(flightList);
  // alert(flight.source);

  const getSeatDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/flights/${flightId}/seats`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const seats = await response.json();
      dispatch(displaySeatDetails(seats));
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e, flightId, seatNo) => {
    dispatch(checkInPassengers(flightId, seatNo, e.target.checked));
  };

  return (
    <div>
      <div className="flight-details">
        <div className="flight">
          <p>Flight Id: {flight.id}</p>
          <p>From: {flight.source}</p>
        </div>
        <div className="flight">
          <p>Date: {flight.scheduleDate}</p>
          <p>To: {flight.destination}</p>
        </div>
        <div className="flight">
          <p>Time: {flight.time}</p>
        </div>
      </div>
      <div className="seat-details">
        {" "}
        <ol class="cabin fuselage">
          <li class="row row--1">
            <ol class="seats" type="A">
              <div className="box">
                <li class="seat">
                  <input
                    type="checkbox"
                    id="1A"
                    checked="true"
                    onChange={handleChange}
                  />
                  <br></br>
                  <label for="1A">1A</label>
                </li>
              </div>
              <div className="box">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1B" />
                  <br></br>
                  <label for="1B">1B</label>
                </li>
              </div>
              <div className="box-3">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1C" />
                  <br></br>
                  <label for="1C">1C</label>
                </li>
              </div>

              <div className="box">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1D" />
                  <br></br>
                  <label for="1D">1D</label>
                </li>
              </div>
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1E" />
                  <br></br>
                  <label for="1E">1E</label>
                </li>
              </div>
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1F" />
                  <br></br>
                  <label for="1F">1F</label>
                </li>
              </div>
            </ol>
          </li>
          <li class="row row--1">
            <ol class="seats" type="A">
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1A" />
                  <br></br>
                  <label for="1A">1A</label>
                </li>
              </div>
              <div className="box">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1B" />
                  <br></br>
                  <label for="1B">1B</label>
                </li>
              </div>
              <div className="box-3">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1C" />
                  <br></br>
                  <label for="1C">1C</label>
                </li>
              </div>

              <div className="box">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1D" />
                  <br></br>
                  <label for="1D">1D</label>
                </li>
              </div>
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1E" />
                  <br></br>
                  <label for="1E">1E</label>
                </li>
              </div>
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1F" />
                  <br></br>
                  <label for="1F">1F</label>
                </li>
              </div>
            </ol>
          </li>
          <li class="row row--1">
            <ol class="seats" type="A">
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1A" />
                  <br></br>
                  <label for="1A">1A</label>
                </li>
              </div>
              <div className="box">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1B" />
                  <br></br>
                  <label for="1B">1B</label>
                </li>
              </div>
              <div className="box-3">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1C" />
                  <br></br>
                  <label for="1C">1C</label>
                </li>
              </div>

              <div className="box">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1D" />
                  <br></br>
                  <label for="1D">1D</label>
                </li>
              </div>
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1E" />
                  <br></br>
                  <label for="1E">1E</label>
                </li>
              </div>
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1F" />
                  <br></br>
                  <label for="1F">1F</label>
                </li>
              </div>
            </ol>
          </li>
          <li class="row row--1">
            <ol class="seats" type="A">
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1A" />
                  <br></br>
                  <label for="1A">1A</label>
                </li>
              </div>
              <div className="box">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1B" />
                  <br></br>
                  <label for="1B">1B</label>
                </li>
              </div>
              <div className="box-3">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1C" />
                  <br></br>
                  <label for="1C">1C</label>
                </li>
              </div>

              <div className="box">
                {" "}
                <li class="seat">
                  <input type="checkbox" id="1D" />
                  <br></br>
                  <label for="1D">1D</label>
                </li>
              </div>
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1E" />
                  <br></br>
                  <label for="1E">1E</label>
                </li>
              </div>
              <div className="box">
                <li class="seat">
                  <input type="checkbox" id="1F" />
                  <br></br>
                  <label for="1F">1F</label>
                </li>
              </div>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Flight;
