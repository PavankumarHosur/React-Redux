import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { checkInPassengers } from "../redux/actions/flightActions";
import "../CSS/Style.css";
import { displaySeatDetails } from "../redux/actions/flightActions";

// npx json-server --watch Data/db.json --port 8000
function Flight() {
  const { flightId } = useParams();
  const dispatch = useDispatch();
  const flightList = useSelector((state) => state.flight.flights);
  const flight = flightList.find((element) => element.id == flightId);
  console.log(flightList);

  const seats = useSelector((state) => state.flight.seats);

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

  const handleChange = (e, seatNo) => {
    dispatch(checkInPassengers(flightId, seatNo, e.target.checked));
  };

  useEffect(() => {
    getSeatDetails();
  }, []);

  return (
    seats[0] && (
      <div className="flight-seat-details">
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
                      checked={seats[0].checkedIn}
                      onChange={(e) => handleChange(e, 0)}
                    />
                    <br></br>
                    <label for="1A">1A</label>
                  </li>
                </div>
                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1B"
                      checked={seats[1].checkedIn}
                      onChange={(e) => handleChange(e, 1)}
                    />
                    <br></br>
                    <label for="1B">1B</label>
                  </li>
                </div>
                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1C"
                      checked={seats[2].checkedIn}
                      onChange={(e) => handleChange(e, 2)}
                    />
                    <br></br>
                    <label for="1C">1C</label>
                  </li>
                </div>

                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1D"
                      checked={seats[3].checkedIn}
                      onChange={(e) => handleChange(e, 3)}
                    />
                    <br></br>
                    <label for="1D">1D</label>
                  </li>
                </div>
              </ol>
            </li>
            <li class="row row--1">
              <ol class="seats" type="A">
                <div className="box">
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1A"
                      checked={seats[4].checkedIn}
                      onChange={(e) => handleChange(e, 4)}
                    />
                    <br></br>
                    <label for="1A">2A</label>
                  </li>
                </div>
                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1B"
                      checked={seats[5].checkedIn}
                      onChange={(e) => handleChange(e, 5)}
                    />
                    <br></br>
                    <label for="1B">2B</label>
                  </li>
                </div>
                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1C"
                      checked={seats[6].checkedIn}
                      onChange={(e) => handleChange(e, 6)}
                    />
                    <br></br>
                    <label for="1C">2C</label>
                  </li>
                </div>

                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1D"
                      checked={seats[7].checkedIn}
                      onChange={(e) => handleChange(e, 7)}
                    />
                    <br></br>
                    <label for="1D">2D</label>
                  </li>
                </div>
              </ol>
            </li>
            <li class="row row--1">
              <ol class="seats" type="A">
                <div className="box">
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1A"
                      checked={seats[8].checkedIn}
                      onChange={(e) => handleChange(e, 8)}
                    />
                    <br></br>
                    <label for="1A">3A</label>
                  </li>
                </div>
                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1B"
                      checked={seats[9].checkedIn}
                      onChange={(e) => handleChange(e, 9)}
                    />
                    <br></br>
                    <label for="1B">3B</label>
                  </li>
                </div>
                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1C"
                      checked={seats[10].checkedIn}
                      onChange={(e) => handleChange(e, 10)}
                    />
                    <br></br>
                    <label for="1C">3C</label>
                  </li>
                </div>

                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1D"
                      checked={seats[11].checkedIn}
                      onChange={(e) => handleChange(e, 11)}
                    />
                    <br></br>
                    <label for="1D">3D</label>
                  </li>
                </div>
              </ol>
            </li>
            <li class="row row--1">
              <ol class="seats" type="A">
                <div className="box">
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1A"
                      checked={seats[12].checkedIn}
                      onChange={(e) => handleChange(e, 12)}
                    />
                    <br></br>
                    <label for="1A">4A</label>
                  </li>
                </div>
                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1B"
                      checked={seats[13].checkedIn}
                      onChange={(e) => handleChange(e, 13)}
                    />
                    <br></br>
                    <label for="1B">4B</label>
                  </li>
                </div>
                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1C"
                      checked={seats[14].checkedIn}
                      onChange={(e) => handleChange(e, 14)}
                    />
                    <br></br>
                    <label for="1C">4C</label>
                  </li>
                </div>

                <div className="box">
                  {" "}
                  <li class="seat">
                    <input
                      type="checkbox"
                      id="1D"
                      checked={seats[15].checkedIn}
                      onChange={(e) => handleChange(e, 15)}
                    />
                    <br></br>
                    <label for="1D">4D</label>
                  </li>
                </div>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    )
  );
}

export default Flight;
