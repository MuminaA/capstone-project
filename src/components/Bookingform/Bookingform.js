import React, { useState } from "react";
import "./Bookingform.css";
import { useNavigate } from "react-router-dom";

const Bookingform = ({
  availableTimes,
  updateTimes,
  selectedDate,
  onDateChange,
  submitForm,
}) => {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    onDateChange(selectedDate);
    console.log("Avaliable times");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Gather the form data
    const formData = {
      date: selectedDate,
      time: time,
      guests: e.target.guests.value,
      occasion: e.target.occasion.value,
    };
    // Call the submitForm function passed from the parent component
    submitForm(formData);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {/* {console.log(availableTimes)} */}
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};
export default Bookingform;
