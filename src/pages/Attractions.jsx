// Attractions.js

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import CustomNavbar from "../Components/NavBar";
import Card from "../Components/Card";
import Popup from "../Components/Popup";
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
import { auth } from "../firebase";

function Attractions() {
  const navbarLinks = [
    { id: 1, url: "/Flights", text: "Flights" },
    { id: 2, url: "/car-rental", text: "Car Rental" },
    { id: 3, url: "/hotels", text: "Hotels" },
    { id: 4, url: "/attractions", text: "Attractions" },
  ];

  const currentUser = auth.currentUser;

  const [show, setShow] = useState(false);

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // הוספת משתנה לשמירת URL של התמונה

  const db = getDatabase(); // קבלת אובייקט של Realtime Database
  const attractionsRef = ref(db, "attractions"); // קביעת הראפרנס לנתונים ב-Realtime Database
  let navigate = useNavigate();

  const handleSaveClick = () => {
    createAttraction();
    setShow(false);
  };

  // CREATE
  const createAttraction = async () => {
    const newAttractionRef = push(attractionsRef); // יצירת רשומה חדשה
    const attractionData = { city, country, name, description };

    // הוספת גם את ה-URL של התמונה אם היא קיימת
    if (imageUrl) {
      attractionData.imageUrl = imageUrl;
    }

    await set(newAttractionRef, attractionData);
    navigate("/attractions");
    setCity("");
    setCountry("");
    setName("");
    setDescription("");
    setImageUrl(""); // אפס את ה-URL של התמונה לאחר העלאתה
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [attractions, setAttractions] = useState([]);

  // GET
  useEffect(() => {
    const onDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const attractionsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setAttractions(attractionsArray);
      } else {
        console.log("No data available");
      }
    };

    onValue(attractionsRef, onDataChange);

    return () => {
      off(attractionsRef, onDataChange);
    };
  }, []);

  // DELETE
  const deleteAttraction = async (id) => {
    await remove(ref(db, "attractions/" + id));
    navigate("/attractions");
  };

  // UPLOAD IMAGE
  const handleImageChange = async (file) => {
    if (file) {
      const storage = getStorage();
      const pageName = "attractions";
      const storageRef2 = storageRef(storage, `${pageName}/${file.name}`);
      try {
        await uploadBytes(storageRef2, file);

        const downloadURL = await getDownloadURL(storageRef2);
        setImageUrl(downloadURL); // שמירת ה-URL של התמונה במשתנה imageUrl
        console.log("Image uploaded:", downloadURL); // הוספנו את השורה הזו לבדוק את ה-URL שנשמר
      } catch (error) {
        console.error("Error uploading image:", error);
        setImageUrl(""); // איפוס ה-URL של התמונה במצב של כשלון
      }
    }
  };

  return (
    <>
      <CustomNavbar title="TERMINAL 3" links={navbarLinks} />
      <h2>Attractions</h2>
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
        handleClose={handleClose}
        onSaveClick={handleSaveClick}
        title="Add a new Attraction"
      >
        <label>City:</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <br />
        <label>Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <br />
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
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
        {attractions.map((attraction) => (
          <Card
            key={attraction.id}
            title={`Name: ${attraction.name}`}
            content={`City: ${attraction.city},  Country: ${attraction.country}, Description: ${attraction.description}`}
            onDeleteClick={() => deleteAttraction(attraction.id)}
            imageUrl={attraction.imageUrl}
          >
            {/* הצגת התמונה בכרטיס המתאים, רק אם קיים URL */}
            {attraction.imageUrl && (
              <>
                <img
                  src={attraction.imageUrl}
                  alt={`Attraction: ${attraction.name}`}
                />
                <p>Image URL: {attraction.imageUrl}</p>
              </>
            )}
          </Card>
        ))}
      </div>
    </>
  );
}

export default Attractions;
