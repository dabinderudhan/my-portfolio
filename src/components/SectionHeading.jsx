import React from "react";
import FadeIn from "./FadeIn";

function SectionHeading({ kicker, title }) {
  return (
    <div className="section-heading">
      <FadeIn>
        <div className="section-label">{kicker}</div>
      </FadeIn>
      <FadeIn delay={0.08}>
        <h2>{title}</h2>
      </FadeIn>
    </div>
  );
}

export default SectionHeading;
