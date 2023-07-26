import React from "react";
import "./Confirmed.css";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

function Confirmed() {
  return (
    <>
    <div className="divider"></div>
      <div className="confirmed-container">
      <div className="confirm-img" alt="Confirmation checkmark">
        <CheckCircleRoundedIcon sx={{ fontSize: 50 }}/>
      </div>
        <h1 className="booking-conf">Your reservation has been confirmed.</h1>
        <p>You will recieve an email with all the details.</p>
      </div>
    </>
  );
}

export default Confirmed;
