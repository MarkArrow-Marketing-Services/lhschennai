/* src/components/common/BlogCard.jsx */
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

export default function BlogCard({ slug, title, category, snippet }) {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <BookOpen size={48} strokeWidth={1} />
      </div>
      <div className="blog-card-content">
        <span className="blog-card-meta">{category}</span>
        <h3>{title}</h3>
        <p>{snippet}</p>
        <Link
          to={`/insights/${slug}`}
          className="service-card-link"
          style={{ marginTop: "auto" }}
        >
          <span>Read Article</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
