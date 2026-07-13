/* src/pages/Home.jsx */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Heart,
  CheckCircle2,
  ChevronRight,
  MapPin,
} from "lucide-react";
import {
  homeContent,
  doctorsData,
  clinicAboutData,
  serviceCategories,
  journeyTimeline,
  testimonialData,
  locationData,
  detailedServices,
} from "../data/contentData";
import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";
import DoctorCard from "../components/common/DoctorCard";
import ServiceCard from "../components/common/ServiceCard";
import BlogCard from "../components/common/BlogCard";
import CTASection from "../components/common/CTASection";
import heroImg from "../assets/images/hero_fertility.png";
import "../styles/Home.css";

export default function Home() {
  useEffect(() => {
    // Setup Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));

    // Page title and meta SEO
    document.title = homeContent.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", homeContent.metaDescription);
    }

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Defensive copies to avoid runtime crashes when content data is missing
  const stats = homeContent?.stats ?? [];
  const introduction = homeContent?.introduction ?? [];
  const clinicParagraphs = clinicAboutData?.paragraphs ?? [];
  const serviceCats = Array.isArray(serviceCategories) ? serviceCategories : [];
  const detailedServicesSafe = Array.isArray(detailedServices)
    ? detailedServices
    : [];
  const doctors = Array.isArray(doctorsData) ? doctorsData : [];
  const testimonials = Array.isArray(testimonialData) ? testimonialData : [];
  const locations = Array.isArray(locationData) ? locationData : [];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text-col">
              <span className="hero-subtitle">
                LONDON HARLEY STREET STANDARDS IN CHENNAI
              </span>
              <h1 className="hero-title">{homeContent.h1}</h1>
              <p className="hero-desc">{homeContent.description}</p>
              <div className="hero-buttons">
                <Button to="/book-appointment" variant="primary">
                  Book Appointment
                </Button>
                <Button to="/services" variant="outline">
                  Our Services
                </Button>
              </div>
            </div>

            <div className="hero-image-col">
              <div className="hero-blob"></div>

              <div className="hero-card">
                <div className="hero-badge-grid">
                  <div className="hero-badge-item">
                    <ShieldCheck size={36} color="var(--primary)" />
                    <div>
                      <h4 className="hero-badge-title">Ethical Practice</h4>
                      <p className="hero-badge-desc">Transparent Care</p>
                    </div>
                  </div>
                  <div className="hero-badge-item">
                    <Heart size={36} color="var(--secondary)" />
                    <div>
                      <h4 className="hero-badge-title">Holistic Support</h4>
                      <p className="hero-badge-desc">Clinical & Emotional</p>
                    </div>
                  </div>
                </div>

                <hr className="hero-divider" />

                <p className="hero-quote">
                  <span className="hero-quote-mark">“</span>
                  Every journey to motherhood is unique—we’re with you at every
                  step.
                </p>
              </div>

              {/* High-Resolution Hero Visual Asset */}
              <div className="hero-img-wrapper">
                <img
                  src={heroImg}
                  alt="London Harley Street Women & Fertility Centre - Mother and Child"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section
        className="stats-section section"
        style={{
          borderTop: "1px solid var(--border-light)",
          background: "var(--white)",
        }}
      >
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stats-card reveal reveal-delay-1">
                <div className="stats-number">{stat.value}</div>
                <h4 className="stats-label">{stat.label}</h4>
                <p className="stats-desc">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Clinic Section */}
      <section className="about-clinic section section-alt">
        <div className="container">
          <div className="grid-12 align-center">
            <div className="col-6 reveal">
              <span className="uppercase">ABOUT THE CENTRE</span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--h2-fs)",
                  color: "var(--dark-text)",
                  marginTop: "0.5rem",
                }}
              >
                {clinicAboutData.title}
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "2px",
                  backgroundColor: "var(--secondary)",
                  margin: "1.5rem 0",
                }}
              ></div>
              <p
                style={{
                  color: "var(--body-text)",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                {clinicParagraphs[0] || ""}
              </p>
              <p
                style={{
                  color: "var(--body-text)",
                  fontSize: "0.95rem",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                {clinicParagraphs[1] || ""}
              </p>
              <Button to="/about" variant="primary">
                Read Our Story
              </Button>
            </div>

            <div className="col-6 reveal reveal-delay-2 home-about-box">
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--primary)",
                  marginBottom: "1.5rem",
                }}
              >
                A Trusted Women's Health Clinic OMR
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  color: "var(--body-text)",
                  marginBottom: "1.5rem",
                }}
              >
                {introduction[0] || ""}
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  color: "var(--body-text)",
                  margin: 0,
                }}
              >
                {introduction[1] || ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section
        className="services-section section"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <SectionTitle
            title="Comprehensive Medical Services"
            subtitle="Clinical Excellence"
          />

          <div className="grid-12">
            {serviceCats.map((cat, idx) => (
              <div key={cat.id} className="col-3 reveal reveal-delay-1">
                <div className="home-category-card">
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "var(--primary)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 2rem 0",
                      flexGrow: 1,
                    }}
                  >
                    {cat.items.map((item, key) => (
                      <li
                        key={key}
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--dark-text)",
                          marginBottom: "0.75rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <CheckCircle2 size={14} color="var(--primary)" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${cat.id}`}
                    className="service-card-link"
                    style={{ marginTop: "auto" }}
                  >
                    <span>Explore Category</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "4rem" }}>
            <Button to="/services" variant="primary">
              View All 12 Specialized Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services Deep-dive */}
      <section className="featured-combos section section-alt">
        <div className="container">
          <SectionTitle
            title="Fertility & Maternity Excellence"
            subtitle="Our Focus Areas"
          />

          <div className="grid-12">
            {detailedServicesSafe.slice(0, 3).map((svc, idx) => (
              <div key={svc.slug} className="col-4 reveal reveal-delay-1">
                <ServiceCard
                  title={svc.title}
                  description={svc.paragraphs?.[0] ?? ""}
                  to={`/services/${svc.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section
        className="doctors-section section"
        id="doctors"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <SectionTitle
            title="Our Leading Medical Specialists"
            subtitle="Expert Leadership"
          />

          <div className="grid-12 justify-center">
            {doctors.map((doc, idx) => (
              <div
                key={doc.id}
                className="col-6 reveal reveal-delay-1"
                style={{ maxWidth: "540px" }}
              >
                <DoctorCard
                  id={doc.id}
                  name={doc.name}
                  title={doc.title}
                  profileSummary={doc.profile?.[0] ?? ""}
                  qualifications={doc.homeCard?.qualifications ?? ""}
                  experience={doc.homeCard?.experience ?? ""}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey Timeline */}
      <section className="journey-section section section-alt" id="journey">
        <div className="container">
          <SectionTitle
            title="Our Clinical Journey"
            subtitle="Established Timelines"
          />

          <div className="timeline-container">
            <div className="timeline-line"></div>

            {journeyTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`timeline-item ${isEven ? "timeline-item-left" : "timeline-item-right"} reveal`}
                >
                  <div className="timeline-dot"></div>

                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.95rem",
                        color: "var(--body-text)",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.event}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="testimonials-section section"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <SectionTitle
            title="Patient Experiences & Testimonials"
            subtitle="Efficacy & Trust"
          />

          <div className="grid-12">
            {testimonialData.map((t, idx) => (
              <div key={idx} className="col-6 reveal home-testimonial-card">
                <Heart
                  size={36}
                  color="var(--accent)"
                  style={{
                    position: "absolute",
                    right: "2rem",
                    top: "2rem",
                    opacity: 0.8,
                  }}
                />
                <p
                  style={{
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    color: "var(--dark-text)",
                    marginBottom: "2rem",
                    lineHeight: "1.8",
                  }}
                >
                  “{t.text}”
                </p>
                <h4
                  style={{
                    fontSize: "1rem",
                    color: "var(--primary)",
                    margin: 0,
                  }}
                >
                  - {t.patientName}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section section section-alt">
        <div className="container">
          <SectionTitle
            title="Our Advanced Medical Facilities"
            subtitle="Locations & Branches"
          />

          <div className="grid-12">
            {locationData.map((loc, idx) => (
              <div key={idx} className="col-6 reveal reveal-delay-1">
                <div className="home-location-card">
                  <div
                    className="flex gap-2 align-center"
                    style={{ color: "var(--primary)", marginBottom: "1.5rem" }}
                  >
                    <MapPin size={24} />
                    <h3 style={{ margin: 0, fontSize: "1.45rem" }}>
                      {loc.name}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--dark-text)",
                      fontWeight: "500",
                      marginBottom: "1rem",
                    }}
                  >
                    {loc.address}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "--body-text",
                      marginBottom: "1.5rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {loc.details}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--primary)",
                      margin: 0,
                    }}
                  >
                    <strong>Services:</strong> {loc.services}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section
        className="insights-section section"
        style={{ background: "var(--white)" }}
      >
        <div className="container">
          <SectionTitle
            title="Latest Medical Insights & Education"
            subtitle="Knowledge & Wellness"
          />

          <div className="grid-12">
            {detailedServices.slice(0, 3).map((post, idx) => (
              <div key={post.slug} className="col-4 reveal reveal-delay-1">
                <BlogCard
                  slug={post.slug}
                  title={post.articleTitle.replace("Title: ", "")}
                  category={post.title}
                  snippet={post.paragraphs[0].substring(0, 120) + "..."}
                />
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "4rem" }}>
            <Button to="/insights" variant="primary">
              Browse All Health Information
            </Button>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <CTASection
        title="Start Your Journey to Parenthood Today"
        description="Connect with our experts at London Harley Street Women Fertility Clinic in Chennai. Early testing and evidence-based clinical protocols ensure better care. Schedule your appointment now!"
        primaryBtnText="Book Appointment"
        primaryBtnTo="/book-appointment"
      />
    </div>
  );
}
