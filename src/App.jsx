import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfilesPage from "./pages/ProfilePage";
import { ErrorPage } from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import AddUser from "./pages/AddUse";

function App() {
  return (
    <Router>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
