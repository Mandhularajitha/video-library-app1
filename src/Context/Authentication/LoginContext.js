import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";


const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const authInitialState = localStorage.getItem("AuthToken") || null;

const AuthProvider = ({ children }) => {

  const [isAuth,setIsAuth] =  useState(authInitialState);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/videoCard";
  
  const loginHandler = async (email, password) => {
     console.log(email,password);
    try {
      const response = await axios.post(`/api/auth/login`, {
        "email":email,
        "password":password,
        
      });
     
      
      localStorage.setItem("user",JSON.stringify(response.data.foundUser))
      localStorage.setItem("AuthToken",response.data.encodedToken)
      setIsAuth({
        user:response.data.foundUser,
        token:response.data.encodedToken
      })
      console.log(response.data.foundUser);
      navigate(from, { replace: true }); 

    
    } catch (error) {
      console.log(error);
      
    }
  };

  const signupHandler = async (data) => {
    try {
        const response = await axios.post(`/api/auth/signup`, data);

        toast.success("successfully created account");
        localStorage.setItem("user",JSON.stringify(response.data.createdUser))
        localStorage.setItem("AuthToken",response.data.encodedToken)
        setIsAuth({
          user:response.data.createdUser,
          token:response.data.encodedToken
        })
        navigate(from,{replace:true   })

    } 
    catch (error) {
       
    }
};

const logoutHandler = () =>{
  localStorage.removeItem( "AuthToken")
  localStorage.removeItem("users")
  setIsAuth(false)
  navigate("/login");

} 
  return (
    <AuthContext.Provider value={{loginHandler,signupHandler,isAuth,setIsAuth ,logoutHandler}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };