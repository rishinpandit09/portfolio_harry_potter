import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");
  return (
    <section id="contact" className="section">
      <h2 className="text-3xl font-lumos text-ravenclaw sparkle">Owl Post</h2>
      <textarea
        rows={4}
        className="w-full p-4 bg-parchment/80 border-2 border-wand rounded-lg mb-4 resize-none focus:ring-2 focus:ring-patronus text-ravenclaw"
        placeholder="Scribe your message for the owls…"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button className="btn">Send via Owl</button>
    </section>
  );
}
