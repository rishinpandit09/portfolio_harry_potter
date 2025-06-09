import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import NavLink from "./NavLink";
import hogwartsCrest from "../assets/hogwarts-crest.svg";
const SECTIONS = ["Home", "About", "Skills", "Projects", "Contact"];
export default function Layout({ children }) {
    const [active, setActive] = useState("Home");
    return (_jsxs("div", { className: "relative min-h-screen font-sans overflow-x-hidden", children: [_jsx("nav", { className: "navbar", children: _jsxs("div", { className: "flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: [_jsx("a", { href: "#home", onClick: () => setActive("Home"), children: _jsx("img", { src: hogwartsCrest, alt: "Hogwarts Crest", className: "w-16 h-16 filter invert" }) }), _jsx("ul", { className: "flex items-center gap-6 sm:gap-8", children: SECTIONS.map((sec) => (_jsx("li", { children: _jsx(NavLink, { href: `#${sec.toLowerCase()}`, label: sec, isActive: active === sec, onClick: () => setActive(sec) }) }, sec))) })] }) }), _jsx("main", { className: "relative z-10 mx-auto max-w-4xl px-6 py-16 space-y-24", children: children }), _jsx("footer", { className: "relative z-10 text-center py-6 text-sm text-ravenclaw bg-parchment/50", children: "\u00A9 2025 Rishiin Pandit \u2022 Mischief Managed \u26A1" })] }));
}
