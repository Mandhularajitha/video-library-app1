import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navigation/Navbar";
// import "./Login.css"
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
      console.log(data);
    } else {
      console.log("passwords are not same ");
    }
  };

  return (
    <>
      <div className="signup">
        {console.log(data)}
        <center>
          <div className="signup page">
            <Link to="/login">
              <h2>signup</h2>
            </Link>
          </div>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter UserName"
            />{" "}
            <br />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Email or phone number"
            />
            <br />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="password"
            />
            <br />
            <input
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
              onClick={(e) => {
                e.preventDefault();
                signupHandler(data.name, data.email, data.password);
              }}
              className="sub_button"
            >
              signup
            </button>
            <p>
              <Link to="/login">login</Link>
            </p>
          </form>
        </center>
      </div>
    </>
  );
};
export { Signup };
