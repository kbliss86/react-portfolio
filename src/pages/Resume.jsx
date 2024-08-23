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
            Full Stack Developer
          </h3>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="font-semibold text-white">BACKGROUND:</span> Extensive experience and education in supply chain, business analytics, lean business process improvement, data visualization, and information technology. Pay close attention to detail and able to meet high standards obtained through extensive military experience. Excellent oral communication skills and can work effectively in a team setting as well as an individual.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            SKILLS
          </h3>
          <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
            <li>Data Visualization: Advanced skills in Microsoft Excel, Access, and Power BI; Microsoft Visual Basics for Applications (VBA), Data Analysis, Dashboard Functionality and Design, DAX, Tableau Developer</li>
            <li>Databases: SQL, Microsoft SQL Server Management Studio, SAP, and SAP Business Explorer</li>
            <li>Lean Business Tools: Visio, Process Development and Improvement, Six Sigma (White Belt) Certification</li>
            <li>IT/Troubleshooting: IT Troubleshooting, System Application Support and Testing, System Admin</li>
            <li>Coding/Scripting: JavaScript, Groovy Script, Power Automate</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            EDUCATION
          </h3>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Southwest Minnesota State University, Marshall, MN May 2016
            <br />
            Bachelor of Science in Supply Chain Management
          </p>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Northwestern Coding Bootcamp, Chicago, IL November 2023
            <br />
            Certificate in Full Stack Development
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            WORK EXPERIENCE
          </h3>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Business Systems Analyst, GrapeTree Medical Staffing, Milford IA</h4>
            <p className="text-gray-300">2022-Present</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Application Troubleshooting and Support</li>
              <li>Manage Projects and Relationships with third parties</li>
              <li>Administer and develop Chatbot Solution</li>
              <li>Utilize JavaScript and Groovy Script to facilitate development of Chatbot Solution</li>
              <li>Implement REST APIs to various software instances to enhance user experience and efficiency of applications</li>
              <li>Integrate multiple systems to create seamless transactions between various systems both internal and external</li>
              <li>Develop and Implement Business Intelligence tools utilizing high-level Power BI</li>
              <li>Develop complex Power Automate flows to automate business processes</li>
              <li>Develop Power Automate Flows to handle HTTP requests and webhooks</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Owner, Nexus Business Intelligence, LLC, Sheldon IA</h4>
            <p className="text-gray-300">2021-Present</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Offer business consulting services to medium to large size companies</li>
              <li>Develop and provide insight into the S&OP process</li>
              <li>Develop and Implement Business Intelligence tools utilizing high-level Excel, Power BI, Access</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Senior Business Planning Analyst, Wells Blue Bunny, Le Mars IA</h4>
            <p className="text-gray-300">2021-2022</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Deliver capacity plan for Integrated Business Planning Process</li>
              <li>Facilitate the capacity planning process by creating dynamic reporting and analysis of current production capabilities</li>
              <li>Build and implement streamlined reports for use in analysis</li>
              <li>Supply senior leadership with S&OP dashboards to include: Case fill, Inventory days on hand, capacity utilization and available capacity</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Supply and Demand Analyst, Rembrandt Foods, Spirit Lake, IA</h4>
            <p className="text-gray-300">2019-2020</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Deliver demand forecast data for Integrated Business Planning Process</li>
              <li>Build from the ground up the demand planning process for Rembrandt Foods</li>
              <li>Lead the demand review process; Key contributor to weekly sales and operation execution meeting</li>
              <li>Employ third party forecasting software to forecast customer demand</li>
              <li>Utilize high-level knowledge in Excel/Access and Power BI to create tools & dashboards for analyzing demand data</li>
              <li>Offer input for process improvements across several areas of company including customer service, contract management, transportation/logistics, and business intelligence</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Transportation Systems Administrator/Logistics Analyst, Schwan’s Global Supply Chain, Marshall, MN</h4>
            <p className="text-gray-300">2017-2019</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Provide Application Support for Transportation Management System</li>
              <li>Utilized high-level functionality within Microsoft Excel and Access as well as third party database interfaces for use in Data Analytics</li>
              <li>Utilized Visual Basic Applications (VBA) and Application Programming Interfaces (APIs) to increase the functionality of Microsoft Excel</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-semibold text-white">Help Desk Analyst, Schwan’s Shared Services, Marshall, MN</h4>
            <p className="text-gray-300">2016-2017</p>
            <ul className="list-disc list-inside text-gray-300 ml-4 text-lg">
              <li>Internal technical help desk support and data center support</li>
              <li>Assist company staff regarding: personal computer hardware/software troubleshooting, handheld and mobile device troubleshooting, Bluetooth troubleshooting, network administration, network security management, password administration and maintaining Payment Card Industry Data Security Standard of compliance</li>
              <li>Monitor data center security in accordance with Payment Card Industry Data Security Standard of compliance</li>
              <li>Monitor and maintain environmental settings in data center to ensure server and data integrity</li>
              <li>Operate the main consoles and other computer systems in the computer center to include printers, tape drivers/libraries, tablets and mobile computer devices</li>
              <li>Design and Implement SQL queries for use in incident area and knowledge database management.</li>
            </ul>
          </div>

          {/* Add more work experiences as needed */}
        </div>
      </section>
    </div>
  );
};

export default Resume;
