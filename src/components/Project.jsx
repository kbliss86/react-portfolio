import React from 'react';

const Project = ({ title, description, technologies, imageUrl, projectUrl }) => {
  return (
    <div className="project bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-3xl font-extrabold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {title}
      </h3>
      <p className="text-gray-300 text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {description}
      </p>
      <p className="text-gray-400 text-md mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <strong>Technologies:</strong> {technologies}
      </p>
      <img src={imageUrl} alt={title} className="max-w-full h-auto mb-4 rounded-lg" />
      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg inline-block hover:bg-blue-700 transition duration-300"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default Project;