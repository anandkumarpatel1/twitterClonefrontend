import React from "react";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import { UserProvider } from "./context/context";
import { ToastContainer } from 'react-toastify';
import Image from "./pages/Image";
const App = () => {
  return (
    <>
    <ToastContainer position="top-center"/>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/img" element={<Image />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
