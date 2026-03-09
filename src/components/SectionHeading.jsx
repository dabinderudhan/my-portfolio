import React from "react";

function SectionHeading({ kicker, title }) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeading;
