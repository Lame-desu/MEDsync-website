import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Department from "./pages/Department/Department";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <>
  
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/department" element={<Department />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
    </>
  );
}

export default App;
