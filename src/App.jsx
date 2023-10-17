import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // השתמש בשורה זו

import HomePage from "./pages/HomePage";
import Flights from "./pages/Flights";
import CarRental from "./pages/CarRental";
import Attractions from "./pages/Attractions";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";
import OrderPage from "./pages/OrderPage";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/car-rental" element={<CarRental />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
