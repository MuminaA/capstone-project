import React, { useState } from "react";
import "../Bookingform.css";

const Bookingform = ({
  availableTimes,
  selectedDate,
  onDateChange,
  submitForm,
}) => {
  const minimumDate = new Date().toISOString().split("T")[0];

  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    onDateChange(selectedDate);
    // console.log(selectedDate);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Gather the form data
    const formData = {
      date: selectedDate,
      time,
      guests,
      occasion,
    };

    // Call the submitForm function passed from the parent component
    submitForm(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="res-date">Date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          min={minimumDate}
          value={selectedDate}
          required={true}
          onChange={handleDateChange}
          aria-required="true"
        />
        <label htmlFor="res-time">Time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          required={true}
          aria-required="true"
        >
          {/* {console.log(availableTimes)} */}
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          min="1"
          max="10"
          placeholder="1"
          required={true}
          onChange={(e) => {
            setGuests(e.target.value);
          }}
          aria-required="true"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          required={true}
          onChange={(e) => setOccasion(e.target.value)}
          aria-required="true"
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your Reservation"
          aria-label="On Click"
          className="submit-btn"
        />
      </form>
    </div>
  );
};
export default Bookingform;
