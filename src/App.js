import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeContentLeft from "./Components/HomeContentLeft";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Screens/LoginPage";
import ForgotPage from "./Screens/ForgotPage";
import SignUpPage from "./Screens/SignUpPage";
import ResetPage from "./Screens/ResetPage";
import HomePage from "./Screens/HomePage";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <div className="container">
        <div className="content">
          <Router>
            <div className="content_lft">
              <HomeContentLeft />
            </div>
            <div className="content_rgt">
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/forgot" element={<ForgotPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/reset" element={<ResetPage />} />
                <Route path="/feed" element={<HomePage />} />
              </Routes>
            </div>
          </Router>
        </div>
        <div className="clear"></div>
      </div>
      <Footer />
    </>
  );
};

export default App;
