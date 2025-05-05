import { motion } from "framer-motion";

const skills = [
  "Java",
  "Spring Boot",
  "Node.js",
  "Express.js",
  "React.js",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Docker",
  "Kubernetes",
  "AWS",
  "Python",
  "Flask",
  "PostgreSQL",
  "Plotly",
  "Tessie API",
  "Pandas",
  "Scikit-learn",
  "TF-IDF",
  "Streamlit",
  "Auth0",
  "Graph Data Structures",
  "JavaScript",
  "HTML",
  "CSS",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="text-3xl font-lumos text-ravenclaw sparkle mb-8">
        Spells & Charms
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card bg-gradient-to-br from-slytherin/80 to-gryffindor/80 text-white drop-shadow-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 12px rgba(255, 255, 255, 0.5)",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
