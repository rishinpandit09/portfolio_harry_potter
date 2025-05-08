import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frontend Frameworks & Tools",
    skills: ["React.js", "Streamlit", "Plotly"],
  },
  {
    category: "Backend Frameworks",
    skills: ["Spring Boot", "Flask", "Node.js", "Express.js", "Django"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "SQL"],
  },
  { category: "DevOps & Cloud", skills: ["Docker", "Kubernetes", "AWS"] },
  { category: "Messaging & Integration", skills: ["RabbitMQ", "Tessie API"] },
  { category: "Security & Auth", skills: ["Auth0"] },
  {
    category: "Data Science & ML",
    skills: ["Pandas", "Scikit-learn", "TF-IDF"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section pt-0">
      {/* Spells & Charms uses Experience heading style */}
      <h3 className="text-2xl font-lumos text-ravenclaw mt-8">
        Spells & Charms
      </h3>

      <div className="max-w-3xl mx-auto">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="mb-6">
            {/* Apply role/company theme and size to all category headers */}
            <strong className="block mb-1 text-gryffindor font-lumos text-xl">
              {cat.category}
            </strong>
            <div className="flex flex-wrap gap-4">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={`${idx}-${i}`}
                  className="skill-card"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
