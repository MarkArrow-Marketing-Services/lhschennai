/* src/pages/Services.jsx */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { serviceCategories, detailedServices, serviceKeywords } from "../data/contentData";
import SectionTitle from "../components/common/SectionTitle";
import ServiceCard from "../components/common/ServiceCard";
import CTASection from "../components/common/CTASection";

// Helper to convert text titles into correct routing slugs
const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ \/ /g, "-")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-");
};

export default function Services() {
  useEffect(() => {
    document.title = "Medical Services | London Harley Street Women & Fertility Centre";
  }, []);

  return (
    <div className="services-page" style={{ marginTop: "80px" }}>
      {/* Hero Header */}
      <section className="page-hero">
        <div className="container">
          <span className="subtitle">Clinical Specialities</span>
          <h1>Our Medical Services</h1>
          <p>
            We specialize in gynecology, obstetrics, and fertility medical services. Discover our comprehensive range of specialized clinical programs.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionTitle 
            title="Core Medical Disciplines" 
            subtitle="Departments"
          />

          <div className="grid-12">
            {serviceCategories.map((cat) => (
              <div key={cat.id} className="col-6 service-category-card">
                <h3 style={{ fontSize: "1.45rem", color: "var(--primary)", marginBottom: "1.5rem" }}>
                  <Link to={`/services/${cat.id}`} style={{ color: "var(--primary)", textDecoration: "underline" }}>
                    {cat.title}
                  </Link>
                </h3>
                <div className="service-subgrid">
                  {cat.items.map((item, idx) => (
                    <Link 
                      key={idx} 
                      to={`/services/${slugify(item)}`}
                      className="flex align-center gap-1 hover-grow"
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--dark-text)",
                        transition: "var(--transition-fast)"
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <span style={{ textDecoration: "underline" }}>{item}</span>
                    </Link>
                  ))}
                </div>
                
                {/* Find matches for detailed services that are within this category */}
                <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "1.5rem" }}>
                  <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--secondary)", marginBottom: "1rem" }}>
                    Specialized Programs:
                  </h4>
                  <div className="flex flex-col gap-2">
                    {detailedServices.filter(svc => {
                      if (cat.id === "womens-health-gynecology") {
                        return ["gynecology-minimally-invasive-surgery", "fertility-preconception-care", "premarital-sexual-health-counselling", "hysteroscopy-advanced-uterine-care"].includes(svc.slug);
                      }
                      if (cat.id === "pregnancy-maternal-care") {
                        return ["high-risk-pregnancy-fetal-medicine", "pregnancy-scans-advanced-ultrasound", "fetal-medicine-in-utero-interventions"].includes(svc.slug);
                      }
                      if (cat.id === "diagnostics-testing") {
                        return ["diagnostic-imaging-scan-services", "advanced-genetic-prenatal-testing", "laboratory-clinical-testing"].includes(svc.slug);
                      }
                      if (cat.id === "wellness-programs") {
                        return ["holistic-pregnancy-wellness"].includes(svc.slug);
                      }
                      return false;
                    }).map((svc) => (
                      <Link key={svc.slug} to={`/services/${svc.slug}`} className="service-card-link" style={{ justifyContent: "flex-start" }}>
                        <span>{svc.title}</span>
                        <ChevronRight size={14} />
                      </Link>
                    ))}
                    {cat.id === "womens-health-gynecology" && (
                      <Link to="/services/family-planning-sterilisation" className="service-card-link" style={{ justifyContent: "flex-start" }}>
                        <span>Family Planning & Sterilisation Services</span>
                        <ChevronRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Programs List */}
      <section className="section section-alt">
        <div className="container">
          <SectionTitle 
            title="All Specialized Healthcare Programs" 
            subtitle="Verbatim Guides"
          />

          <div className="grid-12">
            {detailedServices.map((svc) => (
              <div key={svc.slug} className="col-4">
                <ServiceCard 
                  title={svc.title}
                  description={svc.paragraphs[0]}
                  to={`/services/${svc.slug}`}
                />
              </div>
            ))}
            
            {/* Manual entry for Family Planning which does not have a detailed article */}
            <div className="col-4">
              <ServiceCard 
                title="Family Planning & Sterilisation Services"
                description="Comprehensive counseling and clinical guidance for family planning and sterilization procedures by experienced specialists."
                to="/services/family-planning-sterilisation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keywords tag cloud for SEO */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionTitle 
            title="Search Insights & Clinical Keywords" 
            subtitle="SEO Tags"
          />
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            {serviceKeywords.map((kw, idx) => (
              <span key={idx} style={{
                fontSize: "0.85rem",
                background: "var(--section-alt)",
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-light)",
                color: "var(--primary)"
              }}>
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
