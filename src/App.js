import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login, Navbar, Sidebar } from "./Components";
import { Signup } from "./Components/LoginSignUp/SignUp";
import { VideoCard } from "./Components/VideoCards/VideoCard";
import { Liked } from "./Pages/Liked/Liked";
import { WatchLater } from "./Pages/WatchLater/WatchLater";
import { History } from "./Pages/History/History";
import { Modal } from "./Components/Modal/Modal";
import { Home } from "./Components/Home/Home";
import { PlaylistVideoCard } from "./Pages/PlayList/SingleCardPlaylist"
import { CreatPlaylist } from "./Pages/PlayList/CreatPlaylist";
import { SingleVideo } from "./Pages/single-video/single-video";
import { RequireAuth } from "./reuireAuth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="routes">
        <Sidebar />
        <div className="route-body">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/videoCard" element={<VideoCard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Liked" element={<RequireAuth><Liked /></RequireAuth>} />
            <Route path="/Modal" element={<Modal />} />
            <Route path="/playlistVideoCard/:playlistId" element={<PlaylistVideoCard />} />
            <Route path="/CreatPlaylist" element={<RequireAuth><CreatPlaylist /></RequireAuth>} />
            <Route path="/SingleVideo/:videoId" element={<SingleVideo />} />
            <Route path="/WatchLater" element={<RequireAuth><WatchLater /></RequireAuth>} />
            <Route path="/History" element={<RequireAuth><History /></RequireAuth>} />
          
          </Routes>

          <ToastContainer className="toast" />
        </div>
      </div>
    </div>
  );
}

export default App;
