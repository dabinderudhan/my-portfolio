import React from "react";
import { motion } from "framer-motion";

function SkillCard({ group }) {
  const Icon = group.icon;

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
    >
      <div className="card-icon">
        <Icon />
      </div>
      <h3>{group.title}</h3>
      <ul className="list">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SkillCard;
