/* src/components/layout/Footer.jsx */
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>LONDON HARLEY STREET</h3>
            <span className="footer-logo-sub">Women & Fertility Centre</span>
            <p style={{ marginTop: "1rem" }}>
              London Harley Street Women, IVF & Fertility Centre is a trusted destination for complete women’s healthcare, providing the advanced fertility treatments with patient-centered care.
            </p>
            <div className="flex gap-2 align-center footer-contact-item">
              <Clock size={16} />
              <span><strong>Consultation Hours:</strong> Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Medical Services</Link></li>
              <li><Link to="/insights">Insights & Blogs</Link></li>
              <li><Link to="/locations">Our Locations</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/womens-health-gynecology">Gynecology</Link></li>
              <li><Link to="/services/fertility-preconception-care">Fertility & IVF</Link></li>
              <li><Link to="/services/pregnancy-maternal-care">Pregnancy Care</Link></li>
              <li><Link to="/services/diagnostics-testing">Scans & Diagnostics</Link></li>
              <li><Link to="/services/holistic-pregnancy-wellness">Wellness Programs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Branches</h4>
            <div className="footer-contact-item" style={{ marginBottom: "1.5rem" }}>
              <div className="flex gap-2 align-center" style={{ fontWeight: "600", color: "var(--secondary)", marginBottom: "0.25rem" }}>
                <MapPin size={16} />
                <span>Perungudi Branch (OMR)</span>
              </div>
              <p style={{ margin: 0, fontSize: "0.85rem" }}>
                Behind Apollo Hospital, Perungudi, OMR, Chennai, Tamil Nadu.
              </p>
            </div>
            
            <div className="footer-contact-item">
              <div className="flex gap-2 align-center" style={{ fontWeight: "600", color: "var(--secondary)", marginBottom: "0.25rem" }}>
                <MapPin size={16} />
                <span>Thalambur Branch</span>
              </div>
              <p style={{ margin: 0, fontSize: "0.85rem" }}>
                Thalambur, OMR, Chennai, Tamil Nadu (Established in 2025).
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} London Harley Street Women & Fertility Centre. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/contact" style={{ color: "var(--body-text)" }}>Book Appointment</Link>
            <Link to="/contact" style={{ color: "var(--body-text)" }}>Terms of Service</Link>
            <Link to="/contact" style={{ color: "var(--body-text)" }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
