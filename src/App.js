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
        <Route path="capstone-project/" element={<Homepage />} />
        <Route path="capstone-project/booking" element={<Bookingpage />} />
        <Route path='capstone-project/confirmed' element={<Confimedbooking />} />
        <Route path='capstone-project/about' element={<About />} />
        <Route path='capstone-project/menu' element={<Menu />} />
        <Route path='capstone-project/order' element={<OrderOnline />} />
        <Route path='capstone-project/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
