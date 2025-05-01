import React, { useState } from "react";
import NavLink from "./NavLink";
import hogwartsCrest from "../assets/hogwarts-crest.svg";

const SECTIONS = ["Home", "About", "Skills", "Projects", "Contact"] as const;
type Section = (typeof SECTIONS)[number];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<Section>("Home");

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* Full-width Navbar with wooden texture */}
      <nav className="navbar">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo replaced by Hogwarts crest */}
          <a href="#home" onClick={() => setActive("Home")}>
            <img
              src={hogwartsCrest}
              alt="Hogwarts Crest"
              className="w-16 h-16 filter invert"
            />
          </a>

          <ul className="flex items-center gap-6 sm:gap-8">
            {SECTIONS.map((sec) => (
              <li key={sec}>
                <NavLink
                  href={`#${sec.toLowerCase()}`}
                  label={sec}
                  isActive={active === sec}
                  onClick={() => setActive(sec)}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main content centered */}
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 space-y-24">
        {children}
      </main>

      <footer className="relative z-10 text-center py-6 text-sm text-ravenclaw bg-parchment/50">
        © 2025 Rishin Pandit • Mischief Managed ⚡
      </footer>
    </div>
  );
}
