import React, { useReducer, useEffect, useState } from "react";
import Bookingform from "../../components/Booking/Bookingform/Bookingform";
import { fetchAPI, submitAPI } from "../../util/fakeAPI";
// import Confirmedbooking from "../Confirmedbooking/Confirmedbooking";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Bookingbanner from "../../components/Booking/Bookingbanner/Bookingbanner";

const Bookingpage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  const navigate = useNavigate();

  const updateTimes = async (date) => {
    try {
      const times = await fetchAPI(new Date(date)); // Pass the selected date to fetchAPI
      setAvailableTimes(times);
    } catch (err) {
      console.error("Error fetching available times:", err);
    }
  };

  // const initializeTimes = () => {
  //   const date = new Date();
  //   const today = date.toISOString().slice(0, 10); // Format date as "YYYY-MM-DD"

  //   updateTimes(today);
  // };

  useEffect(() => {
    if (selectedDate) {
      updateTimes(selectedDate);
    }
  }, [selectedDate]);

  const submitForm = async (formData) => {
    try {
      const isBookingConfirmed = await submitAPI(formData);
      if (isBookingConfirmed) {
        navigate("/booking-confirmed"); // Navigate to the booking confirmation page
        console.log('Booking confimed!')
      } else {
        console.error("Booking submission failed");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <>
      <Header/>
      <Bookingbanner/>
      <Bookingform
        availableTimes={availableTimes}
        onDateChange={(date) => setSelectedDate(date)}
        submitForm={submitForm} // Pass the submitForm function to the Bookingform component
      />
      <Footer />
    </>
  );
};
export default Bookingpage;
