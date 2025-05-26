import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Screen/Home/HomePage";
import LoginPage from "./Screen/Login/LoginPage";
import RegisterPage from "./Screen/Register/RegisterPage";
import OtpPage from "./Screen/Otp/OtpPage";
import ImageAdd from "./Screen/ImageAdd/ImageAdd";
import ViewImages from "./Screen/ViewImages/ViewImages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/addImage" element={<ImageAdd />} />
        <Route path="/viewImages" element={<ViewImages />} />
      </Routes>
    </Router>
  );
}

export default App;
