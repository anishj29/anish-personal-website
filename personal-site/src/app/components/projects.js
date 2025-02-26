import WebIcon from '@mui/icons-material/Web';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const projects = [
  {
    name: "Personal Website",
    description:
      "My personal website built from scratch using React JS, Next JS, and Tailwind CSS.",
    techStack: "React.js, Next.js, Tailwind CSS",
    url: "https://github.com/anishj29/anish-personal-website",
    component: WebIcon,
  },
  {
    name: "PDF Library",
    description:
      "An online PDF library built for high school students with features like annotation, chapter summaries, and character summaries. Built using Vue JS, Bootstrap 4, and Firebase Firestore.",
    techStack: "Vue JS, Bootstrap, Firebase",
    url: "https://pdf-library.vercel.app/",
    component: PictureAsPdfIcon,
  },
  {
    name: "RU Turbo",
    description:
      "A course sniper website for Rutgers students built by a team of Rutgers students. The project is still a work in progress, so the live website is just a concept.",
    techStack: "React.js, Python, Tailwind CSS, AWS",
    url: "https://ruturbo.com",
    component: SchoolIcon,
  },
  {
    name: "Split App",
    description:
      "A mobile app that enables users to split their bills/expenses by scanning or entering them manually. Built using React Native, Tailwind CSS, and Kotlin.",
    techStack: "React Native, Tailwind CSS, Kotlin",
    url: "https://split-tawny.vercel.app/",
    component: AttachMoneyIcon,
  },
];

export default function Projects() {
  return (
    <div className="pt-20 pb-20 projects-container w-full bg-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <p className="mt-2 text-center text-lg">Click on any project to learn more</p>
        <div className="mt-10 grid grid-cols-2 gap-4 justify-items-center items-stretch">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-box bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-lg flex flex-col h-full"
            >
              {/* Header row: Icon and Title aligned with text left but vertically centered */}
              <div className="flex items-center mb-4 gap-4">
                {project.component && (
                  <project.component style={{ fontSize: 40 }} className="text-blue-500" />
                )}
                <h3 className="text-xl font-semibold text-black">{project.name}</h3>
              </div>
              {/* Description */}
              <div className="flex-1">
                <p className="text-black mb-2">{project.description}</p>
              </div>
              {/* Tech Stack */}
              <p className="text-sm text-black">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
