/* src/pages/Contact.jsx */
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { locationData } from "../data/contentData";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | London Harley Street Women & Fertility Centre";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after demo action
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setSubmitted(false);
      alert("Thank you! Your inquiry has been received. Our team will contact you shortly.");
    }, 1000);
  };

  return (
    <div className="contact-page" style={{ marginTop: "80px" }}>
      {/* Hero Header */}
      <section className="page-hero">
        <div className="container">
          <span className="subtitle">Get In Touch</span>
          <h1>Contact Our Centre</h1>
          <p>
            If you are looking for an experienced gynecologist, or exploring fertility options, London Harley Street Centre is here to support you at every step.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="grid-12">
            {/* Left Column - Contact Form */}
            <div className="col-7">
              <div className="form-container">
                <h3 className="form-title">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-control"
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" style={{ alignSelf: "flex-start", marginTop: "1rem", gap: "0.5rem" }}>
                    <Send size={16} />
                    <span>{submitted ? "Sending..." : "Submit Inquiry"}</span>
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Column - Info Panels */}
            <div className="col-5">
              <div style={{ display: "flex", gap: "2.5rem", flexDirection: "column" }}>
                {/* Branch Info blocks */}
                {locationData.map((loc, idx) => (
                  <div key={idx} style={{
                    background: "var(--white)",
                    padding: "2.5rem",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border-light)",
                    boxShadow: "var(--shadow-sm)"
                  }}>
                    <h3 style={{ fontSize: "1.35rem", color: "var(--primary)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <MapPin size={20} />
                      <span>{loc.name}</span>
                    </h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--dark-text)", fontWeight: "500", marginBottom: "0.5rem" }}>
                      {loc.address}
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "var(--body-text)", margin: 0 }}>
                      <strong>Services:</strong> {loc.services}
                    </p>
                  </div>
                ))}
                
                {/* Global Contact metrics */}
                <div className="sidebar-card" style={{ position: "static" }}>
                  <h3 className="sidebar-title">Hours & Communications</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex align-center gap-2">
                      <Clock size={16} color="var(--secondary)" />
                      <span style={{ fontSize: "0.9rem" }}>Mon - Sat: 9:00 AM - 7:00 PM (Sunday Closed)</span>
                    </div>
                    <div className="flex align-center gap-2">
                      <Mail size={16} color="var(--secondary)" />
                      <span style={{ fontSize: "0.9rem" }}>info@londonharleyfertility.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
