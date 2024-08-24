import React from 'react';

const Resume = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen text-white"
      style={{
        backgroundImage: "url('/HeroImage.webp'), linear-gradient(rgba(0, 0, 0, 200), rgba(0, 0, 0, 0.5))",
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <section className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-5xl w-full">
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Resume
          </h2>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Software Developer
          </h3>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            I am a dedicated Software Developer with extensive experience in full-stack development, data visualization, report generation, and dashboard development. My technical proficiency is bolstered by rigorous training at the Northwest Coding Bootcamp and continuous self-education. Currently, I am pursuing a Full Stack C#/.Net Development certificate at Grand Circus Development Bootcamp to further enhance my skill set.
            I am passionate about technology and computer science and excel in developing and maintaining applications that drive business success. My background in agile environments has honed my ability to collaborate effectively with teams and deliver high-quality visualizations that support business decision-making.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            SKILLS
          </h3>
          <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
            <li>Full Stack Technologies: React, MERN Stack, Node.js, Express.js, ORM, MVC, APIs, PWAs, GitBash, Bootstrap, VS Code, Visual Studio</li>
            <li>Coding Languages: JavaScript, Groovy Script, VBA, DAX, M Code, CSS, HTML, C#</li>
            <li>Cloud Services: Azure</li>
            <li>Databases: SQL, Microsoft SQL Server Management Studio, MySql, NoSql, Dynamics Dataverse</li>
            <li>Other Technologies: Agile Development, CI/CD, Power BI, Power Query, Power Automate, Power Apps, Power Pages</li>
            <li>AI Technologies: Azure Open AI, Teneo.AI Chatbot SDK, Deepgram Speech to Text SDK</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            EDUCATION
          </h3>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Grand Circus Development Bootcamp, Detroit, MI (Aug 2024 – Jan 2025)
            <br />
            Certificate: Full Stack C#/.Net Development (Not Yet Completed)
          </p>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Northwestern Coding Bootcamp, Chicago, IL (Nov 2023)
            <br />
            Certificate: Full Stack Web Development
          </p>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Southwest Minnesota State University, Marshall, MN (May 2016)
            <br />
            Bachelor of Science in Supply Chain Management
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            WORK EXPERIENCE
          </h3>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Software Developer, Bowhead (DoD Contract), Vicksburg, MS</h4>
            <p className="text-gray-300">2023 - July 2024</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Provide technology assessment of Power Platform for use in replacing the current “FUDSMIS” system.</li>
              <li>Evaluate existing C#/.Net applications and recreate them in Microsoft Power Platform to assess the viability of the technology.</li>
              <li>Develop landing pages using Microsoft Power Pages and interactive applications using Power Apps.</li>
              <li>Develop Power Automate flows to manage background operations for Power Apps functionality.</li>
              <li>Utilize C# and .Net framework to develop Azure resources for apps and APIs.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">BI Developer, GrapeTree Medical Staffing, Milford, IA</h4>
            <p className="text-gray-300">2021 - 2024</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Develop web applications for business operations using JavaScript, HTML, and CSS.</li>
              <li>Develop AI Chatbot solutions and speech-to-text applications using various SDKs and Azure Open AI Studio.</li>
              <li>Implement complex Power Automate flows for HTTP requests, webhooks, and automated business processes.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Owner, Nexus Business Intelligence, LLC, Sheldon, IA</h4>
            <p className="text-gray-300">2020 - Present</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Provide business intelligence consulting services to medium to large companies.</li>
              <li>Develop Business Intelligence tools using Excel, Power BI, Power Query, and Power Automate.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Senior Business Planning Analyst, Wells Blue Bunny, Le Mars, IA</h4>
            <p className="text-gray-300">2020 - 2021</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Develop Business Intelligence Dashboards for senior supply chain leadership.</li>
              <li>Deliver capacity plans for Integrated Business Planning Process and build streamlined reports for analysis.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Supply and Demand Analyst, Rembrandt Foods, Spirit Lake, IA</h4>
            <p className="text-gray-300">2019 - 2020</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Deliver demand forecast data for Integrated Business Planning Process and develop the demand planning process.</li>
              <li>Lead demand review process and create tools for analyzing demand data using Power BI and Excel.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Transportation Systems Administrator, Schwan’s Global Supply Chain, Marshall, MN</h4>
            <p className="text-gray-300">2017 - 2019</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Provide application support for Transportation Management System and enhance functionality using VBA and APIs.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">IT Helpdesk Analyst, Schwan’s Shared Services, Marshall, MN</h4>
            <p className="text-gray-300">2016 - 2017</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Design and implement SQL queries for incident management and knowledge databases.</li>
              <li>Manage data center security and compliance with Payment Card Industry Data Security Standards.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            CERTIFICATIONS
          </h3>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Comptia Security+ (2023 - 2026)
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            MILITARY EXPERIENCE
          </h3>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Specialist Rank, MN Army National Guard (Honorable Discharge and Training Honor Graduate, 2003 - 2009)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
