import "./App.css";
// import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Bookingpage from "./pages/Bookingpage/Bookingpage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Confimedbooking } from "./pages/Confirmedbooking/Confirmedbooking";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Bookingpage />} />
        <Route path='/booking-confirmed' element={<Confimedbooking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
