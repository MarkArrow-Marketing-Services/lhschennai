/* src/pages/Insights.jsx */
import { useEffect, useState } from "react";
import { Link, useLocation, useParams, Navigate } from "react-router-dom";
import { ChevronRight, ArrowLeft, Calendar, User, Clock, BookOpen } from "lucide-react";
import { detailedServices } from "../data/contentData";
import SectionTitle from "../components/common/SectionTitle";
import BlogCard from "../components/common/BlogCard";
import Button from "../components/common/Button";
import CTASection from "../components/common/CTASection";

export default function Insights() {
  const { slug } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter || "all");

  useEffect(() => {
    if (slug) {
      const post = detailedServices.find(s => s.slug === slug);
      if (post) {
        document.title = `${post.articleTitle.replace("Title: ", "")} | London Harley Street Insights`;
      }
    } else {
      document.title = "Health Insights & Education | London Harley Street";
    }
  }, [slug]);

  useEffect(() => {
    setSelectedCategory(categoryFilter || "all");
  }, [categoryFilter]);

  // Helper to determine blog category
  const getCategoryName = (svcSlug) => {
    if (["gynecology-minimally-invasive-surgery", "hysteroscopy-advanced-uterine-care"].includes(svcSlug)) return "Gynecology";
    if (["fertility-preconception-care", "premarital-sexual-health-counselling"].includes(svcSlug)) return "Fertility";
    if (["high-risk-pregnancy-fetal-medicine", "pregnancy-scans-advanced-ultrasound", "fetal-medicine-in-utero-interventions"].includes(svcSlug)) return "Pregnancy";
    if (["diagnostic-imaging-scan-services", "advanced-genetic-prenatal-testing", "laboratory-clinical-testing"].includes(svcSlug)) return "Diagnostics";
    if (["holistic-pregnancy-wellness"].includes(svcSlug)) return "Wellness";
    return "Women's Health";
  };

  // Render Single Post View
  if (slug) {
    const post = detailedServices.find(s => s.slug === slug);
    if (!post) {
      return <Navigate to="/insights" replace />;
    }

    return (
      <div className="insights-post-page" style={{ marginTop: "80px" }}>
        <section className="section" style={{ background: "var(--white)" }}>
          <div className="container">
            <Link to="/insights" className="flex align-center gap-1" style={{ marginBottom: "2.5rem", display: "inline-flex", fontWeight: "500" }}>
              <ArrowLeft size={16} /> Back to All Insights
            </Link>

            <div style={{ maxWidth: "860px", margin: "0 auto" }}>
              {/* Blog Header */}
              <div style={{ marginBottom: "3rem" }}>
                <span className="uppercase">{getCategoryName(post.slug)}</span>
                <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--h1-fs)", marginTop: "1rem", lineHeight: "1.25", color: "var(--dark-text)" }}>
                  {post.articleTitle.replace("Title: ", "")}
                </h1>
                
                <div style={{ display: "flex", gap: "2rem", alignItems: "center", marginTop: "1.5rem", color: "var(--body-text)", fontSize: "0.9rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "1.5rem" }}>
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
              <div className="verbatim-blog-content" style={{ lineHeight: "1.8", color: "var(--dark-text)", fontSize: "1.05rem" }}>
                {post.paragraphs.map((para, idx) => (
                  <p key={idx} style={{ marginBottom: "1.5rem", whiteSpace: "pre-line" }}>
                    {para}
                  </p>
                ))}

                {post.sections.map((sec, idx) => (
                  <div key={idx} style={{ marginTop: "2.5rem" }}>
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.5rem",
                      color: "var(--primary)",
                      marginBottom: "1rem",
                      borderLeft: "4px solid var(--secondary)",
                      paddingLeft: "1rem"
                    }}>
                      {sec.subHeading}
                    </h3>
                    <p style={{ whiteSpace: "pre-line", marginBottom: "1.5rem" }}>
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "4rem", borderTop: "1px solid var(--border-light)", paddingTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "0.95rem" }}>Consult Our Specialists</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--body-text)", margin: 0 }}>
                    Discuss this medical topic and related concerns with our clinical team.
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

  // Categories list
  const categoriesList = ["all", "Fertility", "Pregnancy", "Gynecology", "Diagnostics", "Wellness"];

  // Filter articles
  const filteredArticles = detailedServices.filter(svc => {
    if (selectedCategory === "all") return true;
    return getCategoryName(svc.slug).toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="insights-page" style={{ marginTop: "80px" }}>
      {/* Hero Header */}
      <section className="insights-hero" style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, var(--section-alt) 0%, #FFFFFF 100%)",
        borderBottom: "1px solid var(--border-light)",
        textAlign: "center"
      }}>
        <div className="container">
          <span className="uppercase">Medical Library</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--h1-fs)", marginTop: "1rem" }}>
            Health Insights & Education
          </h1>
          <p style={{ maxWidth: "680px", margin: "1.5rem auto 0", color: "var(--body-text)", fontSize: "1.05rem" }}>
            Evidence-based medical publications, health guides, and fertility education written by our clinical experts.
          </p>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section style={{ background: "var(--white)", borderBottom: "1px solid var(--border-light)", padding: "1.5rem 0" }}>
        <div className="container flex justify-center gap-2" style={{ flexWrap: "wrap" }}>
          {categoriesList.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory.toLowerCase() === cat.toLowerCase() ? "var(--primary)" : "transparent",
                color: selectedCategory.toLowerCase() === cat.toLowerCase() ? "var(--white)" : "var(--primary)",
                border: "1px solid var(--primary)",
                padding: "0.5rem 1.5rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.9rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "var(--transition-fast)"
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="grid-12">
            {filteredArticles.length > 0 ? (
              filteredArticles.map(svc => (
                <div key={svc.slug} className="col-4">
                  <BlogCard 
                    slug={svc.slug}
                    title={svc.articleTitle.replace("Title: ", "")}
                    category={getCategoryName(svc.slug)}
                    snippet={svc.paragraphs[0].substring(0, 140) + "..."}
                  />
                </div>
              ))
            ) : (
              <div className="col-12 text-center" style={{ padding: "4rem 0" }}>
                <h3>No articles found in this category.</h3>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
