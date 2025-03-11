import { motion } from "framer-motion";

export default function About() {
  const technicalSkills = [
    "Technical skills: ReactJS, NextJS, JavaScript, Typescript, Tailwind, Ant Design, Sass, Shacdn/ui.",
    "Technical additional skills: Firebase, Git, Postman, etc.",
    "Soft skills: Teamwork, Time Management, Flexibility, Adaptability.",
  ];

  const languageSkills = ["Vietnamese - Native language", "English - B1 Aptis"];

  return (
    <div className="section-container">
      <h2 className="section-title">About</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="section-subtitle">Skills</h3>
            <ul className="list-disc list-inside space-y-2">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-tag"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <li>
                    <strong>
                      {skill.substring(0, skill.indexOf(":") + 1)}
                    </strong>
                    {skill.substring(skill.indexOf(":") + 1)}
                  </li>
                </motion.div>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm h-full">
            <h3 className="section-subtitle">Language</h3>
            <ul className="list-disc list-inside space-y-2">
              {languageSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-tag"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <li>
                    <strong>
                      {skill.substring(0, skill.indexOf("-") + 1)}
                    </strong>
                    {skill.substring(skill.indexOf("-") + 1)}
                  </li>
                </motion.div>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
