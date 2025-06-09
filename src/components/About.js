import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const exp = [
    {
        role: "Software Engineer Intern",
        company: "University of Windsor",
        period: "Jan 2025 – Apr 2025",
        loc: "Windsor, Ontario",
    },
    {
        role: "Software Engineer",
        company: "Navtech",
        period: "Jul 2023 – Nov 2023",
        loc: "Hyderabad, India",
    },
    {
        role: "Software Engineer Intern",
        company: "CloudDefense.AI",
        period: "Mar 2023 – Jun 2023",
        loc: "Palo Alto, CA",
    },
    {
        role: "Software Intern",
        company: "Lenskart.com",
        period: "Feb 2022 – Aug 2022",
        loc: "Bengaluru, India",
    },
];
const edu = [
    {
        school: "University of Windsor",
        degree: "M.A.Sc. Applied Computing (AI)",
        period: "Jan 2024 – Apr 2025",
    },
    {
        school: "VIT",
        degree: "B.Tech Computer Science (Bioinformatics)",
        period: "2019 – 2023",
    },
];
export default function About() {
    return (_jsxs("section", { id: "about", className: "section !mt-0 pt-0", children: [_jsx("h2", { className: "text-3xl font-lumos text-slytherin sparkle", children: "About Me" }), _jsx("p", { className: "max-w-xl mx-auto text-ravenclaw mb-6", children: "I am a wizardly software engineer with a passion for crafting enchanting digital experiences. Skilled in Python, JavaScript, and cloud-native technologies, I transform complex problems into scalable, delightful solutions." }), _jsxs("div", { className: "flex justify-center space-x-6 mb-8", children: [_jsx("a", { href: "https://github.com/rishinpandit09", target: "_blank", rel: "noopener noreferrer", className: "text-2xl text-gryffindor hover:text-gryffindor/80 transition-colors", children: _jsx(FaGithub, {}) }), _jsx("a", { href: "https://www.linkedin.com/in/rishiin-pandit09/", target: "_blank", rel: "noopener noreferrer", className: "text-2xl text-slytherin hover:text-slytherin/80 transition-colors", children: _jsx(FaLinkedin, {}) })] }), _jsx("h3", { className: "text-2xl font-lumos text-ravenclaw mt-8", children: "Experience" }), _jsx("ul", { className: "space-y-4", children: exp.map((e, i) => (_jsxs("li", { className: "card text-left", children: [_jsxs("strong", { className: "block mb-1 text-gryffindor font-lumos", children: [e.role, " @ ", e.company] }), _jsxs("span", { className: "text-sm text-ravenclaw block mb-2", children: [e.period, " \u2022 ", e.loc] })] }, i))) }), _jsx("h3", { className: "text-2xl font-lumos text-ravenclaw mt-8", children: "Education" }), _jsx("ul", { className: "space-y-3", children: edu.map((e, i) => (_jsxs("li", { className: "card text-left", children: [_jsx("strong", { className: "text-gryffindor font-lumos", children: e.school }), ":", " ", e.degree, " (", e.period, ")"] }, i))) })] }));
}
