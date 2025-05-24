import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Screen/Home/HomePage";
import LoginPage from "./Screen/Login/LoginPage";
import RegisterPage from "./Screen/Register/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
