/* src/pages/Insights.jsx */
import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, User, Clock } from "lucide-react";
import { detailedServices } from "../data/contentData";
import Button from "../components/common/Button";
import CTASection from "../components/common/CTASection";

export default function Insights() {
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      const post = detailedServices.find((s) => s.slug === slug);
      if (post) {
        document.title = `${post.articleTitle.replace("Title: ", "")} | London Harley Street Insights`;
      }
    } else {
      document.title = "Health Insights & Education | London Harley Street";
    }
  }, [slug]);

  // Helper to determine blog category
  const getCategoryName = (svcSlug) => {
    if (
      [
        "gynecology-minimally-invasive-surgery",
        "hysteroscopy-advanced-uterine-care",
      ].includes(svcSlug)
    )
      return "Gynecology";
    if (
      [
        "fertility-preconception-care",
        "premarital-sexual-health-counselling",
      ].includes(svcSlug)
    )
      return "Fertility";
    if (
      [
        "high-risk-pregnancy-fetal-medicine",
        "pregnancy-scans-advanced-ultrasound",
        "fetal-medicine-in-utero-interventions",
      ].includes(svcSlug)
    )
      return "Pregnancy";
    if (
      [
        "diagnostic-imaging-scan-services",
        "advanced-genetic-prenatal-testing",
        "laboratory-clinical-testing",
      ].includes(svcSlug)
    )
      return "Diagnostics";
    if (["holistic-pregnancy-wellness"].includes(svcSlug)) return "Wellness";
    return "Women's Health";
  };

  // Render Single Post View
  if (slug) {
    const post = detailedServices.find((s) => s.slug === slug);
    if (!post) {
      return <Navigate to="/insights" replace />;
    }

    return (
      <div className="insights-post-page" style={{ marginTop: "80px" }}>
        <section className="section" style={{ background: "var(--white)" }}>
          <div className="container">
            <Link
              to="/insights"
              className="flex align-center gap-1"
              style={{
                marginBottom: "2.5rem",
                display: "inline-flex",
                fontWeight: "500",
              }}
            >
              <ArrowLeft size={16} /> Back to All Insights
            </Link>

            <div style={{ maxWidth: "860px", margin: "0 auto" }}>
              {/* Blog Header */}
              <div style={{ marginBottom: "3rem" }}>
                <span className="uppercase">{getCategoryName(post.slug)}</span>
                <h1
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--h1-fs)",
                    marginTop: "1rem",
                    lineHeight: "1.25",
                    color: "var(--dark-text)",
                  }}
                >
                  {post.articleTitle.replace("Title: ", "")}
                </h1>

                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "center",
                    marginTop: "1.5rem",
                    color: "var(--body-text)",
                    fontSize: "0.9rem",
                    borderBottom: "1px solid var(--border-light)",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <div className="flex align-center gap-1">
                    <User size={16} color="var(--secondary)" />
                    <span>By London Harley Street Clinical Team</span>
                  </div>
                  <div className="flex align-center gap-1">
                    <Clock size={16} color="var(--secondary)" />
                    <span>10 Min Read</span>
                  </div>
                </div>
              </div>

              {/* Blog Post Content (Verbatim) */}
              <div
                className="verbatim-blog-content"
                style={{
                  lineHeight: "1.8",
                  color: "var(--dark-text)",
                  fontSize: "1.05rem",
                }}
              >
                {post.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    style={{ marginBottom: "1.5rem", whiteSpace: "pre-line" }}
                  >
                    {para}
                  </p>
                ))}

                {post.sections.map((sec, idx) => (
                  <div key={idx} style={{ marginTop: "2.5rem" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.5rem",
                        color: "var(--primary)",
                        marginBottom: "1rem",
                        borderLeft: "4px solid var(--secondary)",
                        paddingLeft: "1rem",
                      }}
                    >
                      {sec.subHeading}
                    </h3>
                    <p
                      style={{ whiteSpace: "pre-line", marginBottom: "1.5rem" }}
                    >
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "4rem",
                  borderTop: "1px solid var(--border-light)",
                  paddingTop: "3rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.95rem" }}>
                    Consult Our Specialists
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--body-text)",
                      margin: 0,
                    }}
                  >
                    Discuss this medical topic and related concerns with our
                    clinical team.
                  </p>
                </div>
                <Button to="/book-appointment" variant="primary">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    );
  }

  return (
    <div className="insights-page" style={{ marginTop: "80px" }}>
      {/* Hero Header */}
      <section
        className="insights-hero"
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(135deg, var(--section-alt) 0%, #FFFFFF 100%)",
          borderBottom: "1px solid var(--border-light)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span className="uppercase">Medical Library</span>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--h1-fs)",
              marginTop: "1rem",
            }}
          >
            Health Insights & Education
          </h1>
          <p
            style={{
              maxWidth: "680px",
              margin: "1.5rem auto 0",
              color: "var(--body-text)",
              fontSize: "1.05rem",
            }}
          >
            Medical insights and educational resources will be published here.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center" style={{ padding: "3rem 0" }}>
            <h2>New articles coming soon</h2>
            <p style={{ color: "var(--body-text)" }}>
              Please check back for future health and wellness articles.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
