import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import avatar from "../assets/gibhli.png";
export default function Hero() {
    return (_jsxs(motion.section, { id: "home", className: "section", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsx(motion.img, { src: avatar, alt: "Rishin Ghibli avatar", className: "avatar", initial: { scale: 0 }, animate: { scale: 1 }, transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.5 } }), _jsx(motion.h2, { className: "text-5xl font-lumos text-gryffindor mb-2 sparkle", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.0, duration: 0.5 }, children: "Welcome, I'm Rishin \u26A1" }), _jsx(motion.p, { className: "max-w-xl mx-auto text-lg text-ravenclaw", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1.2, duration: 0.5 }, children: "Enthusiastic wizard crafting magical digital spells and potions." })] }));
}
