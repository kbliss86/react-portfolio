import React from 'react';

const Project = ({ title, description, technologies, imageUrl, projectUrl }) => {
  return (
    <div className="project border border-gray-300 rounded-md p-4 mb-8">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-800 text-xl mb-2">{description}</p>
      <p className="text-gray-700 text-xl mb-2">Technologies: {technologies}</p>
      <img src={imageUrl} alt={title} className="max-w-full h-auto mb-4" />
      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline inline-block text-lg"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default Project;

