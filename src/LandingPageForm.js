import React, { useState } from "react";
import Header from "./Header";
import ImageTextSection from "./ImageTextSection";
import EkoImage from "./img/ekoweb.png";
import sampleImage from "./img/ekochr.jpg";
import Banner from "./Banner";
import Footer from "./Footer";

function LandingPageForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState(""); // Feedback message
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number to ensure it's numeric
    if (!/^\d+$/.test(formData.phone)) {
      setMessage("Please enter a valid phone number.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/customers`, // Backend URL from .env file
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("Your details have been saved successfully!");
        setMessageType("success");
        setFormData({
          firstName: "",
          surname: "",
          email: "",
          phone: "",
        });
      } else {
        setMessage("There was an error saving your details.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while submitting the form.");
      setMessageType("error");
    }
  };

  return (
    <div>
      <Header />
      <Banner />

      <ImageTextSection
        image={sampleImage}
        title="ABOUT ME"
        description1="Eko The Beat is a Nigerian singer, songwriter, and producer known for his gospel-infused blend of hip hop, pop, and Afrobeat. His music reflects spiritual and personal experiences, conveying energy, gratitude, joy, and peace inspired by the Holy Spirit."
        description2="He is a rising force in the world of gospel music, blending his love for hip-hop, Afrobeat, and pop with a deep-rooted spiritual passion. Originally inspired by his own journey of faith and the vibrant sounds of his Nigerian heritage, Eko The Beat crafts music that resonates with audiences far and wide, creating a genre he fondly calls Gospel Groove."
        image1={EkoImage}
        title1="NEW ALBUM"
        description6="As he continues to grow his platform, Eko The Beat invites everyone to join him in his musical journey. With a growing fan base in the United States, Nigeria, and the United Kingdom, Eko is poised to bring his unique sound and inspiring message to even more listeners around the world."
        description7="Eko The Beat's Excelsis Deo Music (EDM) Christmas album offers a unique fusion of electronic dance music and traditional Christmas themes. This innovative approach brings a fresh and energetic perspective to holiday music."
        description8="The album features tracks that reinterpret beloved Christmas songs through the lens of EDM, creating an engaging and uplifting listening experience."
        description5="Eko The Beat continues to push the boundaries of gospel music with every new release, and his upcoming album, Eko Christmas, is set to be a celebration of the season’s spirit through the lens of his unique style."
      />

      <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg mt-6 flex flex-col md:flex-row items-center m-10">
        <div className="md:w-1/2 p-6 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Get 2 Free Songs from My Upcoming Album!
          </h1>
          <p className="text-gray-600 mb-6">
            Don’t miss this chance to be among the first to enjoy my new music.
            Fill out your details, and I’ll send your free tracks immediately!
          </p>
        </div>

        <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          {message && (
            <div
              className={`mb-4 p-3 rounded text-center ${
                messageType === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    handleChange(e);
                  }
                }}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Enter your phone number"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Get My Free Gift
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPageForm;
