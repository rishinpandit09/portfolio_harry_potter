import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const projects = [
    {
        title: "Accountill – Scalable MERN Stack Invoicing Platform",
        link: "https://github.com/rishinpandit09/Accountill-Scalable-MERN-Stack-Invoicing-Platform",
        tech: [
            "Node.js",
            "Express.js",
            "React.js",
            "MongoDB",
            "Redis",
            "RabbitMQ",
            "Docker",
            "Kubernetes",
            "AWS",
        ],
        bullets: [
            "Crafted RESTful and GraphQL APIs to manage invoicing and payments with magical precision.",
            "Wove an event-driven architecture with RabbitMQ, enchanting invoice statuses.",
            "Deployed on Kubernetes, ensuring spells of high availability and analytics.",
        ],
    },
    {
        title: "Tesla Fleet Analytics Dashboard",
        link: "https://github.com/rishinpandit09/Fleet-Energy-Cost-Analytics",
        tech: ["Python", "Flask", "PostgreSQL", "Plotly", "Tessie API"],
        bullets: [
            "Conjured a dashboard to track Tesla fleet data like speed and battery.",
            "Integrated Tessie API to summon live vehicle telemetry.",
            "Crafted efficient PostgreSQL queries for seamless data handling.",
        ],
    },
    {
        title: "Mutual Fund Recommender System",
        link: "https://github.com/rishinpandit09/Mutual-Fund-Recommender-System",
        tech: ["Python (Flask)", "Pandas", "Scikit-learn", "TF-IDF", "Streamlit"],
        bullets: [
            "Built a recommendation engine using cosine similarity over 14K funds.",
            "Used TF-IDF to match investor goals with fund characteristics.",
            "Created an interactive UI with Streamlit for real-time suggestions.",
        ],
    },
    {
        title: "VidInsight – YouTube Analytics and Recommendations",
        link: "https://github.com/rishinpandit09/VidInsight-YouTube-Analytics-and-Recommendations",
        tech: [
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "Auth0",
            "Graph Data Structures",
        ],
        bullets: [
            "Crafted a MERN stack app to enhance YouTube content discovery.",
            "Implemented Auth0 for secure, swift logins with no breaches.",
            "Designed a graph-based engine for personalized video suggestions.",
        ],
    },
    {
        title: "Online Compiler – Multi-Language Cloud-Based Compiler",
        link: "https://github.com/rishinpandit09/Online-Compiler-Multi-Language-Cloud-Based-Compiler",
        tech: ["React", "Node.js", "Express", "JavaScript", "HTML", "CSS"],
        bullets: [
            "Developed a compiler supporting C, C++, Python, Java, and JavaScript.",
            "Added advanced code management features for usability.",
            "Integrated a snippet library for quick spell-casting.",
        ],
    },
    {
        title: "Expense Tracker Web App",
        link: "https://github.com/rishinpandit09/expense-tracker/tree/main",
        tech: ["Node.js", "Express.js", "MongoDB", "Auth0"],
        bullets: [
            "Built a secure app for tracking expenses with Auth0 login.",
            "Enabled CSV import/export and CRUD operations in MongoDB.",
            "Designed an intuitive UI with real-time budget summaries.",
        ],
    },
];
export default function Projects() {
    return (_jsxs("section", { id: "projects", className: "section", children: [_jsx("h2", { className: "text-3xl font-lumos text-slytherin sparkle", children: "Mischief Managed (Projects)" }), _jsx("div", { className: "space-y-8", children: projects.map((p, i) => (_jsxs("div", { className: "card text-left", children: [_jsx("a", { href: p.link, className: "text-2xl font-lumos text-gryffindor hover:underline", target: "_blank", rel: "noopener noreferrer", children: p.title }), _jsxs("p", { className: "mt-1 text-sm text-ravenclaw", children: ["Tech: ", p.tech.join(", ")] }), _jsx("ul", { className: "list-disc pl-5 mt-2 space-y-1 text-ravenclaw", children: p.bullets.map((b, j) => (_jsx("li", { children: b }, j))) })] }, i))) })] }));
}
