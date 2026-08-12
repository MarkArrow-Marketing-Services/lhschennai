/* src/components/common/ServiceCard.jsx */
import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse } from "lucide-react";

export default function ServiceCard({
  title,
  description,
  to,
  icon: IconComponent = HeartPulse,
  image = null,
}) {
  return (
    <div className="service-card">
      <div>
        <div className="service-card-icon">
          {image ? (
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "var(--radius-sm)",
              }}
            />
          ) : (
            <IconComponent size={32} strokeWidth={1.5} />
          )}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link to={to} className="service-card-link">
        <span>Learn More</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
