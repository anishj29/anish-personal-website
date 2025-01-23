import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const projects = [
  {
    name: "Personal Website",
    description: "My personal website built from scratch using React JS, Next JS, and Tailwind CSS.",
    techStack: "React.js, Next.js, Tailwind CSS",
    url: "https://github.com/anishj29/anish-personal-website",
    component: AttachMoneyIcon

  },
  {
    name: "PDF Library",
    description: "An online pdf library built for highschool students with features like annotation, chapter summaries, and character summaries. Built using Vue JS, Bootstrap 4, and the Firestore NoSQL service from Firebase.",
    techStack: "Vue JS, Bootstrap, Firebase",
    url: "https://pdf-library.vercel.app/",

  },
  {
    name: "RU Turbo",
    description: "A course sniper website for Rutgers students built by a team of Rutgers students. The project is still a work in progress so the live website is just a concept website.",
    techStack: "React.js, Python, Tailwind CSS, AWS",
    url: "https://ruturbo.vercel.app/",

  },
  {
    name: "Split App",
    description: "A mobile app that enables users to split their bills/expenses by scanning it through their phone or entering it manually. Built using React Native, Tailwind CSS, and Kotlin.",
    techStack: "React Native, Tailwind CSS, Kotlin",
    url: "https://split-tawny.vercel.app/",

  },
];
export default function Projects() {
  return (
    <div className="pt-20 p-20 projects-container text-left w-full bg-cyan-900 text-white">
      <h1 className="text-3xl font-bold">Projects</h1>
      <h4 className="">Click on any project to learn more</h4>

      <div className="mt-10 grid grid-rows-2 flex justify-items-center align-center grid-flow-col gap-4">
        {projects.map((project, index) => (
          <a key={index} href={project.url}
          target="_blank"
          rel="noopener noreferrer" className="project-box flex flex-col justify-items-center align-middle">
            {/* <project.component /> */}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}