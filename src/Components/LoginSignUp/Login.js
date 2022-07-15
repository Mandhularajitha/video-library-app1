import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Authentication/LoginContext";

import "./Login.css"

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { loginHandler } = useAuth();

  return (
    <>
      <div className="login_handler">
        <div className="seconddiv">
          <center>
            <div className="h1">
              <Link to="login">
                <h2 className="login_page">login page</h2>
              </Link>
            </div>
            <form>
              <input 
                className="inputbuttons"
                type="text"
                name="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="email"
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

              <button className="login_button"
                onClick={(e) => {
                  e.preventDefault();
                  loginHandler(data.email, data.password);
                }}
                type="submit"
              >
                Login
              </button>
            </form>
            <div><br />  
            <button className="passwordbutn">
              <a href="a">Forget password ?</a>or
              <Link to="/Signup">Signup</Link>
            </button>
            </div> 
          </center>
        </div>
      </div>
    </>
  );
};

export { Login };
