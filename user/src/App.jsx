import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Department from "./pages/Department/Department";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import AuthPage from "./pages/Auth/Auth";

function App() {
  return (
    <>
  <h1>HELLO</h1>
      <Navbar />
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/department" element={<Department />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
    
    </>
  );
}

export default App;
