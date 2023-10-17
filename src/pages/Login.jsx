import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../Components/NavBar";
import "./Login.css";

function Login({ setIsAuth }) {
  const navbarLinks = [
    { id: 1, url: "/Flights", text: "Flights" },
    { id: 2, url: "/car-rental", text: "Car Rental" },
    { id: 3, url: "/hotels", text: "Hotels" },
    { id: 4, url: "/attractions", text: "Attractions" },
  ];

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <>
      <CustomNavbar title="TERMINAL 3" links={navbarLinks} />
      <div className="login-container">
        {" "}
        {/* נוצר div סביב התוכן */}
        <div className="login-content">
          {/* נוצר div לתוכן העמוד */}
          <h1>Welcome to Terminal 3</h1>

          <button className="google-login-button" onClick={signInWithGoogle}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google logo"
              width="20"
              height="20"
            />
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
