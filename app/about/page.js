"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-10">
      <h1 className="text-3xl font-bold">About Hassane Jaber</h1>

      <p className="mt-4 text-lg">
        Hi, I&apos;m <span className="font-bold">Hassane Jaber</span>, a passionate Computer Engineering student at 
        Lebanese American University with experience in full-stack development, AI, and teaching.
      </p>

      {/* Education */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Education</h2>
        <p className="text-md">🎓 BE - Computer Engineering, Lebanese American University</p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Skills</h2>
        <p className="text-md">
          Java, JavaScript, C++, Python, Lua, HTML, CSS, PHP, SQL, Laravel, Flask, Bootstrap.
        </p>
      </div>

      {/* Contact Information */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Contact</h2>
        <p>📧 hassane.jaber9@gmail.com</p>
        <p>🔗 
          <a 
            href="https://linkedin.com/in/hassane-jaber-938a12263" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-700 hover:text-blue-500"
          >
            LinkedIn
          </a>
        </p>
        <p>💻 
          <a 
            href="https://github.com/HassaneJaber" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-700 hover:text-blue-500"
          >
            GitHub
          </a>
        </p>
      </div>

      {/* Resume Download Button */}
      <div className="mt-6">
        <Link href="/resume.pdf" download className="px-6 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg inline-block">
          Download Resume
        </Link>
      </div>
    </div>
  );
}
