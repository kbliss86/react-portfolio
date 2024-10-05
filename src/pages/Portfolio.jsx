import React, { useState } from 'react';
import Project from '../components/Project';

const projects = [
  //Web Apps
  {
    title: 'GrapeTree Application Portal',
    description: 'The GrapeTree Application Portal is a chatbot-powered platform designed to streamline the applicant intake and screening process. Deployed on WordPress and powered by the Teneo.ai SDK, this system integrates deeply with various APIs and backend systems to enhance recruitment efforts and provide a seamless onboarding experience.',
    technologies: 'JavaScript, GroovyScript, CSS, HTML, Teneo.AI, Appache HTTP Server',
    imageUrl: 'https://github.com/kbliss86/teneo-apply-chatbot/blob/main/Screenshot.PNG?raw=true',
    projectUrl: 'https://github.com/kbliss86/teneo-apply-chatbot',
    siteUrl: 'https://apply.grapetree.com/',
    tags: ['JavaScript', 'GroovyScript', 'Web App', 'Articial Intelligence', 'Chatbot'],
    type: 'Web App',
  },
  {
    title: 'GrapeTree Auto-Journal Bot',
    description: 'The GT Journal Bot is an innovative proof-of-concept project designed to auto-transcribe phone calls and summarize them using ChatGPT. The bot then journals the conversation data directly into an Applicant Tracking System (ATS), creating records on both candidate and client profiles.',
    technologies: 'JavaScript, GroovyScript, CSS, HTML, Teneo.AI, DeepGram.AI, ChatGPT, Appache HTTP Server DotEnv, Express.js, nodemon',
    imageUrl: 'https://github.com/kbliss86/gt-journal-bot/blob/main/assets/images/ScreenShot.PNG?raw=true',
    projectUrl: 'https://github.com/kbliss86/gt-journal-bot',
    siteUrl: 'https://whispering-tor-80806-ebdc6d4789ff.herokuapp.com/',
    tags: ['JavaScript', 'GroovyScript', 'Web App', 'Articial Intelligence', 'Chatbot', 'Speech-to-Text'],
    type: 'Web App',
  },
  {
    title: 'GrapeTree SOP RAG Bot',
    description: 'The GrapeTree SOP Bot is an advanced RAG (Retrieve, Augment, Generate) bot designed to assist users within the GrapeTree organization by providing advice, knowledge, instructions, and direct links to Standard Operating Procedures (SOP) documents. This bot leverages Azure Cognitive Services for document indexing, alongside Teneo.AI and ChatGPT to deliver contextual and conversational responses based on user queries.',
    technologies: 'JavaScript, GroovyScript, CSS, HTML, Teneo.AI, ChatGPT, Appache HTTP Server,Azure Cognitive Services',
    imageUrl: 'https://github.com/kbliss86/gt-sop/blob/main/Assets/images/Screenshot.PNG?raw=true',
    projectUrl: 'https://github.com/kbliss86/gt-sop',
    siteUrl: 'https://kbliss86.github.io/gt-sop/',
    tags: ['JavaScript', 'GroovyScript', 'Web App', 'Articial Intelligence', 'Chatbot', 'RAG Bot'],
    type: 'Web App',
  },
  {
    title: 'Course Planner',
    description: 'This project was designed to offer the user the ability to add Subjects, Courses, and Assignments...',
    technologies: 'HTML, CSS, JavaScript, TailwindCSS, Express, React, Apollo Server, GraphQL, Mongoose, MongoDB, JWT, Bcrypt',
    imageUrl: 'https://github.com/bklein1981/Course-Planner/blob/main/client/src/assets/images/screenshot.png?raw=true',
    projectUrl: 'https://github.com/bklein1981/Course-Planner',
    siteUrl: 'https://lit-river-19263-fccc9a14fadb.herokuapp.com/',
    tags: ['React', 'Express', 'Apollo Server', 'Mongoose', 'Node', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Bcrypt', 'Web App'],
    type: 'Web App',
  },
  {
    title: 'Meal Kit Store',
    description: 'This was the second major project I did in my coding bootcamp...',
    technologies: 'HTML, CSS, JavaScript, TailwindCSS, Sequelize, Handlebars, Express, Bcrypt, Dotenv, MySQL2, Express-Session, Connect-Session-Sequelize',
    imageUrl: 'https://github.com/kbliss86/mealkit-store/blob/main/public/assets/mealkit-background.jpg?raw=true',
    projectUrl: 'https://github.com/kbliss86/mealkit-store',
    siteUrl: 'https://guarded-river-52097-feecfdad1f76.herokuapp.com/',
    tags: ['Express', 'Node', 'MySQL', 'Sequelize', 'JavaScript', 'HTML', 'Handlebars', 'CSS', 'Tailwinds', 'API', 'Bcrypt', 'Dotenv', 'Web App'],
    type: 'Web App',
  },
  {
    title: 'Trip Planner',
    description: 'This was the first major project I did in my coding bootcamp...',
    technologies: 'HTML, CSS, JavaScript, Materialize CSS, Google Maps API, Department of Energy API, MapQuest API',
    imageUrl: 'https://github.com/kbliss86/trip-planner/blob/main/assets/resources/image.png?raw=true',
    projectUrl: 'https://github.com/kbliss86/trip-planner',
    siteUrl: 'https://sleepy-cliffs-09388-d7fa6807b016.herokuapp.com/',
    tags: ['Express', 'Node', 'JavaScript', 'HTML', 'CSS', 'Materialize', 'API', 'Web App'],
    type: 'Web App',
  },
  {
    title: 'Tech Blog',
    description: 'This was the first assignment in my coding bootcamp that required true "Full Stack Development"...',
    technologies: 'HTML, CSS, JavaScript, Sequelize, Handlebars, Express, Bcrypt, Dotenv, MySQL2, Express-Session, Connect-Session-Sequelize',
    imageUrl: 'https://github.com/kbliss86/tech-blog/blob/main/public/images/techblog-screenshot.PNG?raw=true',
    projectUrl: 'https://github.com/kbliss86/tech-blog',
    siteUrl: 'https://kbliss-tech-blog-b4fefef9a7ce.herokuapp.com/home/login',
    tags: ['Express', 'Node', 'SQL', 'Sequelize', 'JavaScript', 'HTML', 'Handlebars', 'CSS', 'Bootstrap', 'API', 'Web App'],
    type: 'Web App',
  },
  {
    title: 'Note Taker',
    description: 'This project is designed to offer a user the ability to save notes to a website...',
    technologies: 'HTML, CSS, JavaScript, TailwindCSS, Express',
    imageUrl: 'https://github.com/kbliss86/Express.js-Note-Taker/blob/main/public/assets/images/notetaker-screenshot.PNG?raw=true',
    projectUrl: 'https://github.com/kbliss86/Express.js-Note-Taker',
    siteUrl: 'https://evening-escarpment-51027-6a9d16fccdc5.herokuapp.com/',
    tags: ['Express', 'Node', 'JavaScript', 'HTML', 'CSS', 'Tailwinds', 'Web App'],
    type: 'Web App',
  },
  {
    title: 'Book Search Engine',
    description: 'This project was designed to allow users to search for books using the Google Books API...',
    technologies: 'HTML, CSS, JavaScript, Bootstrap, Express, React, Apollo Server, GraphQL, Mongoose, MongoDB, JWT, Bcrypt',
    imageUrl: 'https://github.com/kbliss86/book--search-engine/blob/main/client/public/booksearchss.PNG?raw=true',
    projectUrl: 'https://github.com/kbliss86/book--search-engine',
    siteUrl: 'https://intense-journey-44444-e26c781da9bb.herokuapp.com/',
    tags: ['React', 'Express', 'Apollo Server', 'Mongoose', 'Node', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Bcrypt', 'Web App'],
    type: 'Web App',
  },
  //Console Apps
  {
    title: 'Point of Sale System',
    description: 'This Project is designed to offer a store the ability to use a cusomizable Point of Sale System so their customers can purchase items!',
    technologies: 'C#, .NET, File I/O',
    imageUrl: 'https://github.com/kbliss86/c-oop-project-1-pos/blob/main/ConsolePic.PNG?raw=true',
    projectUrl: 'https://github.com/kbliss86/c-oop-project-1-pos',
    siteUrl: 'https://github.com/kbliss86/c-oop-project-1-pos',
    tags: ['C#', '.Net', 'Console App',],
    type: 'Console App',
  },
  {
    title: 'ReadMe Generator',
    description: 'This project is designed to offer a user the ability to automatically generate a README.md file...',
    technologies: 'JavaScript, Node.js, Inquirer',
    imageUrl: 'https://github.com/kbliss86/readme-generator/blob/main/assets/readme-generator.gif?raw=true',
    projectUrl: 'https://github.com/kbliss86/readme-generator',
    siteUrl: 'https://github.com/kbliss86/readme-generator',
    tags: ['Node', 'JavaScript', 'Inquirer', 'Console App', 'Dev Tools'],
    type: 'Console App',
  },
  {
    title: 'SVG Logo Maker',
    description: 'This project is designed to offer a user the ability to automatically generate a logo.svg file...',
    technologies: 'JavaScript, Node.js, Inquirer, Jest',
    imageUrl: 'https://github.com/kbliss86/SVG-logo-maker/blob/main/assets/SVG-Generator-GIF.gif?raw=true',
    projectUrl: 'https://github.com/kbliss86/SVG-logo-maker',
    siteUrl: 'https://github.com/kbliss86/SVG-logo-maker',
    tags: ['Node', 'JavaScript', 'Inquirer', 'Jest', 'Console App', 'Dev Tools'],
    type: 'Console App',
  },
];

const uniqueTags = [...new Set(projects.flatMap(project => project.tags))]; // Unique list of all tags
const uniqueTypes = [...new Set(projects.map(project => project.type))]; // Unique list of all types

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedType, setSelectedType] = useState('');

  // Filter projects based on selected tag and type
  const filteredProjects = projects.filter((project) => {
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
    const matchesType = selectedType ? project.type === selectedType : true;
    return matchesTag && matchesType;
  });

  return (
    <section
      className="p-8 text-white"
      style={{
        backgroundImage: "url('/HeroImage2.png'), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))",
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Portfolio
      </h2>

      {/* Dropdown for Filtering by Tag */}
      <div className="mb-4">
        <label className="mr-2">Filter by Technology:</label>
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="p-2"
          style={{ color: 'black', backgroundColor: 'white' }} // Change dropdown font color
        >
          <option value="">All Technologies</option>
          {uniqueTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown for Filtering by Type */}
      <div className="mb-8">
        <label className="mr-2">Filter by Project Type:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="p-2"
          style={{ color: 'black', backgroundColor: 'white' }} // Change dropdown font color
        >
          <option value="">All Types</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Header Sections for Each Type */}
      {uniqueTypes.map((type) => (
        <div key={type}>
          <h3 className="text-3xl font-bold mt-8 mb-4" style={{ color: 'white' }}>{type}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects
              .filter((project) => project.type === type) // Only show projects of the current type
              .map((project, index) => (
                <div
                  key={index}
                  className="project-card cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => window.open(project.siteUrl, '_blank')} // Open project URL on click
                  style={{ minHeight: '300px' }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover h-48 w-full rounded-lg"
                    style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                  />
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    {/* Full description, no truncation */}
                    <div className="mt-4">
                      <strong>Description:</strong>{project.description}
                    </div>
                    <div className="mt-4">
                      <strong>Technologies:</strong> {project.technologies}
                    </div>
                    <div className="mt-4">
                      <strong>Tags:</strong> {project.tags.join(', ')}
                    </div>
                    <div className="mt-4">
                      <strong>Repository:</strong>{' '}
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-400">
                        {project.projectUrl}
                      </a>
                    </div>
                    <div className="mt-2">
                      <strong>Live Site:</strong>{' '}
                      <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-400">
                        {project.siteUrl}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;