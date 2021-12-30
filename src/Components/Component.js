import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContentLeft from "./HomeContentLeft";
import HomeContentRight from "./HomeContentRight";
import Login from "./Login";
import Welcome from "./Welcome";
import Forgot from "./Forgot";
import SignUp from "./SignUp";
import Reset from "./Reset";
import Mail from "./Mail";

export default function Component() {
  return (
    <div className="container">
      <div className="content">
        <Router>
          <div className="content_lft">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/forgot" element={<Welcome />} />
              <Route path="/signup" element={<Welcome />} />
              <Route path="/reset" element={<Welcome />} />
              <Route path="/feed" element={<HomeContentLeft />} />
              <Route path="/mail" element={<Welcome />} />
            </Routes>
          </div>
          <div className="content_rgt">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/feed" element={<HomeContentRight />} />
              <Route path="/mail" element={<Forgot />} />
            </Routes>
          </div>
          <Routes>
            <Route path="/mail" element={<Mail />} />
          </Routes> 
        </Router>
      </div>
      <div className="clear"></div>
    </div>
  );
}
