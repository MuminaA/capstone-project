import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Bookingpage from "./pages/Bookingpage/Bookingpage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Confimedbooking } from "./pages/Confirmedbooking/Confirmedbooking";
import About from "./pages/About/About";
import OrderOnline from "./pages/OrderOnline/OrderOnline";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Bookingpage />} />
        <Route path='/confirmed' element={<Confimedbooking />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/order' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
