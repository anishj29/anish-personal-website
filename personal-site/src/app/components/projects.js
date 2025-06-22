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
    name: "Split App",
    description:
      "A mobile app that enables users to split their bills/expenses by scanning or entering them manually. Built using React Native, Tailwind CSS, and Kotlin.",
    techStack: "React Native, Tailwind CSS, Kotlin",
    url: "https://split-tawny.vercel.app/",
    component: AttachMoneyIcon,
  },
  {
    name: "InvestSmart AI",
    description:
      "A web application that uses AI to analyze stock market data and provide investment recommendations. Built using React.js, Python, and Tailwind CSS.",
    techStack: "React.js, Python, Tailwind CSS",
    url: "https://v0-investor-guidance-web-app.vercel.app/dashboard",
    component: AttachMoneyIcon,
  }
];

export default function Projects() {
  return (
    <div className="pt-24 pb-24 projects-container w-full bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 font-light max-w-2xl mx-auto leading-relaxed">
            Explore my latest work and creative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Header with icon and title */}
                <div className="flex items-center mb-6 gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {project.component && (
                      <project.component 
                        style={{ fontSize: 32 }} 
                        className="text-white" 
                      />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.name}
                  </h3>
                </div>
                
                {/* Description */}
                <div className="mb-6">
                  <p className="text-cyan-100 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wide">
                    Tech Stack:
                  </span>
                  <span className="text-sm text-cyan-100 font-medium">
                    {project.techStack}
                  </span>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-cyan-200 text-lg mb-4">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/anishj29" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View GitHub Profile
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
