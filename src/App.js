import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./assets/pages/Default";
import Main from "./assets/layouts/Main";

function App() {
  return (
    <>
    <Router>

      <Routes>
        <Route path="/" element={<Main><Default /></Main>} />
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
