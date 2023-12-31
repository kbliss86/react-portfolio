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
    description: 'This was the firs assignment in my coding bootcamp that required true "Full Stack Development. It had both front end and back end compenetns and routes. User inputs would be saved. Users could: Signup, Login, Post a Blog, Post a Comment, and view a profile page that let them view all of their Posts and Comments',
    technologies: 'HTML, CSS, JavaScript, seqeulize, handlebars, express, bcrypt, dotenv, mysql2, express-session, connect-session-sequelize',
    imageUrl: 'https://github.com/kbliss86/tech-blog/blob/main/public/images/techblog-screenshot.PNG?raw=true',
    projectUrl: 'https://github.com/kbliss86/tech-blog',
  },
  {
    title: 'Meal Kit Store',
    description: 'This was the second major project I did in my coding bootcamp, it was a group project where we had to create an app that utilized basic javascript, html, and css. It also has to include the use of third party API libraries. We chose to create a meal kit store that would allow the user to search for a meal kit and then display the ingredients, instructions, and nutritional information for that meal kit. We were given 2 weeks to complete the project and it was a great learning experience when we finally got to present this to the class.',
    technologies: 'HTML, CSS, JavaScript, Tailwindcss,  seqeulize, handlebars, express, bcrypt, dotenv, mysql2, express-session, connect-session-sequelize',
    imageUrl: 'https://github.com/kbliss86/mealkit-store/blob/main/public/assets/mealkit-background.jpg?raw=true',
    projectUrl: 'https://github.com/kbliss86/mealkit-store',
  },
];

const Portfolio = () => {
  return (
    <section className="p-4">
      <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
};
export default Portfolio;