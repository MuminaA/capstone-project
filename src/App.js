import "./App.css";
// import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Reservationpage from "./pages/Reservationpage/Reservationpage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<Reservationpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
