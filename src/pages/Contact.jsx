import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <section
      className="relative p-8 text-white"
      style={{
        backgroundImage: "url('/HeroImage.webp'), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))",
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Contact Me
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Contact Information
          </h3>
          <p className="text-lg mb-4">
            Email: kendall.bliss@smsu.edu
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Send me a message
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg border border-white hover:bg-blue-700 transition duration-300"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
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
