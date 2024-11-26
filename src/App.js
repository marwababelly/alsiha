import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MainNav from "./component/Header/MainNav";
import LogInPage from "./pages/LogInPage/LogInPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainNav />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/logIn" element={<LogInPage />} />
      </Routes>
    </div>
  );
};

export default App;
