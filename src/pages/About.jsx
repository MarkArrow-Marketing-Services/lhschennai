/* src/pages/About.jsx */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Award } from "lucide-react";
import { clinicAboutData, doctorsData, journeyTimeline } from "../data/contentData";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import CTASection from "../components/common/CTASection";
import docFemale from "../assets/images/doctor_female.png";
import docMale from "../assets/images/doctor_male.png";

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "About Us | London Harley Street Women & Fertility Centre";
    
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="about-page" style={{ marginTop: "80px" }}>
      {/* Hero Header */}
      <section className="page-hero">
        <div className="container">
          <span className="subtitle">Who We Are</span>
          <h1>London Harley Street Centre</h1>
          <p>
            delivering exceptional, patient-focused health care at each stage of life prioritising women's health, dignity, and well-being.
          </p>
        </div>
      </section>

      {/* About Centre Section */}
      <section className="section" id="centre" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="grid-12 align-center">
            <div className="col-7">
              <span className="uppercase">OUR CENTRE</span>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--h2-fs)", marginTop: "0.5rem" }}>
                {clinicAboutData.title}
              </h2>
              <div style={{ width: "60px", height: "2px", backgroundColor: "var(--secondary)", margin: "1.5rem 0" }}></div>
              
              {clinicAboutData.paragraphs.slice(0, 4).map((p, idx) => (
                <p key={idx} style={{ color: "var(--body-text)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "1.25rem" }}>
                  {p}
                </p>
              ))}
            </div>

            <div className="col-5 about-mission-box">
              <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--primary)", marginBottom: "1.5rem" }}>
                Our Mission & Vision
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--body-text)", marginBottom: "1.5rem" }}>
                With a vision centered prioritizing the women's health, dignity, and well-being. The London Harley Street Women and Fertility Centre was established to deliver exceptional, patient-focused health care at each stage of life. We address the scientific and medical solutions of women including reproductive health to pregnancy, fertility etc.., and we treat every patient with empathy, respect, and confidentiality, ensuring a comfortable and supportive environment.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--body-text)", margin: 0 }}>
                We specialize in gynecology, obstetrics, and fertility medical services, including IVF. Understanding that women’s health is deeply connected to emotional and mental well-being, we empower the awareness, and preventive care, and providing continuous support, at each stage of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Profiles Section */}
      <section className="section section-alt" id="doctors">
        <div className="container">
          <SectionTitle 
            title="Our Doctors & Global Specialists" 
            subtitle="Clinical Profiles"
          />

          {doctorsData.map((doc, idx) => (
            <div key={doc.id} id={doc.id} className="doc-profile-card">
              <div className="grid-12">
                {/* Profile Header */}
                <div className="col-12 doc-header">
                  <span className="uppercase">PROFESSIONAL PROFILE</span>
                  <h2 className="doc-name">{doc.name}</h2>
                  <p className="doc-title">{doc.title}</p>
                </div>

                {/* Left Column - Main Intro & Approach */}
                <div className="col-7">
                  <h3 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>Biography</h3>
                  {doc.profile.map((p, pIdx) => (
                    <p key={pIdx} style={{ fontSize: "1rem", lineHeight: "1.8", color: "var(--body-text)", marginBottom: "1.5rem" }}>
                      {p}
                    </p>
                  ))}
                  
                  {/* CV Subsections */}
                  {doc.sections.map((sec, secIdx) => (
                    <div key={secIdx} className="doc-cv-section">
                      <h4 className="doc-cv-title">{sec.heading}</h4>
                      {sec.paragraphs.map((para, paraIdx) => (
                        <p key={paraIdx} style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--body-text)", marginBottom: "1rem" }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Right Column - Brief Quick facts / qualifications card */}
                <div className="col-5">
                  <div className="sidebar-card">
                    {/* Portrait Photo */}
                    <div style={{
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      boxShadow: "var(--shadow-sm)",
                      marginBottom: "2rem",
                      height: "360px"
                    }}>
                      <img 
                        src={doc.id === "dr-parimalam-ramanathan" ? docFemale : docMale} 
                        alt={doc.name} 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                      />
                    </div>

                    <h3 className="sidebar-title flex align-center gap-1">
                      <Award size={20} />
                      <span>Clinical Credentials</span>
                    </h3>
                    
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--secondary)", margin: "0 0 0.5rem 0" }}>
                        Experience Summary
                      </h4>
                      <p style={{ fontSize: "0.95rem", color: "var(--dark-text)", margin: 0, fontWeight: "500" }}>
                        {doc.id === "dr-parimalam-ramanathan" ? "Over 30+ Years of Clinical experience" : "Over 22+ Years of Clinical practice"}
                      </p>
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--secondary)", margin: "0 0 0.5rem 0" }}>
                        Credentials
                      </h4>
                      <p style={{ fontSize: "0.9rem", color: "var(--body-text)", margin: 0, lineHeight: "1.6" }}>
                        {doc.id === "dr-parimalam-ramanathan" 
                          ? "MBBS (Kilpauk Medical College, Stanley Medical College MD), Diplomate of National Board (New Delhi), MRCOG, FRCOG (United Kingdom), Certificate of Training."
                          : "Fellowship in Fetal Medicine from FMF (UK), trained under Professor Kypros Nicolaides (2004-2007), advanced Diploma certified in Obstetric Ultrasound from RCOG & RCR (UK), DMRD from MGR Medical University, MBBS degree from Madras University, DNB."}
                      </p>
                    </div>

                    {doc.id === "dr-parimalam-ramanathan" && (
                      <div style={{ marginBottom: "1.5rem" }}>
                        <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--secondary)", margin: "0 0 0.5rem 0" }}>
                          UK Hospitals Exposure
                        </h4>
                        <ul style={{ paddingLeft: "1rem", fontSize: "0.85rem", color: "var(--body-text)", lineHeight: "1.7" }}>
                          <li>Barts London NHS Hospital</li>
                          <li>Newham General Hospital</li>
                          <li>Royal London Hospital</li>
                          <li>IVF Consultant at CRGH (London, UK)</li>
                        </ul>
                      </div>
                    )}

                    {doc.id === "dr-leonard-sagayanathan" && (
                      <div style={{ marginBottom: "1.5rem" }}>
                        <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--secondary)", margin: "0 0 0.5rem 0" }}>
                          Practice Locations Exposure
                        </h4>
                        <ul style={{ paddingLeft: "1rem", fontSize: "0.85rem", color: "var(--body-text)", lineHeight: "1.7" }}>
                          <li>King’ George Hospital, London, UK</li>
                          <li>Queen’s Hospital, London, UK</li>
                          <li>North Middlesex Hospital, London, UK</li>
                          <li>Ealing Hospital, London, UK</li>
                          <li>King’s College Hospital, London, UK</li>
                          <li>St. Isabel’s Hospital, Chennai</li>
                          <li>Malar Hospital, Chennai</li>
                        </ul>
                      </div>
                    )}

                    <Button to="/book-appointment" variant="primary" style={{ width: "100%", marginTop: "1.5rem" }}>
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey timeline page section */}
      <section className="section" id="journey" style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionTitle 
            title="Chronological Growth & History" 
            subtitle="Our Journey"
          />

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {journeyTimeline.map((item, idx) => (
              <div key={idx} style={{
                display: "flex",
                gap: "2rem",
                paddingBottom: "3rem",
                borderLeft: idx === journeyTimeline.length - 1 ? "none" : "2px solid var(--border-medium)",
                paddingLeft: "2rem",
                position: "relative",
                marginLeft: "1rem"
              }}>
                <div style={{
                  position: "absolute",
                  left: "-9px",
                  top: "0",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary)",
                  border: "3px solid var(--white)"
                }}></div>
                <div style={{ flexShrink: 0, width: "80px" }}>
                  <h3 style={{ fontSize: "1.5rem", color: "var(--primary)", margin: 0 }}>{item.year}</h3>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "1rem", color: "var(--body-text)", lineHeight: "1.7" }}>
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt" id="why-choose-us">
        <div className="container">
          <SectionTitle 
            title="Why Choose London Harley Street Clinic" 
            subtitle="Clinical Excellence Standards"
          />

          <div className="grid-12">
            <div className="col-4 about-why-card">
              <h3 style={{ fontSize: "1.2rem", color: "var(--primary)", marginBottom: "1rem" }}>
                International Standards
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--body-text)", margin: 0 }}>
                Inspired by the renowned London Harley Street model of evidence-based and ethical care, bringing global expertise directly to OMR Chennai.
              </p>
            </div>

            <div className="col-4 about-why-card">
              <h3 style={{ fontSize: "1.2rem", color: "var(--primary)", marginBottom: "1rem" }}>
                Holistic Compassionate Care
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--body-text)", margin: 0 }}>
                Combining clinical precision with complete emotional support. Providing a comfortable, private and safe environment for individuals and couples.
              </p>
            </div>

            <div className="col-4 about-why-card">
              <h3 style={{ fontSize: "1.2rem", color: "var(--primary)", marginBottom: "1rem" }}>
                Expert Specialists
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--body-text)", margin: 0 }}>
                Doctors with over 30+ years of UK NHS and leading hospital experience, certified by international foundations and Royal Colleges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <CTASection 
        title="Consult Our Experts" 
        description="Book your appointment today with London Harley Street Women & Fertility Centre to experience premium healthcare under global clinical standards."
        primaryBtnText="Schedule Appointment"
        primaryBtnTo="/book-appointment"
      />
    </div>
  );
}
