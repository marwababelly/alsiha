import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MainNav from "./component/Header/MainNav";
import LogInPage from "./pages/LogInPage/LogInPage";
import Footer from "./component/Footer/Footer";
import Articles from "./pages/Articles/Articles";
import ConsultADoctor from "./pages/ConsultADoctor/ConsultADoctor";
import TestYourself from "./pages/TestYourself/TestYourself";
import Health from "./pages/Articles/Health";
import Sport from "./pages/Articles/Sport";
import Food from "./pages/Articles/Food";
import AlternativeMedicine from "./pages/Articles/AlternativeMedicine";
import HealthArticles from "./pages/Articles/HealthArticles";
import FoodArticles from "./pages/Articles/FoodArticles";
import SportArticles from "./pages/Articles/SportArticles";
import AlternativeMedicineArticles from "./pages/Articles/AlternativeMedicineArticles";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainNav />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/ConsultADoctor" element={<ConsultADoctor />} />
        <Route path="/TestYourself" element={<TestYourself />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Alternative-medicine" element={<AlternativeMedicine />} />
        <Route path="/Sport" element={<Sport />} />
        <Route path="/Health/:healthLink" element={<HealthArticles />} />
        <Route path="/Food/:foodLink" element={<FoodArticles />} />
        <Route path="/Sport/:sportLink" element={<SportArticles />} />
        <Route
          path="/Alternative-medicine/:alternativeLink"
          element={<AlternativeMedicineArticles />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
