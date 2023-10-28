import React from 'react';

const Resume = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <section className="px-4 py-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-green-500">Resume</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-green-500 mb-2">Full Stack Developer</h3>
        <p className="text-gray-700">
          <span className="font-semibold">BACKGROUND:</span> Extensive experience and education in supply chain, business analytics, lean business process improvement, data visualization, and information technology. Pay close attention to detail and able to meet high standards obtained through extensive military experience. Excellent oral communication skills and can work effectively in a team setting as well as an individual.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-green-500 mb-2">SKILLS</h3>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Data Visualization: Advanced skills in Microsoft Excel, Access, and Power BI; Microsoft Visual Basics for Applications (VBA), Data Analysis, Dashboard Functionality and Design, DAX, Tableau Developer</li>
          <li>Databases: (SQL), Microsoft SQL Server Management Studio, SAP, and SAP Business Explorer</li>
          <li>Lean Business Tools: Visio, Process Development and Improvement, Six Sigma (White Belt) Certification</li>
          <li>IT/Troubleshooting: IT Troubleshooting, System Application Support and Testing, System Admin</li>
          <li>Coding/Scripting: Java Script, Groovy Script, Power Automate</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-green-500 mb-2">EDUCATION</h3>
        <p className="text-gray-700">
          Southwest Minnesota State University, Marshall, MN May 2016
          <br />
          Bachelor of Science in Supply Chain Management
        </p>
        <p className="text-gray-700">
          Northwestern Coding Bootcamp, Chicago, IL November 2023
          <br />
          Certificate in Full Stack Development
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-green-500 mb-2">WORK EXPERIENCE</h3>
        <div className="mb-4">
          <h4 className="text-xl font-semibold">Business Systems Analyst, GrapeTree Medical Staffing, Milford IA</h4>
          <p className="text-gray-700">2022-Present</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Application Troubleshooting and Support</li>
            <li>Manage Projects and Relationships with third parties</li>
            <li>Administer and develop Chatbot Solution</li>
            <li>Utilize Java Scripting and Groovy Scripting to facilitate development of Chatbot Solution</li>
            <li>Implement Rest API’s to various software instances to enhance the user experience and efficiency of applications</li>
            <li>Integrate multiple systems to create seamless transactions between various systems both internal and external</li>
            <li>Develop and Implement Business Intelligence tools utilizing high level Power BI</li>
            <li>Develop complex Power Automate flows to automate business processes</li>
            <li>Develop Power Automate Flows to handle HTTP request and webhooks</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-semibold">Owner, Nexus Business Intelligence, LLC, Sheldon IA</h4>
          <p className="text-gray-700">2021-Present</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Offer business consulting services to medium to large size companies</li>
            <li>Develop and provide insight into the S&OP process</li>
            <li>Develop and Implement Business Intelligence tools utilizing high level Excel, Power BI, Access</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-semibold">Senior Business Planning Analyst, Wells Blue Bunny, Le Mars IA</h4>
          <p className="text-gray-700">2021-2022</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Deliver capacity plan for Integrated Business Planning Process</li>
            <li>Facilitate the capacity planning process by creating dynamic reporting and analysis of current production capabilities</li>
            <li>Build and implement streamlined reports for use in analysis</li>
            <li>Supply senior leadership with S&OP dashboards to include: Case fill, Inventory days on hand, capacity utilization and available capacity</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-semibold">Supply and Demand Analyst, Rembrandt Foods, Spirit Lake, IA</h4>
          <p className="text-gray-700">2019-2020</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Deliver demand forecast data for Integrated Business Planning Process</li>
            <li>Build from the ground up the demand planning process for Rembrandt Foods</li>
            <li>Lead the demand review process; Key contributor to weekly sales and operation execution meeting</li>
            <li>Employ third party forecasting software to forecast customer demand</li>
            <li>Utilize high-level knowledge in Excel/Access and Power BI to create tools & dashboards for analyzing demand data</li>
            <li>Offer input for process improvements across several areas of company including customer service, contract management, transportation/logistics, and business intelligence</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-semibold">Transportation Systems Administrator/Logistics Analyst, Schwan’s Global Supply Chain, Marshall, MN</h4>
          <p className="text-gray-700">2017-2019</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Provide Application Support for Transportation Management System</li>
            <li>Utilized high-level functionality within Microsoft Excel and Access as well as third party database interfaces for use in Data Analytics</li>
            <li>Utilized Visual Basic Applications (VBA) and Application Programming Interfaces (API’s) to increase the functionality of Microsoft Excel</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-xl font-semibold">Help Desk Analyst, Schwan’s Shared Services, Marshall, MN</h4>
          <p className="text-gray-700">2016-2017</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Internal technical help desk support and data center support</li>
            <li>Assist company staff regarding: personal computer hardware/software troubleshooting, handheld and mobile device troubleshooting, Bluetooth troubleshooting, network administration, network security management, password administration and maintaining Payment Card Industry Data Security Standard of compliance</li>
            <li>Monitor data center security in accordance with Payment Card Industry Data Security Standard of compliance</li>
            <li>Monitor and maintain environmental settings in data center to ensure server and data integrity</li>
            <li>Operate the main consoles and other computer systems in the computer center to include printers, tape drivers/libraries, tablets and mobile computer devices</li>
            <li>Design and Implement SQL queries for use in incident area and knowledge database management. </li>
          </ul>
        </div>

        {/* Add more work experiences as needed */}
      </div>
    </section>
    </div>
  );
};

export default Resume;
