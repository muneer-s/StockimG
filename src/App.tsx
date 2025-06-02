import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Screen/Home/HomePage";
import LoginPage from "./Screen/Login/LoginPage";
import RegisterPage from "./Screen/Register/RegisterPage";
import OtpPage from "./Screen/Otp/OtpPage";
import ImageAdd from "./Screen/ImageAdd/ImageAdd";
import ViewImages from "./Screen/ViewImages/ViewImages";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import UserProtecteRoute from "./Middleware/UserProtecteRoute";
import EditImage from "./Screen/EditImage/EditImage";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Provider store={store}>
        <Toaster />
        <Router >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/otp" element={<OtpPage />} />


            {/* protected Routes */}
            <Route path='/addImage' element={<UserProtecteRoute><ImageAdd /></UserProtecteRoute>} />
            <Route path='/viewImages' element={<UserProtecteRoute><ViewImages /></UserProtecteRoute>} />
            <Route path='/editImage' element={<UserProtecteRoute><EditImage /></UserProtecteRoute>} />
          </Routes>
        </Router>

      </Provider>

    </>

  );
}

export default App;
