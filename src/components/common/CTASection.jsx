/* src/components/common/CTASection.jsx */
import Button from "./Button";

export default function CTASection({ 
  title = "Book an Appointment Today", 
  description = "Take the first step toward a healthy motherhood journey. Book your consultation with our experienced specialists and experience exclusively care for women.",
  primaryBtnText = "Book Appointment",
  primaryBtnTo = "/book-appointment",
  secondaryBtnText = "Contact Us",
  secondaryBtnTo = "/contact"
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content animate-fade-in-up">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="cta-buttons">
            <Button to={primaryBtnTo} variant="secondary">
              {primaryBtnText}
            </Button>
            <Button to={secondaryBtnTo} variant="outline" style={{ borderColor: "var(--white)", color: "var(--white)" }}>
              {secondaryBtnText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
