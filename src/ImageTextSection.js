import React from "react";

function ImageTextSection({
  image1,
  image,
  title1,
  title,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
}) {
  return (
    <>
      {/* First Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4 md:p-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 md:p-14 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-500 mb-4">{description1}</p>
          <p className="text-gray-500 mb-4">{description2}</p>
          <p className="text-gray-500 mb-4">{description3}</p>
          <p className="text-gray-500 mb-4">{description4}</p>
          <p className="text-gray-500 mb-4">{description6}</p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img src={image} alt={title} className="w-full h-auto shadow-lg" />
        </div>
      </section>

      {/* Second Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4 md:p-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img src={image1} alt={title1} className="w-full h-auto shadow-lg" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4 md:p-14 text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title1}</h2>
          <p className="text-gray-500 mb-4">{description7}</p>
          <p className="text-gray-500 mb-4">{description8}</p>
          <p className="text-gray-500 mb-4">{description5}</p>
        </div>
      </section>
    </>
  );
}

export default ImageTextSection;
