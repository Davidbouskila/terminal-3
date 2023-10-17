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
} from "firebase/database";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { auth } from "../firebase";

function Hotels() {
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
  const [tempName, setTempName] = useState("");
  const [tempPool, setTempPool] = useState("");
  const [tempWifi, setTempWifi] = useState("");
  const [tempBreakfast, setTempBreakfast] = useState("");
  const [tempPrice, setTempPrice] = useState("");
  const [tempImageUrl, setTempImageUrl] = useState("");

  const db = getDatabase();
  const hotelsRef = ref(db, "hotels");
  let navigate = useNavigate();

  const createHotel = async () => {
    const newHotelRef = push(hotelsRef);
    const hotelData = {
      city: tempCity,
      country: tempCountry,
      name: tempName,
      pool: tempPool,
      wifi: tempWifi,
      breakfast: tempBreakfast,
      price: tempPrice,
    };

    if (tempImageUrl) {
      hotelData.imageUrl = tempImageUrl;
    }

    await set(newHotelRef, hotelData);
    navigate("/hotels");
    setTempCity("");
    setTempCountry("");
    setTempName("");
    setTempPool("");
    setTempWifi("");
    setTempBreakfast("");
    setTempPrice("");
    setTempImageUrl("");
    setShow(false);
  };

  const handleClose = () => {
    createHotel();
  };
  const handleShow = () => setShow(true);

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const onDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const hotelsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setHotels(hotelsArray);
      } else {
        console.log("No data available");
      }
    };

    onValue(hotelsRef, onDataChange);

    return () => {
      off(hotelsRef, onDataChange);
    };
  }, []);

  const deleteHotel = async (id) => {
    await remove(ref(db, "hotels/" + id));
    navigate("/hotels");
  };

  const handleImageChange = async (file) => {
    if (file) {
      const storage = getStorage();
      const pageName = "hotels";
      const storageRef2 = storageRef(storage, `${pageName}/${file.name}`);
      try {
        await uploadBytes(storageRef2, file);

        const downloadURL = await getDownloadURL(storageRef2);
        setTempImageUrl(downloadURL);
        console.log("Image uploaded:", downloadURL);
      } catch (error) {
        console.error("Error uploading image:", error);
        setTempImageUrl("");
      }
    }
  };

  return (
    <>
      <CustomNavbar title="TERMINAL 3" links={navbarLinks} />
      <h2>Hotels</h2>
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
        title="Add a new Hotel"
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
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setTempName(e.target.value)}
          value={tempName}
        />
        <br />
        <label>Pool:</label>
        <select
          id="pool"
          name="pool"
          onChange={(e) => setTempPool(e.target.value)}
          value={tempPool}
        >
          <option value="">Select an option</option>
          <option value="Including">Including</option>
          <option value="Not Including">Not Including</option>
        </select>
        <br />
        <label>Free Wifi:</label>
        <select
          id="wifi"
          name="wifi"
          onChange={(e) => setTempWifi(e.target.value)}
          value={tempWifi}
        >
          <option value="">Select an option</option>
          <option value="Including">Including</option>
          <option value="Not Including">Not Including</option>
        </select>
        <br />
        <label>Breakfast:</label>
        <select
          id="breakfast"
          name="breakfast"
          onChange={(e) => setTempBreakfast(e.target.value)}
          value={tempBreakfast}
        >
          <option value="">Select an option</option>
          <option value="Including">Including</option>
          <option value="Not Including">Not Including</option>
        </select>
        <br />
        <label>Price:</label>
        <input
          type="number"
          id="price"
          onChange={(e) => setTempPrice(e.target.value)}
          value={tempPrice}
        />
        <br />
        <label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e.target.files[0])}
        />
      </Popup>

      <div className="App">
        {hotels.map((hotel) => (
          <Card
            key={hotel.id}
            title={`Name: ${hotel.name}`}
            content={`City: ${hotel.city}, Country: ${hotel.country}, Pool: ${hotel.pool}, Wifi: ${hotel.wifi}, Breakfast: ${hotel.breakfast}, Price: ${hotel.price}`}
            onDeleteClick={() => deleteHotel(hotel.id)}
            imageUrl={hotel.imageUrl}
          >
            {hotel.imageUrl && (
              <>
                <img src={hotel.imageUrl} alt={`Hotel in ${hotel.city}`} />
                <p>Image URL: {hotel.imageUrl}</p>
              </>
            )}
          </Card>
        ))}
      </div>
    </>
  );
}

export default Hotels;
