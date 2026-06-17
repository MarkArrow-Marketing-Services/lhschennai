/* src/components/layout/Header.jsx */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import "../../styles/Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="logo">
        <Link to="/">
          <span>LONDON HARLEY STREET</span>
          <span className="logo-sub">Women & Fertility Centre</span>
        </Link>
      </div>

      <nav>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          
          <li className={`nav-item ${activeDropdown === 1 ? "open" : ""}`}>
            <Link to="/about" onClick={(e) => {
              if (window.innerWidth <= 1024) {
                e.preventDefault();
                toggleDropdown(1);
              }
            }}>
              About Us <ChevronDown size={16} />
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/about">About Centre</Link></li>
              <li><Link to="/about#doctors">Our Doctors</Link></li>
              <li><Link to="/about#journey">Our Journey</Link></li>
              <li><Link to="/about#why-choose-us">Why Choose Us</Link></li>
              <li><Link to="/locations">Locations</Link></li>
            </ul>
          </li>

          <li className={`nav-item ${activeDropdown === 2 ? "open" : ""}`}>
            <Link to="/services" onClick={(e) => {
              if (window.innerWidth <= 1024) {
                e.preventDefault();
                toggleDropdown(2);
              }
            }}>
              Services <ChevronDown size={16} />
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/services/womens-health-gynecology">Women's Health & Gynecology</Link></li>
              <li><Link to="/services/fertility-preconception-care">Fertility & IVF</Link></li>
              <li><Link to="/services/pregnancy-maternal-care">Pregnancy & Maternal Care</Link></li>
              <li><Link to="/services/diagnostics-testing">Diagnostics & Testing Services</Link></li>
              <li><Link to="/services/holistic-pregnancy-wellness">Wellness Programs</Link></li>
            </ul>
          </li>

          <li className={`nav-item ${activeDropdown === 3 ? "open" : ""}`}>
            <Link to="/insights" onClick={(e) => {
              if (window.innerWidth <= 1024) {
                e.preventDefault();
                toggleDropdown(3);
              }
            }}>
              Insights <ChevronDown size={16} />
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/insights?category=fertility">Fertility Education</Link></li>
              <li><Link to="/insights?category=pregnancy">Pregnancy Care</Link></li>
              <li><Link to="/insights?category=gynecology">Gynecology</Link></li>
              <li><Link to="/insights?category=diagnostics">Diagnostics & Testing</Link></li>
              <li><Link to="/insights?category=wellness">Women's Health & Wellness</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/locations">Locations</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          
          {mobileMenuOpen && (
            <li className="nav-item" style={{ marginTop: "2rem", width: "100%" }}>
              <Link to="/book-appointment" className="btn btn-primary" style={{ display: "block", textAlign: "center", padding: "0.8rem" }}>
                Book Appointment
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="header-actions">
        <Link to="/book-appointment" className="btn btn-appt btn-primary">
          Book Appointment
        </Link>
        
        <button className="menu-toggle" aria-label="Toggle Navigation Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
