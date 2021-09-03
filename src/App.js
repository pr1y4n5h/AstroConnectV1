import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Signup from "./Pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
