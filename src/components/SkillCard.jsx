import React from "react";
import FadeIn from "./FadeIn";

function SkillCard({ group, delay = 0 }) {
  const Icon = group.icon;

  return (
    <FadeIn delay={delay}>
      <div className="skill-card">
        <div className="skill-icon">
          <Icon />
        </div>
        <h3>{group.title}</h3>
        <div className="skill-tags">
          {group.items.map((item) => (
            <span key={item} className="skill-tag">{item}</span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default SkillCard;
