import React from 'react';

const Resume = () => {
  return (
    <div
      className="flex items-start justify-center min-h-screen text-white"  // Removed justify-center to prevent horizontal centering
      style={{
        backgroundImage: "url('/HeroImage2.png'), linear-gradient(rgba(0, 0, 0, 200), rgba(0, 0, 0, 0.5))",
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <section className="bg-gray-900 bg-opacity-80 p-8 pl-20 rounded-lg shadow-lg max-w-5xl w-full">
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Resume
          </h2>
        </div>

        {/* Background Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Software Developer
          </h3>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            I am a results-driven Software Developer with expertise in full-stack development, data visualization, and dashboard creation. My technical skill set spans database management, application development, and UI/UX design, with a focus on delivering high-quality solutions. Currently, I am enhancing my skills by pursuing a Full Stack C#/.Net certificate at Grand Circus. I thrive in agile environments, leveraging my military experience to bring strong attention to detail and collaboration to every project. I’m dedicated to fostering positive team culture and maintaining a healthy work-life balance in my home state of Iowa.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            SKILLS
          </h3>
          <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
            <li>Full Stack Technologies: .Net, Angular, React, MERN Stack, Node.js, Express.js, Apollo Server, GraphQL, ORM, MVC, APIs, PWAs, Git, Bootstrap, VS Code, Visual Studio</li>
            <li>Coding Languages: C#, Java, JavaScript, Groovy Script, VBA, DAX, M Code, CSS, HTML</li>
            <li>Cloud Services: Azure</li>
            <li>Databases: SQL, MySQL, NoSQL (MongoDB), Microsoft SQL Server, Dynamics Dataverse</li>
            <li>Other Technologies: Agile Development, CI/CD, Power BI, Power Query, Power Automate, Power Apps, Power Pages</li>
            <li>AI Technologies: Azure Open AI, Teneo.AI SDK, Deepgram.AI SDK</li>
          </ul>
        </div>

        {/* Education Section with URLs */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            EDUCATION
          </h3>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Grand Circus Development Bootcamp, Detroit, MI (Aug 2024 – Jan 2025)
            <br />
            Certificate: Full Stack C#/.Net Development (Not Yet Completed)
            <br />
            <a
              href="https://www.grandcircus.co/bootcamps/full-stack-csharp-dotnet-bootcamp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              https://www.grandcircus.co/bootcamps/full-stack-csharp-dotnet-bootcamp/
            </a>
          </p>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Northwestern Coding Bootcamp, Chicago, IL (Nov 2023)
            <br />
            Certificate: Full Stack Web Development
            <br />
            <a
              href="https://bootcamp.northwestern.edu/coding/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              https://bootcamp.northwestern.edu/coding/
            </a>
          </p>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Southwest Minnesota State University, Marshall, MN (May 2016)
            <br />
            Bachelor of Science in Supply Chain Management
            <br />
            <a
              href="https://www.smsu.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              https://www.smsu.edu/
            </a>
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            WORK EXPERIENCE
          </h3>

          {/* GrapeTree Medical Staffing */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Developer, GrapeTree Medical Staffing, Milford, IA</h4>
            <p className="text-gray-300">2021 - Present</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Designed and implemented web applications using JavaScript, HTML, and CSS, improving operational efficiency and enhancing user experience.</li>
              <li>Developed conversational AI systems using Teneo.ai and Azure Open AI to automate processes, reducing manual tasks and improving productivity.</li>
              <li>Created a speech-to-text application utilizing Deepgram SDK, increasing journaling efficiency by 30%.</li>
              <li>Implemented Power Automate flows and Rest API integrations to streamline workflows and system performance across various departments.</li>
              <li>Designed and managed Power BI dashboards, providing key insights for leadership and improving decision-making processes.</li>
              <li>Managed third-party integrations for the CTM Applicant Tracking System, ensuring seamless operation and support for staffing solutions.</li>
              <li>Provided ongoing application troubleshooting and technical support for end-users, ensuring smooth system functionality.</li>
            </ul>
          </div>

          {/* Bowhead DoD Contract */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Software Developer, Bowhead (DoD Contract), Vicksburg, MS</h4>
            <p className="text-gray-300">2023 - July 2024</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Assessed and re-engineered C#/.Net applications using Microsoft Power Platform, creating user-friendly front-end solutions with Power Pages and Power Apps.</li>
              <li>Developed complex data flows and Power Automate integrations, streamlining data management and backend operations.</li>
              <li>Worked closely with the scrum team to provide technical evaluations for DoD software transitions, drafting comprehensive technical assessments.</li>
              <li>Integrated Azure resources for apps and APIs, modernizing legacy systems and improving system scalability.</li>
            </ul>
          </div>

          {/* Nexus Business Intelligence */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Owner, Nexus Business Intelligence, LLC, Sheldon, IA</h4>
            <p className="text-gray-300">2020 - 2023</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Developed and implemented custom BI dashboards for supply chain leadership, providing key insights into operational performance and driving strategic decision-making.</li>
              <li>Automated reporting and data analysis processes using Excel and Power Query, improving accuracy and reducing manual effort by an average of 25%.</li>
              <li>Collaborated cross-functionally with supply chain teams to enhance the company's Integrated Business Planning process through advanced data analytics.</li>
            </ul>
          </div>

          {/* Senior Business Planning Analyst, Wells Blue Bunny */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Senior Business Planning Analyst, Wells Blue Bunny, Le Mars, IA</h4>
            <p className="text-gray-300">2020 - 2021</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Developed and implemented custom BI dashboards for supply chain leadership, providing key insights into operational performance and driving strategic decision-making.</li>
              <li>Automated reporting and data analysis processes using Excel and Power Query, improving accuracy and reducing manual effort by 25%.</li>
              <li>Collaborated cross-functionally with supply chain teams to enhance the company's Integrated Business Planning process through advanced data analytics.</li>
            </ul>
          </div>

          {/* Supply and Demand Analyst, Rembrandt Foods */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Supply and Demand Analyst, Rembrandt Foods, Spirit Lake, IA</h4>
            <p className="text-gray-300">2019 - 2020</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Developed advanced data analysis tools using Excel, Access, and Power BI to monitor and forecast customer demand, contributing to more accurate decision-making in supply chain operations.</li>
              <li>Programmed third-party forecasting software, adjusting parameters and variables to generate precise demand models for business use.</li>
              <li>Designed the demand planning process from the ground up, increasing forecast accuracy and improving the Integrated Business Planning (IBP) process.</li>
              <li>Led the demand review process, presenting data insights to cross-functional teams and helping to streamline weekly sales and operations meetings.</li>
            </ul>
          </div>

          {/* Transportation Systems Administrator/Logistics Analyst, Schwan’s Global Supply Chain */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Transportation Systems Administrator/Logistics Analyst, Schwan’s Global Supply Chain, Marshall, MN</h4>
            <p className="text-gray-300">2017 - 2019</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Automated data extraction processes using API integrations and advanced VBA scripting, improving the efficiency and accuracy of transportation data analysis.</li>
              <li>Developed custom Excel-based tools to track and analyze carrier relations and transportation performance, resulting in improved operational performance across the supply chain.</li>
              <li>Provided technical support and troubleshooting for the Transportation Management System (TMS), ensuring optimal system performance and minimal downtime.</li>
              <li>Managed and maintained transportation databases, using high-level Excel and Access functionalities to deliver critical data insights to decision-makers.</li>
            </ul>
          </div>

          {/* IT Helpdesk Analyst, Schwan’s Shared Services */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">IT Helpdesk Analyst, Schwan’s Shared Services, Marshall, MN</h4>
            <p className="text-gray-300">2016 - 2017</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Designed and implemented SQL queries to streamline incident management and enhance the knowledge database, improving response times for technical support teams.</li>
              <li>Ensured the security and compliance of the data center, adhering to Payment Card Industry Data Security Standards (PCI DSS).</li>
              <li>Managed environmental controls and system monitoring within the data center, ensuring data integrity and minimizing risks of system failure.</li>
              <li>Provided frontline technical support to internal teams, troubleshooting a wide range of IT issues and ensuring rapid resolution to minimize downtime.</li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            PROJECTS
          </h3>
          <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
            <li>
              <strong>Chatbot Application:</strong> Developed a front-end web page that allows users to apply for jobs and interact with a conversational AI that simultaneously screens candidates to improve the quality of applicants reaching the ATS.
            </li>
            <li>
              <strong>SOP Bot:</strong> Created a Generative AI Chatbot using Azure Open AI Studio to automate company SOPs, improving internal compliance checks and reducing manual workload.
            </li>
            <li>
              <strong>Journal Bot:</strong> Developed a speech-to-text application with Deepgram SDK, increasing efficiency for medical staff journaling by 30%.
            </li>
            <li>
              <strong>Course Planner (Capstone):</strong> Developed as a capstone project for the Northwestern Coding Bootcamp, this React-based website allows users to create personalized lesson plans for self-taught learning from platforms like YouTube, Udemy, and Cloud Academy.
            </li>
            <li>
              <strong>Meal Kit Store:</strong> Built a full-stack web application with a front-end interface connected to a backend database, allowing users to browse meal kits, place orders, and store order information for a seamless e-commerce experience.
            </li>
            <li>
              <strong>Trip Planner:</strong> Created a single-page app that lets users calculate the most efficient routes between multiple points, while providing recommendations for hotels, bars, restaurants, and other points of interest along the way.
            </li>
            <li>
              <strong>Point of Sale System:</strong> Designed and implemented a C# console application simulating a point-of-sale system, allowing store customization and facilitating payment processing and inventory management.
            </li>
          </ul>
        </div>

        {/* Certifications Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            CERTIFICATIONS
          </h3>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Comptia Security+ (2023 - 2026)
          </p>
        </div>

        {/* Military Experience Section */}
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
