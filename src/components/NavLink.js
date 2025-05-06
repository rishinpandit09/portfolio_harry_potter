import { jsx as _jsx } from "react/jsx-runtime";
export default function NavLink({ href, label, isActive, onClick }) {
    return (_jsx("a", { href: href, onClick: onClick, className: `nav-link ${isActive ? "nav-link-active" : ""}`, children: label }));
}
