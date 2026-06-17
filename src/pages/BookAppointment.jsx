/* src/pages/BookAppointment.jsx */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Stethoscope, User, MapPin, CheckCircle } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "perungudi",
    service: "gynecology",
    doctor: "dr-parimalam",
    date: "",
    time: "morning",
    notes: ""
  });
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    document.title = "Book an Appointment | London Harley Street";
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="book-appointment-page" style={{ marginTop: "80px" }}>
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <SectionTitle 
            title="Book Your Consultation" 
            subtitle="Appointment Portal"
          />

          {booked ? (
            <div style={{
              background: "var(--section-alt)",
              padding: "4rem 2rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-light)",
              textAlign: "center"
            }}>
              <CheckCircle size={64} color="var(--success)" style={{ marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "var(--font-heading)", color: "var(--primary)", marginBottom: "1rem" }}>
                Appointment Request Submitted
              </h2>
              <p style={{ color: "var(--body-text)", fontSize: "1rem", maxWidth: "540px", margin: "0 auto 2.5rem" }}>
                Thank you! Your appointment request has been logged successfully under our London Harley Street clinical guidelines. Our front desk coordinator will contact you shortly to confirm your slot.
              </p>
              <Button to="/" variant="primary">
                Return to Home
              </Button>
            </div>
          ) : (
            <div className="form-container">
              <form onSubmit={handleBooking} style={{ display: "flex", flexDirection: "column" }}>
                {/* Branch selection */}
                <div className="form-group">
                  <label htmlFor="branch" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <MapPin size={16} color="var(--primary)" />
                    <span>Select Clinic Branch *</span>
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="form-control"
                  >
                    <option value="perungudi">Perungudi Branch (OMR, behind Apollo Hospital)</option>
                    <option value="thalambur">Thalambur Branch (OMR, established 2025)</option>
                  </select>
                </div>

                {/* Service Category */}
                <div className="form-group">
                  <label htmlFor="service" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Stethoscope size={16} color="var(--primary)" />
                    <span>Clinical Department *</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-control"
                  >
                    <option value="gynecology">Women's Health & Gynecology</option>
                    <option value="fertility">Fertility & IVF solutions</option>
                    <option value="maternal">Pregnancy & Maternal Care</option>
                    <option value="diagnostic">Diagnostic & Fetal scans</option>
                    <option value="wellness">Pregnancy Yoga, Physio & Diet wellness</option>
                  </select>
                </div>

                {/* Doctor choice */}
                <div className="form-group">
                  <label htmlFor="doctor" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <User size={16} color="var(--primary)" />
                    <span>Preferred Doctor Specialist *</span>
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                    className="form-control"
                  >
                    <option value="dr-parimalam">Dr. Parimalam Ramanathan (Gynecology, Obstetrician, IVF)</option>
                    <option value="dr-leonard">Dr. Leonard Sagayanathan (Radiology & Fetal Medicine)</option>
                    <option value="first-available">First Available Specialist</option>
                  </select>
                </div>

                {/* Personal Information */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="name">Patient Full Name *</label>
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

                {/* Date & Time selection */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="date" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Calendar size={16} color="var(--primary)" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Preferred Time Slot *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="form-control"
                    >
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Special Notes / Symptoms (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-control"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" style={{ marginTop: "1rem" }}>
                  Confirm Booking Request
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
