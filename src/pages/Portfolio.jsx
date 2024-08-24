import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Trip Planner',
    description: 'This was the first major project I did in my coding bootcamp, it was a group project where we had to create an app that utilized basic javascript, html, and css. It also has to include the use of third party API libraries. We chose to create a trip planner that would allow the user to search for a city and then display the weather, restaurants, and hotels in that city. We were given 2 weeks to complete the project and it was a great learning experience when we finally got to present this to the class.',
    technologies: 'HTML, CSS, JavaScript, Materialize CSS, google maps API, Department of Energy API, MapQuest API',
    imageUrl: 'https://github.com/kbliss86/trip-planner/blob/main/assets/resources/image.png?raw=true',
    projectUrl: 'https://github.com/kbliss86/trip-planner',
  },
  {
    title: 'Tech Blog',
    description: 'This was the first assignment in my coding bootcamp that required true "Full Stack Development". It had both front-end and back-end components and routes. User inputs would be saved. Users could: Signup, Login, Post a Blog, Post a Comment, and view a profile page that let them view all of their Posts and Comments.',
    technologies: 'HTML, CSS, JavaScript, Sequelized, Handlebars, Express, Bcrypt, Dotenv, MySQL2, Express-Session, Connect-Session-Sequelize',
    imageUrl: 'https://github.com/kbliss86/tech-blog/blob/main/public/images/techblog-screenshot.PNG?raw=true',
    projectUrl: 'https://github.com/kbliss86/tech-blog',
  },
  {
    title: 'Meal Kit Store',
    description: 'This was the second major project I did in my coding bootcamp. It was a group project where we had to create an app that utilized JavaScript, HTML, and CSS, including the use of third-party API libraries. We chose to create a meal kit store that allowed users to search for meal kits and display ingredients, instructions, and nutritional information.',
    technologies: 'HTML, CSS, JavaScript, TailwindCSS, Sequelize, Handlebars, Express, Bcrypt, Dotenv, MySQL2, Express-Session, Connect-Session-Sequelize',
    imageUrl: 'https://github.com/kbliss86/mealkit-store/blob/main/public/assets/mealkit-background.jpg?raw=true',
    projectUrl: 'https://github.com/kbliss86/mealkit-store',
  },
];

const Portfolio = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
