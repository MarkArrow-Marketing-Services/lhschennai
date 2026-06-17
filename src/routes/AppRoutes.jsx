/* src/routes/AppRoutes.jsx */
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Insights from "../pages/Insights";
import Locations from "../pages/Locations";
import Contact from "../pages/Contact";
import BookAppointment from "../pages/BookAppointment";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/insights/:slug" element={<Insights />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      {/* Fallback to Home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
