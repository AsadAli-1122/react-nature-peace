import "./assets/css/App.css";
import "./assets/css/fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./assets/pages/Default";
import Main from "./assets/layouts/Main";
import Login from "./assets/pages/auth/Login";
import Register from "./assets/pages/auth/Register";
import ForgotPassword from "./assets/pages/auth/ForgotPassword";
import Shop from "./assets/pages/PlantDrop";
import PlantDrop from "./assets/pages/PlantDrop";

function App() {
  return (
    <>
    <Router>

      <Routes>
        <Route path="/" element={<Main><Default /></Main>} />
        <Route path="/plant-drop" element={<Main><PlantDrop /></Main>} />
        <Route path="/shop" element={<Main><Shop /></Main>} />
        <Route path="/login" element={<Main><Login /></Main>} />
        <Route path="/register" element={<Main><Register /></Main>} />
        <Route path="/forgot-password" element={<Main><ForgotPassword /></Main>} />
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
