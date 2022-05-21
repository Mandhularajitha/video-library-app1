import "./App.css";
import { Route, Routes } from "react-router-dom";
import MockmanEs from "mockman-js";
import { Login } from "./Components";
import { Signup } from "./Components/LoginSignUp/SignUp";
import { VideoCard } from "./Components/VideoCards/VideoCard";
import { NavContainer } from "./Components/NavRoutes/NavContainer";
import { Liked } from "./Pages/Liked/Liked";
import { WatchLater } from "./Pages/WatchLater/WatchLater";
import { History } from "./Pages/History/History";
import { Modal } from "./Components/Modal/Modal";
import { Home } from "./Components/Home/Home";
import { Singleplaylist } from "./Pages/PlayList/SinglePlaylist";
import { CreatPlaylist } from "./Pages/PlayList/CreatPlaylist";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route element={<NavContainer />}>
          <Route path="/" element={<VideoCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          {/* <Route path="/Home" element={<Home/>}/> */}
          <Route path="/Liked" element={<Liked />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/SinglePlaylist" element={<Singleplaylist/>}/>
          <Route path="/CreatPlaylist" element={<CreatPlaylist/>} />
          <Route path="/WatchLater" element={<WatchLater />} />
          <Route path="/History" element={<History />} />
          <Route path="/mockman" element={<MockmanEs />} />
        </Route>
      </Routes>
    </div>  
  );
}

export default App;
