import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
