/* src/components/common/DoctorCard.jsx */
import { Link } from "react-router-dom";
import { Award, Calendar } from "lucide-react";
import Button from "./Button";
import docFemale from "../../assets/images/Dr. Parimalam Ramanathan.png";
import docMale from "../../assets/images/Dr. Leonard Sagayanathan.jpg";

export default function DoctorCard({
  id,
  name,
  title,
  profileSummary,
  qualifications,
  experience,
}) {
  const getDocImage = (docId) => {
    if (docId === "dr-parimalam-ramanathan") return docFemale;
    if (docId === "dr-leonard-sagayanathan") return docMale;
    return null;
  };

  const docImg = getDocImage(id);

  return (
    <div className="doctor-card">
      <div className="doctor-image-wrapper">
        {docImg ? (
          <img
            src={docImg}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div className="doctor-image-placeholder">
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                marginTop: "1rem",
                color: "var(--dark-text)",
              }}
            >
              {name}
            </h4>
            <span style={{ fontSize: "0.8rem", color: "var(--body-text)" }}>
              {title}
            </span>
          </div>
        )}
      </div>

      <div className="doctor-info-box">
        <h3>{name}</h3>
        <div className="doctor-qualifications flex align-center gap-1">
          <Award size={14} />
          <span>{qualifications}</span>
        </div>
        <p className="doctor-experience flex align-center gap-1">
          <Calendar size={14} />
          <span>{experience}</span>
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--body-text)",
            marginBottom: "1.5rem",
            height: "75px",
            overflow: "hidden",
          }}
        >
          {profileSummary}
        </p>
        <Button to={`/about#${id}`} variant="outline" style={{ width: "100%" }}>
          View Full Profile & CV
        </Button>
      </div>
    </div>
  );
}
