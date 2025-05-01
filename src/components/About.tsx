import { FaGithub, FaLinkedin } from "react-icons/fa";

const exp = [
  {
    role: "Software Engineer Intern",
    company: "University of Windsor",
    period: "Jan 2025 – Apr 2025",
    loc: "Windsor, Ontario",
    skills: "Python, Pandas, PostgreSQL, Docker",
  },
  {
    role: "Software Engineer",
    company: "Navtech",
    period: "Jul 2023 – Nov 2023",
    loc: "Hyderabad, India",
    skills: "AWS, Docker, Django, FastAPI, React.js",
  },
  {
    role: "Software Engineer Intern",
    company: "CloudDefense.AI",
    period: "Mar 2023 – Jun 2023",
    loc: "Palo Alto, CA",
    skills: "Java, Spring Boot, AWS, React.js, Docker",
  },
  {
    role: "Software Intern",
    company: "Lenskart.com",
    period: "Feb 2022 – Aug 2022",
    loc: "Bengaluru, India",
    skills: "Java, Spring Boot, Python, JS",
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
  return (
    <section id="about" className="section !mt-0 pt-0">
      <h2 className="text-3xl font-lumos text-slytherin sparkle">About Me</h2>

      {/* Brief description */}
      <p className="max-w-xl mx-auto text-ravenclaw mb-6">
        I am a wizardly software engineer with a passion for crafting enchanting
        digital experiences. Skilled in Python, JavaScript, and cloud-native
        technologies, I transform complex problems into scalable, delightful
        solutions.
      </p>

      {/* Social links */}
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/rishinpandit09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gryffindor hover:text-gryffindor/80 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rishin-pandit09/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-slytherin hover:text-slytherin/80 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>

      <h3 className="text-2xl font-lumos text-ravenclaw mt-8">Experience</h3>
      <ul className="space-y-4">
        {exp.map((e, i) => (
          <li key={i} className="card text-left">
            <strong className="block mb-1 text-gryffindor font-lumos">
              {e.role} @ {e.company}
            </strong>
            <span className="text-sm text-ravenclaw block mb-2">
              {e.period} • {e.loc}
            </span>
            <p className="text-sm text-ravenclaw">Skills: {e.skills}</p>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-lumos text-ravenclaw mt-8">Education</h3>
      <ul className="space-y-3">
        {edu.map((e, i) => (
          <li key={i} className="card text-left">
            <strong className="text-gryffindor font-lumos">{e.school}</strong>:{" "}
            {e.degree} ({e.period})
          </li>
        ))}
      </ul>
    </section>
  );
}
