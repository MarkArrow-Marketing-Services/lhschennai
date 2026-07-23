import React from "react";

export default function VideoHighlightCard({
  eyebrow,
  title,
  description,
  videoSrc,
  altText = "Doctor video feature",
  variant = "default",
  className = "",
}) {
  return (
    <article
      className={`video-highlight-card ${variant === "compact" ? "video-highlight-card--compact" : ""} ${className}`.trim()}
    >
      <div className="video-highlight-body">
        <div className="video-highlight-label">{eyebrow}</div>
        <h4>{title}</h4>
        {description ? <p>{description}</p> : null}
      </div>

      <div className="video-highlight-media" role="group" aria-label={altText}>
        <video
          controls
          playsInline
          preload="metadata"
          loading="lazy"
          aria-label={altText}
          title={title}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </article>
  );
}
