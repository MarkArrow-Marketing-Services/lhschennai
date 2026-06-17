/* src/components/common/ServiceCard.jsx */
import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse } from "lucide-react";

export default function ServiceCard({ title, description, to, icon: IconComponent = HeartPulse }) {
  return (
    <div className="service-card">
      <div>
        <div className="service-card-icon">
          <IconComponent size={32} strokeWidth={1.5} />
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
