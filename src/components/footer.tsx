"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="mb-4 md:mb-0 flex justify-end">
          © {currentYear} letuana. Built with React & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
