import projects from "./project";
import profile from './assets/profile.jpg';

function App() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      {/* Navbar */}
  <nav className="w-full flex justify-center items-center mb-16 sticky top-4 z-50 px-6 py-4 rounded-xl bg-black/30 backdrop-blur-md border border-gray-700 shadow-lg max-w-4xl mx-auto">
  <ul className="flex gap-10 text-lg font-medium">
    <li>
      <a href="#about" className="hover:text-blue-400 transition duration-200">
        About
      </a>
    </li>
    <li>
      <a href="#projects" className="hover:text-blue-400 transition duration-200">
        Projects
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-blue-400 transition duration-200">
        Contact
      </a>
    </li>
  </ul>
</nav>


      {/* Hero Section */}
    <section id="about" className="text-center mb-20 pt-8 scroll-mt-28">
        <img
          src={profile}
          alt="Aryan"
          className="mx-auto rounded-full w-40 h-40 mb-6 border-4 border-blue-400 shadow-lg"
        />
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
          Turning Ideas Into Interactive Experiences
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-300 italic">
          I'm a Full Stack Developer who loves building modern web apps with the MERN stack, integrating real-time systems, and exploring AI to create intuitive digital products.
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 px-6 py-3 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Get In Touch
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20 pt-24 scroll-mt-28">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-500 text-sm rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
     <section id="contact" className="text-center mb-20 pt-24 scroll-mt-28">
        <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
          Contact Me
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Email Card */}
          <div className="relative group bg-gray-800 rounded-xl p-8 shadow-xl overflow-hidden border-2 border-transparent hover:border-blue-400 transition-all">
            <div className="absolute inset-0 bg-blue-500 opacity-10 blur-2xl rounded-xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative flex flex-col items-center z-10">
              <svg
                className="w-14 h-14 text-blue-400 mb-4 group-hover:animate-bounce transition-all"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2h2m4 0v6m0 0l-3-3m3 3l3-3" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Email Me</h3>
              <p className="text-gray-300">
                <a href="mailto:aryankhandelwal467@gmail.com" className="text-blue-400 hover:underline">
                  aryankhandelwal467@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Socials Card */}
          <div className="relative group bg-gray-800 rounded-xl p-8 shadow-xl overflow-hidden border-2 border-transparent hover:border-green-400 transition-all">
            <div className="absolute inset-0 bg-green-500 opacity-10 blur-2xl rounded-xl group-hover:opacity-20 transition-opacity"></div>
            <div className="relative flex flex-col items-center z-10">
              <svg
                className="w-14 h-14 text-green-400 mb-4 group-hover:animate-bounce transition-all"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 12V12m0 0L3 8m12 4l9-4" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Socials</h3>
              <p className="text-gray-300 mb-2">
                🌐 <a href="https://www.linkedin.com/in/aryan-khandelwal-5b4507233/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
              </p>
              <p className="text-gray-300">
                🐙 <a href="https://github.com/aryankhandelwal52" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
