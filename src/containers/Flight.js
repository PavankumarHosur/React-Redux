import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateSeatDetails } from "../redux/actions/singleFlightAction";
import "../CSS/singleflight.scss";

import {
  displaySingleFlightDetails,
  displaySeatDetails,
} from "../redux/actions/singleFlightAction";
import _ from "lodash";

// npx json-server --watch Data/db.json --port 8000
function Flight() {
  const { flightId } = useParams();
  const dispatch = useDispatch();
  const flightDetails = useSelector((state) => state.singleFlight);

  useEffect(() => {
    dispatch(displaySingleFlightDetails(flightId));
    dispatch(displaySeatDetails(flightId));
  }, []);

  const showFlightData = () => {
    if (flightDetails.loading) {
      return <p>Loading...</p>;
    }

    if (flightDetails.error != "") {
      return <p>{flightDetails.error}</p>;
    }

    return (
      <div className="flight-seat-details">
        <div className="flight-details">
          <div className="flight">
            <p>Flight Id: {flightDetails.flightId}</p>
            <p>From: {flightDetails.source}</p>
          </div>
          <div className="flight">
            <p>Date: {flightDetails.scheduledDate}</p>
            <p>To: {flightDetails.destination}</p>
          </div>
          <div className="flight">
            <p>Time: {flightDetails.time}</p>
          </div>
        </div>
      </div>
    );
  };

  const handleChange = (event, seatNo) => {
    const seats = flightDetails.seats;
    dispatch(updateSeatDetails(flightId, seatNo, seats, event.target.checked));
  };
  const showSeatData = () => {
    if (flightDetails.loading) {
      return <p>Loading...</p>;
    }

    if (flightDetails.error != "") {
      return <p>{flightDetails.error}</p>;
    }

    if (!_.isEmpty(flightDetails.seats)) {
      const seats = flightDetails.seats;

      let backGroundColor = [];
      seats.map((seat) => {
        if (seat.infants === true && seat.wheelchairRequired === true) {
          backGroundColor.push("infantAndWheelChair");
        } else if (seat.infants === true && seat.wheelchairRequired === false) {
          backGroundColor.push("infantOnly");
        } else if (seat.infants === false && seat.wheelchairRequired === true) {
          backGroundColor.push("wheelChairOnly");
        } else {
          backGroundColor.push("normal");
        }
      });
      return (
        <div>
          {" "}
          <div className="seat-details">
            {" "}
            <ol class="cabin fuselage">
              <li class="row row--1">
                <ol class="seats" type="A">
                  <div className={backGroundColor[0]}>
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1A"
                        checked={seats[0].checkedIn}
                        onChange={(e) => handleChange(e, "1A")}
                      />
                      <br></br>
                      <label for="1A">1A</label>
                    </li>
                  </div>
                  <div className={backGroundColor[1]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1B"
                        checked={seats[1].checkedIn}
                        onChange={(e) => handleChange(e, "1B")}
                      />
                      <br></br>
                      <label for="1B">1B</label>
                    </li>
                  </div>
                  <div className={backGroundColor[2]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1C"
                        checked={seats[2].checkedIn}
                        onChange={(e) => handleChange(e, "1C")}
                      />
                      <br></br>
                      <label for="1C">1C</label>
                    </li>
                  </div>

                  <div className={backGroundColor[3]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1D"
                        checked={seats[3].checkedIn}
                        onChange={(e) => handleChange(e, "1D")}
                      />
                      <br></br>
                      <label for="1D">1D</label>
                    </li>
                  </div>
                </ol>
              </li>
              <div className="referenceLists">
                <ul>
                  <li className="reference">
                    <p>Infant and Wheelchair</p>
                    <div className="small-box-infant-wheelachair"></div>
                  </li>
                  <li className="reference">
                    <p>Infant</p>
                    <div className="small-box-infant"></div>
                  </li>
                  <li className="reference">
                    <p>Wheelchair</p>
                    <div className="small-box-wheelachair"></div>
                  </li>
                  <li className="reference">
                    <p>Normal</p>
                    <div className="small-box-normal"></div>
                  </li>
                </ul>
              </div>
              <li class="row row--1">
                <ol class="seats" type="A">
                  <div className={backGroundColor[4]}>
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1A"
                        checked={seats[4].checkedIn}
                        onChange={(e) => handleChange(e, "2A")}
                      />
                      <br></br>
                      <label for="1A">2A</label>
                    </li>
                  </div>
                  <div className={backGroundColor[5]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1B"
                        checked={seats[5].checkedIn}
                        onChange={(e) => handleChange(e, "2B")}
                      />
                      <br></br>
                      <label for="1B">2B</label>
                    </li>
                  </div>
                  <div className={backGroundColor[6]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1C"
                        checked={seats[6].checkedIn}
                        onChange={(e) => handleChange(e, "2C")}
                      />
                      <br></br>
                      <label for="1C">2C</label>
                    </li>
                  </div>

                  <div className={backGroundColor[7]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1D"
                        checked={seats[7].checkedIn}
                        onChange={(e) => handleChange(e, "2D")}
                      />
                      <br></br>
                      <label for="1D">2D</label>
                    </li>
                  </div>
                </ol>
              </li>
              <li class="row row--1">
                <ol class="seats" type="A">
                  <div className={backGroundColor[8]}>
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1A"
                        checked={seats[8].checkedIn}
                        onChange={(e) => handleChange(e, "3A")}
                      />
                      <br></br>
                      <label for="1A">3A</label>
                    </li>
                  </div>

                  <div className={backGroundColor[9]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1B"
                        checked={seats[9].checkedIn}
                        onChange={(e) => handleChange(e, "3B")}
                      />
                      <br></br>
                      <label for="1B">3B</label>
                    </li>
                  </div>
                  <div className={backGroundColor[10]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1C"
                        checked={seats[10].checkedIn}
                        onChange={(e) => handleChange(e, "3C")}
                      />
                      <br></br>
                      <label for="1C">3C</label>
                    </li>
                  </div>

                  <div className={backGroundColor[11]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1D"
                        checked={seats[11].checkedIn}
                        onChange={(e) => handleChange(e, "3D")}
                      />
                      <br></br>
                      <label for="1D">3D</label>
                    </li>
                  </div>
                </ol>
              </li>

              <li class="row row--1">
                <ol class="seats" type="A">
                  <div className={backGroundColor[12]}>
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1A"
                        checked={seats[12].checkedIn}
                        onChange={(e) => handleChange(e, "4A")}
                      />
                      <br></br>
                      <label for="1A">4A</label>
                    </li>
                  </div>
                  <div className={backGroundColor[13]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1B"
                        checked={seats[13].checkedIn}
                        onChange={(e) => handleChange(e, "4B")}
                      />
                      <br></br>
                      <label for="1B">4B</label>
                    </li>
                  </div>
                  <div className={backGroundColor[14]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1C"
                        checked={seats[14].checkedIn}
                        onChange={(e) => handleChange(e, "4C")}
                      />
                      <br></br>
                      <label for="1C">4C</label>
                    </li>
                  </div>

                  <div className={backGroundColor[15]}>
                    {" "}
                    <li class="seat">
                      <input
                        type="checkbox"
                        id="1D"
                        checked={seats[15].checkedIn}
                        onChange={(e) => handleChange(e, "4D")}
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
      );
    }
  };

  return (
    <div>
      {showFlightData()}
      <div>{showSeatData()}</div>
    </div>
  );
}
//const flightList = useSelector((state) => state.flight.flights);
// const flight = flightList.find((element) => element.id == flightId);
// console.log(flightList);

// const seats = useSelector((state) => state.flight.seats);

// const getSeatDetails = async () => {
//   try {
//     const response = await fetch(
//       `http://localhost:8000/flights/${flightId}/seats`
//     );
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     const seats = await response.json();
//     dispatch(displaySeatDetails(seats));
//   } catch (error) {
//     alert(error);
//   }
// };

// const handleChange = (e, seatNo) => {
//   dispatch(checkInPassengers(flightId, seatNo, e.target.checked));
// };

// useEffect(() => {
//   getSeatDetails();
// }, []);

// return (
//   seats[0] && (
//     <div className="flight-seat-details">
//       <div className="flight-details">
//         <div className="flight">
//           <p>Flight Id: {flight.id}</p>
//           <p>From: {flight.source}</p>
//         </div>
//         <div className="flight">
//           <p>Date: {flight.scheduleDate}</p>
//           <p>To: {flight.destination}</p>
//         </div>
//         <div className="flight">
//           <p>Time: {flight.time}</p>
//         </div>
//       </div>
//       <div className="seat-details">
//         {" "}
//         <ol class="cabin fuselage">
//           <li class="row row--1">
//             <ol class="seats" type="A">
//               <div className="box">
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1A"
//                     checked={seats[0].checkedIn}
//                     onChange={(e) => handleChange(e, 0)}
//                   />
//                   <br></br>
//                   <label for="1A">1A</label>
//                 </li>
//               </div>
//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1B"
//                     checked={seats[1].checkedIn}
//                     onChange={(e) => handleChange(e, 1)}
//                   />
//                   <br></br>
//                   <label for="1B">1B</label>
//                 </li>
//               </div>
//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1C"
//                     checked={seats[2].checkedIn}
//                     onChange={(e) => handleChange(e, 2)}
//                   />
//                   <br></br>
//                   <label for="1C">1C</label>
//                 </li>
//               </div>

//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1D"
//                     checked={seats[3].checkedIn}
//                     onChange={(e) => handleChange(e, 3)}
//                   />
//                   <br></br>
//                   <label for="1D">1D</label>
//                 </li>
//               </div>
//             </ol>
//           </li>
//           <li class="row row--1">
//             <ol class="seats" type="A">
//               <div className="box">
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1A"
//                     checked={seats[4].checkedIn}
//                     onChange={(e) => handleChange(e, 4)}
//                   />
//                   <br></br>
//                   <label for="1A">2A</label>
//                 </li>
//               </div>
//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1B"
//                     checked={seats[5].checkedIn}
//                     onChange={(e) => handleChange(e, 5)}
//                   />
//                   <br></br>
//                   <label for="1B">2B</label>
//                 </li>
//               </div>
//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1C"
//                     checked={seats[6].checkedIn}
//                     onChange={(e) => handleChange(e, 6)}
//                   />
//                   <br></br>
//                   <label for="1C">2C</label>
//                 </li>
//               </div>

//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1D"
//                     checked={seats[7].checkedIn}
//                     onChange={(e) => handleChange(e, 7)}
//                   />
//                   <br></br>
//                   <label for="1D">2D</label>
//                 </li>
//               </div>
//             </ol>
//           </li>
//           <li class="row row--1">
//             <ol class="seats" type="A">
//               <div className="box">
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1A"
//                     checked={seats[8].checkedIn}
//                     onChange={(e) => handleChange(e, 8)}
//                   />
//                   <br></br>
//                   <label for="1A">3A</label>
//                 </li>
//               </div>
//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1B"
//                     checked={seats[9].checkedIn}
//                     onChange={(e) => handleChange(e, 9)}
//                   />
//                   <br></br>
//                   <label for="1B">3B</label>
//                 </li>
//               </div>
//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1C"
//                     checked={seats[10].checkedIn}
//                     onChange={(e) => handleChange(e, 10)}
//                   />
//                   <br></br>
//                   <label for="1C">3C</label>
//                 </li>
//               </div>

//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1D"
//                     checked={seats[11].checkedIn}
//                     onChange={(e) => handleChange(e, 11)}
//                   />
//                   <br></br>
//                   <label for="1D">3D</label>
//                 </li>
//               </div>
//             </ol>
//           </li>
//           <li class="row row--1">
//             <ol class="seats" type="A">
//               <div className="box">
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1A"
//                     checked={seats[12].checkedIn}
//                     onChange={(e) => handleChange(e, 12)}
//                   />
//                   <br></br>
//                   <label for="1A">4A</label>
//                 </li>
//               </div>
//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1B"
//                     checked={seats[13].checkedIn}
//                     onChange={(e) => handleChange(e, 13)}
//                   />
//                   <br></br>
//                   <label for="1B">4B</label>
//                 </li>
//               </div>
//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1C"
//                     checked={seats[14].checkedIn}
//                     onChange={(e) => handleChange(e, 14)}
//                   />
//                   <br></br>
//                   <label for="1C">4C</label>
//                 </li>
//               </div>

//               <div className="box">
//                 {" "}
//                 <li class="seat">
//                   <input
//                     type="checkbox"
//                     id="1D"
//                     checked={seats[15].checkedIn}
//                     onChange={(e) => handleChange(e, 15)}
//                   />
//                   <br></br>
//                   <label for="1D">4D</label>
//                 </li>
//               </div>
//             </ol>
//           </li>
//         </ol>
//       </div>
//     </div>
//   )
// );
// }

export default Flight;
