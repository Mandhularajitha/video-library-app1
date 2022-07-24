import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navigation/Navbar";
import "./Login.css";
import { useAuth } from "../../Context/Authentication/LoginContext";

const Signup = () => {
  const { signupHandler } = useAuth();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      signupHandler(data);
    } else {
      console.log("passwords are not same ");
    }
  };

  return (
    <>
      <div className="signup">
        {console.log(data)}
        <center className="signupcontainer">
          <div className="signup_page">
            <Link to="/login">
              <h2>signup</h2>
            </Link>
          </div>
          <form onSubmit={submitHandler}>
            <input
              className="inputbuttons"
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter name"
            />{" "}
            <br />
            <input
              className="inputbuttons"
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Email mail"
            />
            <br />
            <input
              className="inputbuttons"
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="password"
            />
            <br />
            <input
              className="inputbuttons"
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
              placeholder="Confirm password"
            />{" "}
            <br />
            <button
              type="submit"
              className="sub_button"
            >
              signup
            </button>
            <div>
              <button className="loginbutton">
                <Link to="/login">login</Link>
              </button>
            </div>
          </form>
        </center>
      </div>
    </>
  );
};
export { Signup };
