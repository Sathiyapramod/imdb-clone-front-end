import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import EditMovie from "./Components/Landing/EditMovie";
import Login from "./Components/Login/Login";
import Addmovie from "./Components/Landing/Addmovie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/movie/edit/:id" element={<EditMovie />} />
        <Route path="/add" element={<Addmovie />} />
      </Routes>
    </div>
  );
}

export default App;
