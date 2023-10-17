import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import CustomNavbar from "../Components/NavBar";
import "./PageDesign.css";

import {
  getDatabase,
  ref,
  push,
  remove,
  set,
  onValue,
  off,
} from "firebase/database"; // שימוש ב-realtime database
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage"; // שימוש ב-Firebase Storage
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card"; // הייבוא של הקומפוננטה הכללית Card
import Popup from "../Components/Popup";
import { auth } from "../firebase";

function Flights() {
  const navbarLinks = [
    { id: 1, url: "/Flights", text: "Flights" },
    { id: 2, url: "/car-rental", text: "Car Rental" },
    { id: 3, url: "/hotels", text: "Hotels" },
    { id: 4, url: "/attractions", text: "Attractions" },
  ];

  const currentUser = auth.currentUser;

  const [show, setShow] = useState(false);

  // הוספת משתנים מקומיים לשמירת הנתונים ב-Popup
  const [tempCity, setTempCity] = useState("");
  const [tempCountry, setTempCountry] = useState("");
  const [tempFrom, setTempFrom] = useState("");
  const [tempTo, setTempTo] = useState("");
  const [tempImageUrl, setTempImageUrl] = useState("");

  const db = getDatabase(); // קבלת אובייקט של Realtime Database
  const flightsRef = ref(db, "flights"); // קביעת הראפרנס לנתונים ב-Realtime Database
  let navigate = useNavigate();

  // CREATE
  const createFlight = async () => {
    const newFlightRef = push(flightsRef); // יצירת רשומה חדשה
    const flightData = {
      city: tempCity,
      country: tempCountry,
      from: tempFrom,
      to: tempTo,
    };

    // הוספת גם את ה-URL של התמונה אם היא קיימת
    if (tempImageUrl) {
      flightData.imageUrl = tempImageUrl;
    }

    await set(newFlightRef, flightData);
    navigate("/flights");
    setTempCity("");
    setTempCountry("");
    setTempFrom("");
    setTempTo("");
    setTempImageUrl(""); // אפס את ה-URL של התמונה לאחר העלאתה
    setShow(false);
  };

  const handleClose = () => {
    createFlight();
  };
  const handleShow = () => setShow(true);

  const [flights, setFlights] = useState([]);

  // GET
  useEffect(() => {
    const onDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const flightsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setFlights(flightsArray);
      } else {
        console.log("No data available");
      }
    };

    onValue(flightsRef, onDataChange);

    return () => {
      off(flightsRef, onDataChange);
    };
  }, []);

  // DELETE
  const deleteFlight = async (id) => {
    await remove(ref(db, "flights/" + id));
    navigate("/flights");
  };

  // UPLOAD IMAGE
  const handleImageChange = async (file) => {
    if (file) {
      const storage = getStorage();
      const pageName = "flights";
      const storageRef2 = storageRef(storage, `${pageName}/${file.name}`);
      try {
        await uploadBytes(storageRef2, file);

        const downloadURL = await getDownloadURL(storageRef2);
        setTempImageUrl(downloadURL); // שמירת ה-URL של התמונה במשתנה imageUrl
        console.log("Image uploaded:", downloadURL); // הוספנו את השורה הזו לבדוק את ה-URL שנשמר
      } catch (error) {
        console.error("Error uploading image:", error);
        setTempImageUrl(""); // איפוס ה-URL של התמונה במצב של כשלון
      }
    }
  };

  return (
    <>
      <CustomNavbar title="TERMINAL 3" links={navbarLinks} />
      <h2>Flights</h2>
      {currentUser &&
        (currentUser.email === "dib552884@gmail.com" ||
          currentUser.email === "david552884@gmail.com" ||
          currentUser.email === "sagiv.ort@gmail.com") && (
          <div className="button-container">
            <Button variant="primary" onClick={handleShow}>
              Add a new Attraction
            </Button>
          </div>
        )}

      <Popup
        show={show}
        handleClose={() => setShow(false)}
        onSaveClick={handleClose}
        title="Add a new Flight"
      >
        <label>City:</label>
        <input
          type="text"
          id="city"
          onChange={(e) => setTempCity(e.target.value)}
          value={tempCity}
        />
        <br />
        <label>Country:</label>
        <input
          type="text"
          id="country"
          onChange={(e) => setTempCountry(e.target.value)}
          value={tempCountry}
        />
        <br />
        <label>from:</label>
        <input
          type="date"
          onChange={(e) => setTempFrom(e.target.value)}
          value={tempFrom}
        />
        <br />
        <label>To:</label>
        <input
          type="date"
          onChange={(e) => setTempTo(e.target.value)}
          value={tempTo}
        />

        {/* הוספת שדה להעלאת תמונה */}
        <br />
        <label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e.target.files[0])}
        />
      </Popup>

      <div className="App">
        {flights.map((flight) => (
          <Card
            key={flight.id}
            title={`Country: ${flight.country}`}
            content={`City: ${flight.city}, From: ${flight.from}, to: ${flight.to} `}
            onDeleteClick={() => deleteFlight(flight.id)}
            imageUrl={flight.imageUrl}
          >
            {/* הצגת התמונה בכרטיס המתאים, רק אם קיים URL */}
            {flight.imageUrl && (
              <>
                <img src={flight.imageUrl} alt={`Flight to ${flight.to}`} />
                <p>Image URL: {flight.imageUrl}</p>
              </>
            )}
          </Card>
        ))}
      </div>
    </>
  );
}

export default Flights;
