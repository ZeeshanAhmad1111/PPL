import "./App.css";
import NavigationBar from "./Layouts/Header/NavigationBar";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Main";
import Footer from "./Layouts/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <NavigationBar />
      <Main />
      <Footer />
    </>
  );
};

export default App;
