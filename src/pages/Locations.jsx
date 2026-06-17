/* src/pages/Locations.jsx */
import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { locationData } from "../data/contentData";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import CTASection from "../components/common/CTASection";

export default function Locations() {
  useEffect(() => {
    document.title = "Our Locations | London Harley Street Women & Fertility Centre";
  }, []);

  return (
    <div className="locations-page" style={{ marginTop: "80px" }}>
      {/* Hero Header */}
      <section className="locations-hero" style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, var(--section-alt) 0%, #FFFFFF 100%)",
        borderBottom: "1px solid var(--border-light)",
        textAlign: "center"
      }}>
        <div className="container">
          <span className="uppercase">Our Network</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--h1-fs)", marginTop: "1rem" }}>
            Clinic Branches in OMR Chennai
          </h1>
          <p style={{ maxWidth: "680px", margin: "1.5rem auto 0", color: "var(--body-text)", fontSize: "1.05rem" }}>
            London Harley Street Women & Fertility Centre has established state-of-the-art facilities in Perungudi and Thalambur to provide premium quality care.
          </p>
        </div>
      </section>

      {/* Branches List */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="flex flex-col gap-4">
            {locationData.map((loc, idx) => (
              <div key={idx} className="location-item-card">
                <div className="grid-12 align-center">
                  <div className="col-7">
                    <span className="uppercase">OMR CORRIDOR</span>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--primary)", marginTop: "0.5rem", marginBottom: "1rem" }}>
                      {loc.name}
                    </h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--dark-text)", fontWeight: "500", marginBottom: "1.5rem" }}>
                      {loc.address}
                    </p>
                    <p style={{ color: "var(--body-text)", lineHeight: "1.8", fontSize: "1rem", marginBottom: "1.5rem" }}>
                      {loc.details}
                    </p>
                    <p style={{ color: "var(--body-text)", lineHeight: "1.8", fontSize: "0.95rem", marginBottom: "2rem" }}>
                      The facilities are designed to provide comfort, privacy, and safety, ensuring a positive healthcare experience for every patient. From regular check-ups to complex fertility procedures, our centre maintains the international standards in hygiene and clinical excellence.
                    </p>
                    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                      <div className="flex align-center gap-2">
                        <Clock size={18} color="var(--secondary)" />
                        <span style={{ fontSize: "0.9rem", color: "var(--dark-text)" }}>Mon - Sat: 9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex align-center gap-2">
                        <ShieldCheck size={18} color="var(--secondary)" />
                        <span style={{ fontSize: "0.9rem", color: "var(--dark-text)" }}>International Standards Hygiene</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-5 location-sidebar-card">
                    <h3 style={{ fontSize: "1.25rem", color: "var(--dark-text)", marginBottom: "1rem" }}>
                      Clinical Specialities at Branch
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--body-text)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                      {loc.services}
                    </p>
                    <div className="flex flex-col gap-2" style={{ marginBottom: "2rem" }}>
                      <div className="flex align-center gap-2" style={{ fontSize: "0.85rem", color: "var(--dark-text)" }}>
                        <CheckCircle size={14} color="var(--primary)" />
                        <span>Gynecology Consultations & Laparoscopy</span>
                      </div>
                      <div className="flex align-center gap-2" style={{ fontSize: "0.85rem", color: "var(--dark-text)" }}>
                        <CheckCircle size={14} color="var(--primary)" />
                        <span>Advanced Fertility, IVF & IUI Services</span>
                      </div>
                      <div className="flex align-center gap-2" style={{ fontSize: "0.85rem", color: "var(--dark-text)" }}>
                        <CheckCircle size={14} color="var(--primary)" />
                        <span>Maternal Fetal Medicine & Scans</span>
                      </div>
                    </div>
                    <Button to="/book-appointment" variant="primary" style={{ width: "100%" }}>
                      Book Branch Appointment
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
