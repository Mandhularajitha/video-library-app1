import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext} from "react";


const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const authInitialState = localStorage.getItem("AuthToken") ? true : false;

const AuthProvider = ({ children }) => {

  const [isAuth,setIsAuth] =  useState(authInitialState);
  
  const loginHandler = async (email, password) => {
    console.log(email,password,"222")
    try {
      const response = await axios.post(`/api/auth/login`, {
        "email":email,
        "password":password,
        
      });
      console.log(response,"cyjhiuikjkfdtykmo")
      

      localStorage.setItem("AuthToken",response.data.encodedToken)
      setIsAuth(true) 

    
    } catch (error) {
      console.log(error);
      
    }
  };

  const signupHandler = async (data) => {
    console.log(data)
    try {
        const response = await axios.post(`/api/auth/signup`, data);
      console.log(response.data)

    } catch (error) {
       
    }
};

  return (
    <AuthContext.Provider value={{loginHandler,signupHandler,isAuth,setIsAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };