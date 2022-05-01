import "./App.css";
import {Route,Routes} from "react-router-dom"
import { Navbar } from "./Components/Navigation/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { VideoCard } from "./Components/VideoCards/VideoCard";
import MockmanEs from "mockman-js";


function App() {
  return (
    <div className="App">
      
<Routes>
  <Route path="" element={<Navbar/>}/>
  {/* <Route path="/Sidebar" element={<Sidebar/>}/>  */}
  {/* <Route path="/videoCard" element={<VideoCard/>}/> */}
  <Route path="/mockman" element={<MockmanEs />}/>
</Routes>
      
    </div>
  );
}

export default App;
