import React, { useEffect } from "react";
import Login from "./pages/Login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import { UserProvider } from "./context/context";
import { ToastContainer } from "react-toastify";
import User from "./pages/User/User";

const App = () => {

  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route
              path="/login"
              element={document.cookie ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/"
              element={!document.cookie ? <Navigate to="/login" /> : <Home />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
