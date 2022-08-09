import React, { useState,useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Authentication/LoginContext";
import { toast } from "react-toastify";
import "./Login.css"

const Login = () => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { loginHandler } = useAuth();


  useEffect(() => {
    if (isAuth && location.state !== null) {
        navigate(location.state.pathname)
    }
}, [isAuth]);

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
            <button 
                onClick={(e) => {
                  e.preventDefault();
                  loginHandler( "rajitha@gmail.com","rajitha@0987");
                  toast.success("Login Successfully");
                }}
                className="submit_bt"
              >
                login as guest
              </button>
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
