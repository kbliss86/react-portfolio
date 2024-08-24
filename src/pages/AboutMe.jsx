import React from 'react';

const timelineData = [
  {
    date: "2003-2009",
    title: "Military Service",
    description:
      "During my time in the MN Army National Guard, I developed a strong attention to detail, discipline, and leadership. My experience laid the foundation for my work ethic and ability to thrive in challenging environments. The skills I gained during my service helped me approach problems with a solution-focused mindset, which would later prove invaluable in my tech career.",
    alignment: "left",
  },
  {
    date: "May 2016",
    title: "Bachelor's in Supply Chain Management",
    description:
      "Graduating from Southwest Minnesota State University with a Bachelor's degree in Supply Chain Management gave me a solid foundation in business processes, data analytics, and project management. I gained an understanding of business systems and data flows, which later helped me transition into technical roles, especially in business intelligence and software development.",
    alignment: "right",
  },
  {
    date: "2016-2021",
    title: "Career in Business Intelligence and IT",
    description:
      "Starting as a Help Desk Analyst and progressing to roles like Supply and Demand Analyst, Senior Business Planning Analyst, and Business Systems Analyst, I gained hands-on experience in data visualization, troubleshooting, business intelligence, and software development. My responsibilities included developing Power BI dashboards, managing databases, and troubleshooting IT systems. This was the stepping stone to understanding how technology drives business decisions.",
    alignment: "left",
  },
  {
    date: "Nov 2023",
    title: "Northwestern Coding Bootcamp - Full Stack Web Development",
    description:
      "At Northwestern University's Coding Bootcamp, I dove deep into full-stack development, mastering technologies such as React, JavaScript, Node.js, and more. This intensive bootcamp enhanced my front-end and back-end development skills, allowing me to create dynamic web applications and solidify my path toward becoming a developer. Projects like building a trip planner app were crucial in honing my coding skills.",
    alignment: "right",
  },
  {
    date: "Aug 2024 - Jan 2025",
    title: "Grand Circus Bootcamp - Full Stack C#/.NET Development",
    description:
      "Currently, I'm enrolled in the Full Stack C#/.NET Development bootcamp at Grand Circus. This program focuses on C#, .NET, and related technologies. I'm developing my expertise in building enterprise-level applications and APIs, further strengthening my backend development skills. This bootcamp is preparing me for a career in software development, specifically in the .NET ecosystem.",
    alignment: "left",
  },
  {
    date: "2021-Present",
    title: "Business Systems Analyst & Software Developer",
    description:
      "Transitioning into software development roles, I work on full-stack development, Power Platform solutions, and business intelligence tools. At GrapeTree Medical Staffing and Nexus Business Intelligence, I developed Power Automate flows, integrated APIs, and created chatbot solutions using JavaScript and Power Platform. These experiences sharpened my skills in both front-end and back-end development, helping me become a well-rounded developer.",
    alignment: "right",
  },
];

const AboutMe = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/HeroImage2.png'), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Text Container */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 mb-20">
        <h2 className="text-white text-4xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          About Me
        </h2>
        <p className="text-xl text-white mt-4" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'justify' }}>
          Hi there! I'm Kendall Bliss, a passionate and dedicated full-stack developer with a strong background in supply chain management and business intelligence. I thrive on solving complex problems and creating elegant solutions through code.
        </p>
        <p className="text-xl text-white mt-4" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'justify' }}>
          In addition to my technical expertise, I'm a certified Six Sigma White Belt and have a deep understanding of lean business processes and process improvement. I'm skilled in troubleshooting and IT support and have a knack for system administration.
        </p>
        <p className="text-xl text-white mt-4" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'justify' }}>
          Outside of my professional life, I have a wonderful family that brings joy to my life every day. My wife, Erica, and our three amazing children, Nora, Athena, and Piper, are my biggest sources of inspiration and support.
        </p>
        <p className="text-xl text-white mt-4" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'justify' }}>
          I have a deep love for cooking and gardening, and you'll often find me experimenting with new recipes or tending to my garden. Cooking allows me to be creative and bring joy to others through delicious meals, while gardening provides a peaceful retreat and a connection to nature.
        </p>
        <p className="text-xl text-white mt-4" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'justify' }}>
          In my free time, I have a passion for video games. Whether it's exploring vast virtual worlds or competing with friends, gaming is a hobby that keeps me entertained and engaged.
        </p>
        <p className="text-xl text-white mt-4" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'justify' }}>
          I'm excited about the endless possibilities in the world of software development and look forward to making a meaningful impact through my work.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-12 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          My Journey
        </h2>
      </div>
      <div className="container mx-auto px-4">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col items-center ${
              item.alignment === "left" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2 p-4">
              <div
                className="p-6 rounded-lg shadow-lg"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(50, 50, 50, 0.8))",
                }}
              >
                <div className={`${item.alignment === "left" ? "text-left" : "text-right"}`}>
                  <h3 className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-blue-400 text-xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.date}
                  </p>
                </div>
                <p
                  className={`text-lg text-white ${item.alignment === "left" ? "text-left" : "text-right"}`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
            <div className="hidden md:block md:w-1/12 text-center">
              <span className="block w-4 h-4 bg-blue-500 rounded-full mx-auto mb-4"></span>
              <div className="w-1 h-full bg-blue-500"></div>
            </div>
            <div className="md:w-1/2 p-4"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
