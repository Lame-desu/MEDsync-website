import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home/Home";
import Department from "./pages/Department/Department";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import Patient from "./pages/Patient/Patient";

function App() {
  return (
    
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={<Layout> <Home /> </Layout>}/>
        <Route path="/department" element={<Layout> <Department /></Layout>}/>
        <Route path="/about" element={<Layout> <About /> </Layout>}/>
        <Route path="/contact" element={<Layout> <Contact /> </Layout>}/>

        {/* Routes without Navbar and Footer */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    
  );
}

export default App;
