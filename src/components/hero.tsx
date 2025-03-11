import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiHome, FiMail, FiPhone } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="section-container flex flex-col items-center pt-32 md:pt-40 relative">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
          <Image
            src="/avatarletuana.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-2">
          LE ANH TUAN
        </h1>

        <h2 className="text-xl md:text-2xl font-poppins text-primary mb-4">
          Front-end Developer
        </h2>

        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Bachelor of Data Science, Hanoi University of Science - VNU
          (2020-2024)
        </p>

        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Although my experience with JavaScript is limited to approximately a
          year, I&apos;m working to improve my skills so that I can provide the
          greatest user experiences. I think that making the source code simpler
          will contribute to the development of more adaptable apps. I am
          amiable, cooperative, and a pleasure to work with.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            <FiMail className="text-primary" />
            <span>letuan7923@gmail.com</span>
          </Link>

          <Link
            href="https://github.com/AlvinTuan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            <FiGithub className="text-primary" />
            <span>GitHub</span>
          </Link>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            <FiHome className="text-primary" />
            <span>Ha Noi</span>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            <FiPhone className="text-primary" />
            <span>+84 912099 926</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
