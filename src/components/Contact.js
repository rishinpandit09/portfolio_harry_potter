import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function Contact() {
    const [msg, setMsg] = useState("");
    return (_jsxs("section", { id: "contact", className: "section", children: [_jsx("h2", { className: "text-3xl font-lumos text-ravenclaw sparkle", children: "Owl Post" }), _jsx("textarea", { rows: 4, className: "w-full p-4 bg-parchment/80 border-2 border-wand rounded-lg mb-4 resize-none focus:ring-2 focus:ring-patronus text-ravenclaw", placeholder: "Scribe your message for the owls\u2026", value: msg, onChange: (e) => setMsg(e.target.value) }), _jsx("button", { className: "btn", children: "Send via Owl" })] }));
}
