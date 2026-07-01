/* src/pages/ServiceDetail.jsx */
import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ChevronRight,
  ArrowLeft,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";
import { detailedServices, serviceCategories } from "../data/contentData";
import Button from "../components/common/Button";
import CTASection from "../components/common/CTASection";
import scanCentreImg from "../assets/images/scan_centre.png";

// Sub-services mapping to their detailed combination articles
const subServiceMapping = {
  "gynecology-related-problems": "gynecology-minimally-invasive-surgery",
  "laparoscopy-specialist": "gynecology-minimally-invasive-surgery",
  "fertility-medical-services": "fertility-preconception-care",
  "preconception-counseling": "fertility-preconception-care",
  "family-planning-doctor": "family-planning-sterilisation",
  "sterilisation-doctor": "family-planning-sterilisation",
  "hysteroscopy-specialist": "hysteroscopy-advanced-uterine-care",
  "premarital-counselling": "premarital-sexual-health-counselling",
  "sexual-counselling-sexologist": "premarital-sexual-health-counselling",
  "sexual-counselling": "premarital-sexual-health-counselling",
  "high-risk-pregnancy-specialist": "high-risk-pregnancy-fetal-medicine",
  "pregnancy-scans": "pregnancy-scans-advanced-ultrasound",
  "advanced-ultrasound-fetal-medical-services":
    "pregnancy-scans-advanced-ultrasound",
  "fetal-medicine-specialist": "high-risk-pregnancy-fetal-medicine",
  "fetal-medicine-interventions": "fetal-medicine-in-utero-interventions",
  "scan-centre": "diagnostic-imaging-scan-services",
  "nt-scan": "diagnostic-imaging-scan-services",
  "tiffa-scan": "diagnostic-imaging-scan-services",
  "anomaly-scan": "diagnostic-imaging-scan-services",
  "nipt-test": "advanced-genetic-prenatal-testing",
  "amniocentesis-cvs-specialist": "advanced-genetic-prenatal-testing",
  "labs-and-blood-tests": "laboratory-clinical-testing",
  "clinical-laboratory": "laboratory-clinical-testing",
  "yoga-for-pregnancy": "holistic-pregnancy-wellness",
  physiotherapy: "holistic-pregnancy-wellness",
  "dietician-for-pregnancy": "holistic-pregnancy-wellness",
};

// Friendly titles for sub-services
const subServiceTitles = {
  "gynecology-related-problems": "Gynecology Related Problems",
  "laparoscopy-specialist": "Laparoscopy Specialist",
  "fertility-medical-services": "Fertility Medical Services",
  "preconception-counseling": "Preconception Counseling",
  "family-planning-doctor": "Family Planning Doctor",
  "sterilisation-doctor": "Sterilisation Doctor",
  "hysteroscopy-specialist": "Hysteroscopy Specialist",
  "premarital-counselling": "Premarital Counselling",
  "sexual-counselling-sexologist": "Sexual Counselling / Sexologist",
  "sexual-counselling": "Sexual Counselling",
  "high-risk-pregnancy-specialist": "High-Risk Pregnancy Specialist",
  "pregnancy-scans": "Pregnancy Scans",
  "advanced-ultrasound-fetal-medical-services":
    "Advanced Ultrasound & Fetal Medical Services",
  "fetal-medicine-specialist": "Fetal Medicine Specialist",
  "fetal-medicine-interventions": "Fetal Medicine Interventions",
  "scan-centre": "Scan Centre",
  "nt-scan": "NT Scan",
  "tiffa-scan": "TIFFA Scan",
  "anomaly-scan": "Anomaly Scan",
  "nipt-test": "NIPT Test",
  "amniocentesis-cvs-specialist": "Amniocentesis & CVS Specialist",
  "labs-and-blood-tests": "Labs and Blood Tests",
  "clinical-laboratory": "Clinical Laboratory",
  "yoga-for-pregnancy": "Yoga for Pregnancy",
  physiotherapy: "Physiotherapy",
  "dietician-for-pregnancy": "Dietician for Pregnancy",
};

export default function ServiceDetail() {
  const { slug } = useParams();

  // Determine the target content key
  const targetSlug = subServiceMapping[slug] || slug;
  const subServiceTitle = subServiceTitles[slug] || null;

  // Find detailed article
  const service = detailedServices.find((s) => s.slug === targetSlug);
  // Find if it is a category instead
  const category = serviceCategories.find((c) => c.id === slug);

  useEffect(() => {
    if (subServiceTitle) {
      document.title = `${subServiceTitle} | London Harley Street`;
    } else if (service) {
      document.title = `${service.title} | London Harley Street`;
    } else if (category) {
      document.title = `${category.title} | London Harley Street`;
    } else if (slug === "family-planning-sterilisation") {
      document.title = "Family Planning & Sterilisation | London Harley Street";
    }
  }, [slug, service, category, subServiceTitle]);

  // Special handle for family planning (or mapping keys that target it)
  if (targetSlug === "family-planning-sterilisation") {
    return (
      <div className="service-detail-page" style={{ marginTop: "80px" }}>
        {/* Hero Area */}
        <section
          style={{
            padding: "5rem 0",
            background:
              "linear-gradient(135deg, var(--section-alt) 0%, #FFFFFF 100%)",
            borderBottom: "1px solid var(--border-light)",
          }}
        >
          <div className="container">
            <Link
              to="/services"
              className="flex align-center gap-1"
              style={{
                marginBottom: "1.5rem",
                display: "inline-flex",
                fontWeight: "500",
              }}
            >
              <ArrowLeft size={16} /> Back to Services
            </Link>
            <span className="uppercase">Women's Health Speciality</span>
            {subServiceTitle && (
              <div
                style={{
                  background: "var(--accent)",
                  color: "var(--primary)",
                  padding: "0.25rem 1rem",
                  borderRadius: "var(--radius-full)",
                  display: "inline-flex",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  marginLeft: "1rem",
                }}
              >
                {subServiceTitle}
              </div>
            )}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--h1-fs)",
                marginTop: "1rem",
              }}
            >
              Family Planning & Sterilisation Services
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--body-text)",
                maxWidth: "700px",
                marginTop: "1rem",
              }}
            >
              Combines Family Planning Doctor + Sterilisation Doctor
            </p>
          </div>
        </section>

        <section className="section" style={{ background: "var(--white)" }}>
          <div className="container">
            <div className="grid-12">
              <div className="col-8">
                <div style={{ paddingRight: "2rem" }}>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.8",
                      color: "var(--dark-text)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    At London Harley Street Women & Fertility Centre, we offer
                    private, compassionate, and expert consultation for couples
                    and individuals looking for family planning advice and
                    medical sterilisation options.
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.8",
                      color: "var(--body-text)",
                      marginBottom: "2rem",
                    }}
                  >
                    Choosing the right contraceptive method or exploring
                    permanent sterilisation procedures is an important decision.
                    Our specialists discuss medical history, lifestyle
                    preferences, and reproductive health states to provide
                    tailored guidelines.
                  </p>

                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.5rem",
                      color: "var(--primary)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Associated Clinical Focus
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex align-center gap-2">
                      <CheckCircle2 size={18} color="var(--primary)" />
                      <span>
                        Complete birth control counseling & prescription plans
                      </span>
                    </div>
                    <div className="flex align-center gap-2">
                      <CheckCircle2 size={18} color="var(--primary)" />
                      <span>
                        Temporary barrier & hormonal contraception options
                      </span>
                    </div>
                    <div className="flex align-center gap-2">
                      <CheckCircle2 size={18} color="var(--primary)" />
                      <span>
                        Laparoscopic permanent sterilisation consultations
                      </span>
                    </div>
                    <div className="flex align-center gap-2">
                      <CheckCircle2 size={18} color="var(--primary)" />
                      <span>
                        Post-sterilization counseling & recovery tracking
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div
                  style={{
                    background: "var(--section-alt)",
                    padding: "2.5rem",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border-light)",
                    position: "sticky",
                    top: "100px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--primary)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Request Consultation
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--body-text)",
                      marginBottom: "2rem",
                      lineHeight: "1.6",
                    }}
                  >
                    Consult our gynecologists and family planning specialists at
                    Perungudi and Thalambur branches.
                  </p>
                  <Button
                    to="/book-appointment"
                    variant="primary"
                    style={{ width: "100%" }}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    );
  }

  // Handle Category list view
  if (category) {
    return (
      <div className="service-detail-page" style={{ marginTop: "80px" }}>
        {/* Hero Area */}
        <section
          style={{
            padding: "5rem 0",
            background:
              "linear-gradient(135deg, var(--section-alt) 0%, #FFFFFF 100%)",
            borderBottom: "1px solid var(--border-light)",
            textAlign: "center",
          }}
        >
          <div className="container">
            <span className="uppercase">CLINICAL CATEGORY</span>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--h1-fs)",
                marginTop: "1rem",
              }}
            >
              {category.title}
            </h1>
          </div>
        </section>

        <section className="section" style={{ background: "var(--white)" }}>
          <div className="container">
            <div className="grid-12">
              <div className="col-8">
                <h3
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--primary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Clinical Bulletins:
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "3rem",
                  }}
                >
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "1rem",
                        color: "var(--dark-text)",
                      }}
                    >
                      <HeartPulse size={16} color="var(--primary)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--primary)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Detailed Clinical Programs:
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {detailedServices
                    .filter((s) => {
                      if (category.id === "womens-health-gynecology") {
                        return [
                          "gynecology-minimally-invasive-surgery",
                          "fertility-preconception-care",
                          "premarital-sexual-health-counselling",
                          "hysteroscopy-advanced-uterine-care",
                        ].includes(s.slug);
                      }
                      if (category.id === "pregnancy-maternal-care") {
                        return [
                          "high-risk-pregnancy-fetal-medicine",
                          "pregnancy-scans-advanced-ultrasound",
                          "fetal-medicine-in-utero-interventions",
                        ].includes(s.slug);
                      }
                      if (category.id === "diagnostics-testing") {
                        return [
                          "diagnostic-imaging-scan-services",
                          "advanced-genetic-prenatal-testing",
                          "laboratory-clinical-testing",
                        ].includes(s.slug);
                      }
                      if (category.id === "wellness-programs") {
                        return ["holistic-pregnancy-wellness"].includes(s.slug);
                      }
                      return false;
                    })
                    .map((s) => (
                      <div
                        key={s.slug}
                        style={{
                          padding: "2.5rem",
                          background: "var(--section-alt)",
                          borderRadius: "var(--radius-lg)",
                          border: "1px solid var(--border-light)",
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.35rem",
                            color: "var(--dark-text)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {s.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.95rem",
                            color: "var(--body-text)",
                            marginBottom: "1.5rem",
                          }}
                        >
                          {s.paragraphs[0]}
                        </p>
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="service-card-link"
                        >
                          <span>Read Verbatim Medical Guide</span>
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    ))}

                  {category.id === "womens-health-gynecology" && (
                    <div
                      style={{
                        padding: "2.5rem",
                        background: "var(--section-alt)",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.35rem",
                          color: "var(--dark-text)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Family Planning & Sterilisation Services
                      </h4>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          color: "var(--body-text)",
                          marginBottom: "1.5rem",
                        }}
                      >
                        Family planning guidance and medical sterilization
                        procedures tailored to patient goals.
                      </p>
                      <Link
                        to="/services/family-planning-sterilisation"
                        className="service-card-link"
                      >
                        <span>Read Verbatim Medical Guide</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-4">
                <div
                  style={{
                    background: "var(--section-alt)",
                    padding: "2.5rem",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border-light)",
                    position: "sticky",
                    top: "100px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--primary)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Expert Consultation
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--body-text)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Book appointment today to consult with our medical
                    professionals about {category.title} services.
                  </p>
                  <Button
                    to="/book-appointment"
                    variant="primary"
                    style={{ width: "100%" }}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    );
  }

  // If no matching route found, redirect to services index
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Determine if we should display the Scan Centre Image inside the sidebar
  const isScanOrDiagnostic = [
    "diagnostic-imaging-scan-services",
    "pregnancy-scans-advanced-ultrasound",
    "fetal-medicine-in-utero-interventions",
    "advanced-genetic-prenatal-testing",
    "laboratory-clinical-testing",
  ].includes(targetSlug);

  // For certain service pages, show a centered, full-width article and hide the sidebar
  const centeredServices = [
    "fertility-preconception-care",
    "holistic-pregnancy-wellness",
  ];
  const isCenteredService = centeredServices.includes(targetSlug);

  // Handle Detailed Combo Service/Article View
  return (
    <div className="service-detail-page" style={{ marginTop: "80px" }}>
      {/* Hero Header area */}
      <section
        style={{
          padding: "5rem 0",
          background:
            "linear-gradient(135deg, var(--section-alt) 0%, #FFFFFF 100%)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <div
          className="container"
          style={{ textAlign: isCenteredService ? "center" : "left" }}
        >
          {!isCenteredService && (
            <Link
              to="/services"
              className="flex align-center gap-1"
              style={{
                marginBottom: "1.5rem",
                display: "inline-flex",
                fontWeight: "500",
              }}
            >
              <ArrowLeft size={16} /> Back to Services
            </Link>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1rem",
              justifyContent: isCenteredService ? "center" : "flex-start",
            }}
          >
            <span className="uppercase">SPECIALIZED MEDICAL PROGRAM</span>
            {subServiceTitle && (
              <div
                style={{
                  background: "var(--accent)",
                  color: "var(--primary)",
                  padding: "0.25rem 1rem",
                  borderRadius: "var(--radius-full)",
                  display: "inline-flex",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  marginLeft: isCenteredService ? 0 : "1rem",
                }}
              >
                {subServiceTitle}
              </div>
            )}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--h1-fs)",
              marginTop: "1rem",
              lineHeight: "1.2",
            }}
          >
            {service.title}
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--body-text)",
              maxWidth: isCenteredService ? "900px" : "800px",
              marginTop: "1rem",
              lineHeight: "1.7",
              marginLeft: isCenteredService ? "auto" : undefined,
              marginRight: isCenteredService ? "auto" : undefined,
            }}
          >
            <strong>Integrates:</strong> {service.combines}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="grid-12">
            {/* Main Article Block */}
            <div className={isCenteredService ? "col-12" : "col-8"}>
              <div
                style={{
                  paddingRight: isCenteredService ? 0 : "2rem",
                  maxWidth: isCenteredService ? "900px" : undefined,
                  marginLeft: isCenteredService ? "auto" : undefined,
                  marginRight: isCenteredService ? "auto" : undefined,
                }}
              >
                {/* Verbatim Article Content */}
                <div
                  className="verbatim-article"
                  style={{
                    lineHeight: "1.8",
                    color: "var(--dark-text)",
                    textAlign: isCenteredService ? "left" : undefined,
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.65rem",
                      color: "var(--primary)",
                      marginBottom: "2rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {service.articleTitle}
                  </h2>

                  {service.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      style={{
                        marginBottom: "1.5rem",
                        fontSize: "1.05rem",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {p}
                    </p>
                  ))}

                  {service.sections.map((section, idx) => (
                    <div key={idx} style={{ marginTop: "3rem" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.5rem",
                          color: "var(--primary)",
                          marginBottom: "1.25rem",
                          borderLeft: "4px solid var(--secondary)",
                          paddingLeft: "1rem",
                        }}
                      >
                        {section.subHeading}
                      </h3>
                      <p
                        style={{
                          whiteSpace: "pre-line",
                          fontSize: "1.05rem",
                          marginBottom: "1.5rem",
                        }}
                      >
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            {!isCenteredService && (
              <div className="col-4">
                <div className="sidebar-card">
                  {isScanOrDiagnostic && (
                    <div
                      style={{
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        boxShadow: "var(--shadow-sm)",
                        marginBottom: "2rem",
                        height: "240px",
                      }}
                    >
                      <img
                        src={scanCentreImg}
                        alt="Ultrasound Pregnancy Scanning Centre Room"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  )}

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--primary)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Book Clinical Care
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--body-text)",
                      marginBottom: "1.5rem",
                      lineHeight: "1.6",
                    }}
                  >
                    Connect with our reproductive specialists, fetal medicine
                    consultants, and obstetricians for personalized,
                    evidence-based care.
                  </p>

                  <div
                    style={{
                      marginBottom: "2rem",
                      borderTop: "1px solid var(--border-light)",
                      paddingTop: "1.5rem",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        color: "var(--secondary)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Clinically Integrated Services:
                    </h4>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--dark-text)",
                        margin: 0,
                        lineHeight: "1.6",
                      }}
                    >
                      {service.combines}
                    </p>
                  </div>

                  <Button
                    to="/book-appointment"
                    variant="primary"
                    style={{ width: "100%" }}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
