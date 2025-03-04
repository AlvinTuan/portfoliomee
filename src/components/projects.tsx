import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description:
        "I made this website to promote myself, emphasize my abilities, and display my work.",
      github: "https://github.com/yourusername/portfolio",
      tech: ["NextJS", "TypeScript", "TailwindCSS"],
    },
    {
      id: 2,
      title: "Todo List",
      description:
        "A sleek and intuitive To-Do List app to help you stay organized and productive.",
      github: "https://github.com/yourusername/todo-list",
      tech: ["ReactJS", "TypeScript", "TailwindCSS", "Ant Design"],
    },
    {
      id: 3,
      title: "Restaurant Manager",
      description:
        "An app for restaurant managers that facilitates staff coordination, order administration,book a table with the QR code, and payments.",
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/restaurant-manager",
      tech: [
        "React",
        "TailwindCSS",
        "ShadCn/UI",
        "Redux",
        "RTK Query",
        "RESTfulAPI",
        "Axios",
        "Zod",
        "SocketIO",
        "React Helmet",
      ],
    },
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div> */}

            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-poppins font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <FiGithub className="mr-1" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
