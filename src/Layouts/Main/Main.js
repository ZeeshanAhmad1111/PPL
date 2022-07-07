import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "../../Components/Feed";
import Welcome from "../../Components/Welcome";
import Login from "../../Pages/Login";
import Forgot from "../../Pages/Forgot";
import SignUp from "../../Pages/SignUp";
import Reset from "../../Pages/Reset";
import HomeContentRight from "../../Pages/HomeContentRight";
import Error404 from "../../Pages/Error404";
import { CustomRoute } from "../../Routes/navigation";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="container">
        <div className="content">
          <Router>
            <Routes>
              <Route
                path="*"
                element={<CustomRoute commonRoute={<Error404 />} />}
              />
            </Routes>
            <div className="content_lft">
              <Routes>
                <Route
                  path="/"
                  element={<CustomRoute commonRoute={<Welcome />} />}
                />
                <Route
                  path="/signup"
                  element={<CustomRoute commonRoute={<Welcome />} />}
                />
                <Route
                  path="/forgot"
                  element={<CustomRoute commonRoute={<Welcome />} />}
                />
                <Route
                  path="/reset/:token"
                  element={<CustomRoute commonRoute={<Welcome />} />}
                />
                <Route
                  path="/feed"
                  element={
                    <CustomRoute
                      isLoggedIn={isLogin}
                      publicRoute={<Welcome />}
                      privateRoute={<Feed posts={posts} setPosts={setPosts} />}
                    />
                  }
                />
              </Routes>
            </div>
            <div className="content_rgt">
              <Routes>
                <Route
                  path="/"
                  element={
                    <CustomRoute
                      isLoggedIn={isLogin}
                      publicRoute={<Login />}
                      privateRoute={<HomeContentRight />}
                    />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <CustomRoute
                      isLoggedIn={isLogin}
                      publicRoute={<SignUp />}
                      privateRoute={<HomeContentRight />}
                    />
                  }
                />
                <Route
                  path="/forgot"
                  element={
                    <CustomRoute
                      isLoggedIn={isLogin}
                      publicRoute={<Forgot />}
                      privateRoute={<HomeContentRight />}
                    />
                  }
                />
                <Route
                  path="/reset/:token"
                  element={
                    <CustomRoute
                      isLoggedIn={isLogin}
                      publicRoute={<Reset />}
                      privateRoute={<HomeContentRight />}
                    />
                  }
                />
                <Route
                  path="/feed"
                  element={
                    <CustomRoute
                      isLoggedIn={isLogin}
                      publicRoute={<Login />}
                      privateRoute={<HomeContentRight />}
                    />
                  }
                />
              </Routes>
            </div>
          </Router>
        </div>
        <div className="clear"></div>
      </div>
    </>
  );
};

export default Main;
