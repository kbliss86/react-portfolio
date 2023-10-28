import React, { useState } from 'react';

const Contact = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission, e.g., sending an email
    console.log('Form submitted with data:', formData);
  };

  return (
    <section className="p-4">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Contact Information</h3>
          <p className="text-xl text-gray-700">
            Email: kendall.bliss@smsu.edu
          </p>
          {/* Add more contact information if needed */}
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Send me a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-xl font-semibold text-gray-800 mb-2">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-semibold text-gray-800 mb-2">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-xl font-semibold text-gray-800 mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;