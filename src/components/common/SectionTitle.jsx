/* src/components/common/SectionTitle.jsx */

export default function SectionTitle({ title, subtitle, centered = true, uppercase = true }) {
  return (
    <div className={`section-header ${centered ? "text-center" : ""}`}>
      {subtitle && <span className="uppercase">{subtitle}</span>}
      <h2 style={{ marginTop: subtitle ? "0.5rem" : "0" }}>{title}</h2>
    </div>
  );
}
