/* src/components/layout/Header.jsx */
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import "../../styles/Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setActiveDropdown(null);
    }
  }, [mobileMenuOpen]);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const navigate = useNavigate();

  const handleAboutCentre = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    // Programmatic navigation to ensure route change even if already on /about with hash
    navigate("/about");
    // Scroll to top after navigation
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="logo">
        <Link to="/" className="logo-link">
          <img
            src="/site-logo.png"
            alt="London Harley Street logo"
            className="logo-mark"
          />
          <div className="logo-text">
            <div className="logo-title">LONDON HARLEY STREET WOMEN</div>
            <div className="logo-subtitle">IVF AND FERTILITY CENTRE</div>
            <div className="logo-location">@ OMR - Chennai</div>
            <div className="logo-branches">PERUNGUDI - THAZAMBUR</div>
          </div>
        </Link>
      </div>

      <nav>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>

          <li className={`nav-item ${activeDropdown === 1 ? "open" : ""}`}>
            <Link
              to="/about"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  toggleDropdown(1);
                }
              }}
            >
              About Us <ChevronDown size={16} />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <a href="/about" onClick={handleAboutCentre}>
                  About Centre
                </a>
              </li>
              <li>
                <Link to="/about#doctors">Our Doctors</Link>
              </li>
              <li>
                <Link to="/about#journey">Our Journey</Link>
              </li>
              <li>
                <Link to="/about#why-choose-us">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
            </ul>
          </li>

          <li className={`nav-item ${activeDropdown === 2 ? "open" : ""}`}>
            <Link
              to="/services"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  toggleDropdown(2);
                }
              }}
            >
              Services <ChevronDown size={16} />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/womens-health-gynecology">
                  Women's Health & Gynecology
                </Link>
              </li>
              <li>
                <Link to="/services/fertility-preconception-care">
                  Fertility & IVF
                </Link>
              </li>
              <li>
                <Link to="/services/pregnancy-maternal-care">
                  Pregnancy & Maternal Care
                </Link>
              </li>
              <li>
                <Link to="/services/diagnostics-testing">
                  Diagnostics & Testing Services
                </Link>
              </li>
              <li>
                <Link to="/services/holistic-pregnancy-wellness">
                  Wellness Programs
                </Link>
              </li>
            </ul>
          </li>

          <li className={`nav-item ${activeDropdown === 3 ? "open" : ""}`}>
            <Link
              to="/insights"
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  toggleDropdown(3);
                }
              }}
            >
              Insights <ChevronDown size={16} />
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/insights?category=fertility">
                  Fertility Education
                </Link>
              </li>
              <li>
                <Link to="/insights?category=pregnancy">Pregnancy Care</Link>
              </li>
              <li>
                <Link to="/insights?category=gynecology">Gynecology</Link>
              </li>
              <li>
                <Link to="/insights?category=diagnostics">
                  Diagnostics & Testing
                </Link>
              </li>
              <li>
                <Link to="/insights?category=wellness">
                  Women's Health & Wellness
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/locations">Locations</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>

          {mobileMenuOpen && isMobile && (
            <li className="nav-item mobile-cta">
              <Link
                to="/book-appointment"
                className="btn btn-primary mobile-book"
              >
                Book Appointment
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="header-actions">
        {(!isMobile || !mobileMenuOpen) && (
          <Link to="/book-appointment" className="btn btn-appt btn-primary">
            Book Appointment
          </Link>
        )}

        <button
          className="menu-toggle"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
