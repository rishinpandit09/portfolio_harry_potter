import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("section", { id: "skills", className: "section pt-0", children: [_jsx("h3", { className: "text-2xl font-lumos text-ravenclaw mt-8", children: "Spells & Charms" }), _jsx("div", { className: "max-w-3xl mx-auto", children: skillCategories.map((cat, idx) => (_jsxs("div", { className: "mb-6", children: [_jsx("strong", { className: "block mb-1 text-gryffindor font-lumos text-xl", children: cat.category }), _jsx("div", { className: "flex flex-wrap gap-4", children: cat.skills.map((skill, i) => (_jsx(motion.span, { className: "skill-card", initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.05 }, whileHover: { scale: 1.05 }, children: skill }, `${idx}-${i}`))) })] }, idx))) })] }));
}
