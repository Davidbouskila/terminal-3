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

function CarRental() {
  const navbarLinks = [
    { id: 1, url: "/Flights", text: "Flights" },
    { id: 2, url: "/car-rental", text: "Car Rental" },
    { id: 3, url: "/hotels", text: "Hotels" },
    { id: 4, url: "/attractions", text: "Attractions" },
  ];

  const currentUser = auth.currentUser;

  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [insurance, setInsurance] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // הוספת משתנה לשמירת URL של התמונה
  const db = getDatabase();
  const carsRef = ref(db, "cars");
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const onDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const carsArray = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setCars(carsArray);
      } else {
        console.log("No data available");
      }
    };

    onValue(carsRef, onDataChange);

    return () => {
      off(carsRef, onDataChange);
    };
  }, []);

  const createCar = () => {
    setShow(false); // סגירת ה-Popup קודם

    // רק בלחיצה על הכפתור "Save" נשמור את המידע
    const newCarRef = push(carsRef);
    const carData = { type, price, insurance };

    // הוספת גם את ה-URL של התמונה אם היא קיימת
    if (imageUrl) {
      carData.imageUrl = imageUrl;
    }

    set(newCarRef, carData);
    navigate("/car-rental");
  };

  const deleteCar = async (id) => {
    await remove(ref(db, "cars/" + id));
    navigate("/car-rental");
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  // UPLOAD IMAGE
  const handleImageChange = async (file) => {
    if (file) {
      const storage = getStorage();
      const pageName = "cars";
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
      <h2>Cars</h2>
      {currentUser && (
        <div className="button-container">
          <Button variant="primary" onClick={handleShow}>
            Add a new Car
          </Button>
        </div>
      )}

      <Popup
        show={show}
        handleClose={handleClose}
        onSaveClick={createCar}
        title="Add a new Car"
      >
        <label>Type:</label>
        <select
          id="type"
          name="type"
          onChange={(e) => setType(e.target.value)}
          value={type}
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
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <br />
        <label>Insurance:</label>
        <select
          id="insurance"
          name="insurance"
          onChange={(e) => setInsurance(e.target.value)}
          value={insurance}
        >
          <option value="including">Including</option>
          <option value="not including">Not Including</option>
        </select>
        <br />
        <label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e.target.files[0])}
        />
      </Popup>
      <div className="App">
        {cars.map((car) => (
          <Card
            key={car.id}
            title={`Type: ${car.type}`}
            content={`Price: ${car.price}, Insurance: ${car.insurance}`}
            onDeleteClick={() => deleteCar(car.id)}
            imageUrl={car.imageUrl}
          >
            {/* הצגת התמונה בכרטיס המתאים, רק אם קיים URL */}
            {car.imageUrl && (
              <>
                <img src={car.imageUrl} alt={`Car Type: ${car.type}`} />
                <p>Image URL: {car.imageUrl}</p>
              </>
            )}
          </Card>
        ))}
      </div>
    </>
  );
}

export default CarRental;
