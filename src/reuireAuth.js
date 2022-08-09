import { useLocation,Navigate } from "react-router-dom";
import { useAuth } from "../src/Context/Authentication/LoginContext";


export const RequireAuth = ({ children })=>{

    const { isAuth  } = useAuth();
    console.log(isAuth ,"isAuth ")
    const location = useLocation();

    return isAuth ? children : <Navigate to="/login" state={{pathname: location.pathname }} replace/>

}