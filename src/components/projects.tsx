import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description:
        "An outline of my career background is given in the project.  Details about my technical proficiency, finished projects, and web development work history. ",
      github: "https://github.com/AlvinTuan/portfoliomee",
      tech: ["NextJS", "Typescript", "Framer Motation", "TailwindCSS"],
    },
    {
      id: 2,
      title: "Todo App",
      description:
        "Application of personal work management with additional, editing and deletion features. ",
      github: "https://github.com/AlvinTuan/todo_ant",
      tech: ["ReactJS", "TypeScript", "TailwindCSS", "Ant Design"],
    },
    {
      id: 3,
      title: "Restaurant Manager",
      description:
        "An app for restaurant managers that facilitates staff coordination, order administration,book a table with the QR code, and payments.",
      github: "https://github.com/AlvinTuan/restaurant_manager",
      tech: [
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn/UI",
        "Axios",
        "RTK Query",
        "NodeJS",
        "Fastify",
        "Prisma",
        "SQL Lite",
        "WebSocket",
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
