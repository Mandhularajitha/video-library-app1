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
    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
        
      });
      console.log(response,"cyjhiuikjkfdtykmo")

      localStorage.setItem("AuthToken",response.data.encodedToken)
      setIsAuth(true) 

    
    } catch (error) {
      console.log(error);
      
    }
  };

  const signupHandler = async ({firstName,email,password}) => {
    try {
        const response = await axios.post(`/api/auth/signup`, {
        
            'firstName': firstName,
            'email': email,
            'password': password
        });
      console.log(response,"raji")

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