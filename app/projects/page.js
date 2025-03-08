"use client";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again.");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-5">My Projects</h1>

      {error ? (
        <p className="text-red-500">{error}</p> // Show error if any
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-300">{project.description}</p>
              <p className="text-sm text-gray-400">{project.tech_stack}</p>
              <div className="mt-3 flex gap-3">
                {project.github_link && (
                  <a href={project.github_link} className="text-blue-400" target="_blank">
                    GitHub
                  </a>
                )}
                {project.live_demo && (
                  <a href={project.live_demo} className="text-green-400" target="_blank">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
