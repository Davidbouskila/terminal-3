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
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const HomePage = () => {
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
  const [tempHotel, setTempHotel] = useState("");
  const [tempCar, setTempCar] = useState("");
  const [tempPrice, setTempPrice] = useState("");
  const [tempImageUrl, setTempImageUrl] = useState("");

  const db = getDatabase();
  const dealsRef = ref(db, "deals");
  let navigate = useNavigate();

  const createDeals = async () => {
    const newDealsRef = push(dealsRef);
    const dealData = {
      city: tempCity,
      country: tempCountry,
      from: tempFrom,
      to: tempTo,
      hotel: tempHotel,
      car: tempCar,
      price: tempPrice,
    };

    if (tempImageUrl) {
      dealData.imageUrl = tempImageUrl;
    }

    await set(newDealsRef, dealData);
    navigate("/");
    setTempCity("");
    setTempCountry("");
    setTempFrom("");
    setTempTo("");
    setTempHotel("");
    setTempCar("");
    setTempPrice("");
    setTempImageUrl("");
    setShow(false);
  };

  const handleClose = () => {
    createDeals();
  };
  const handleShow = () => setShow(true);

  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const onDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const dealsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setDeals(dealsArray);
      } else {
        console.log("No data available");
      }
    };

    onValue(dealsRef, onDataChange);

    return () => {
      off(dealsRef, onDataChange);
    };
  }, []);

  const deleteDeal = async (id) => {
    await remove(ref(db, "deals/" + id));
    navigate("/");
  };

  const handleImageChange = async (file) => {
    if (file) {
      const storage = getStorage();
      const pageName = "deals";
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
      <CustomNavbar className="navbar" title="TERMINAL 3" links={navbarLinks} />
      <h2>Deals</h2>

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
        title="Add a new deal"
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
        <label>From:</label>
        <input
          type="date"
          id="from"
          onChange={(e) => setTempFrom(e.target.value)}
          value={tempFrom}
        />
        <br />
        <label>To:</label>
        <input
          type="date"
          id="to"
          onChange={(e) => setTempTo(e.target.value)}
          value={tempTo}
        />
        <br />
        <label>Hotel:</label>
        <select
          id="hotel"
          name="hotel"
          onChange={(e) => setTempHotel(e.target.value)}
          value={tempHotel}
        >
          <option value="">Select a hotel rating</option>
          <option value="1 Star">1 Star</option>
          <option value="2 Stars">2 Stars</option>
          <option value="3 Stars">3 Stars</option>
          <option value="4 Stars">4 Stars</option>
          <option value="5 Stars">5 Stars</option>
        </select>
        <br />
        <label>Car:</label>
        <select
          id="car"
          name="car"
          onChange={(e) => setTempCar(e.target.value)}
          value={tempCar}
        >
          <option value="">Select a car type</option>
          <option value="Economy">Economy</option>
          <option value="Midsize">Midsize</option>
          <option value="Luxury">Luxury</option>
          <option value="SUV">SUV</option>
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
        {deals.map((deal) => (
          <Card
            key={deal.id}
            title={`City: ${deal.city}, Country: ${deal.country}`}
            content={`From: ${deal.from}, To: ${deal.to}, Hotel: ${deal.hotel}, Car: ${deal.car}, Price: ${deal.price}`}
            onDeleteClick={() => deleteDeal(deal.id)}
            imageUrl={deal.imageUrl}
          >
            {deal.imageUrl && (
              <>
                <img src={deal.imageUrl} alt={`Deal in ${deal.city}`} />
                <p>Image URL: {deal.imageUrl}</p>
              </>
            )}
          </Card>
        ))}
      </div>
    </>
  );
};

export default HomePage;
