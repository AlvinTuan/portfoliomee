import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Intern at VNPAY",
      period: "2023-2024",
      description: [
        "Develop and optimize web interfaces with React/Next, TypeScript, Sass, Ant Design.",
        "Working with RESTful API, Redux (Redux Thunk) to manage application state.",
        "Collaborate with backend team and testers to test, debug and optimize performance.",
        "Improved accessibility and ensured web pages were responsive to different devices.",
        "Participate in development some internal company projects.",
      ],
    },
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Work Experience</h2>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-poppins font-semibold">
                  {exp.title}
                </h3>
                <span className="text-primary font-medium">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
