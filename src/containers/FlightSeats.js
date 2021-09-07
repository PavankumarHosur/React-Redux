import React from "react";
import "../CSS/Style.css";

function FlightSeats() {
  const a = 10;
  const handle = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "black";
  };
  return (
    <div class="theatre">
      <div class="cinema-seats left">
        <div class="cinema-row row-1">
          <div class="seat" onClick={(e) => handle(e)}></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>

        <div class="cinema-row row-2">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>
      </div>

      <div class="cinema-seats right">
        <div class="cinema-row row-1">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>

        <div class="cinema-row row-2">
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
          <div class="seat"></div>
        </div>
      </div>
    </div>
  );
}

export default FlightSeats;
