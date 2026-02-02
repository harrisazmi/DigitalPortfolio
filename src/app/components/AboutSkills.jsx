"use client";
import React from "react";
import Image from "next/image";

const LogoContainer = ({ index, category, src }) => {
  return (
    <div
      key={`${category}-${index}`}
      className="m-4 p-4 bg-gradient-to-br from-primary-800 to-secondary-600 rounded-lg shadow-lg"
    >
      <Image src={src} alt={`Logo ${index + 1}`} width={80} height={80} />
    </div>
  );
};

const CategoryBox = ({ name, count, dir }) => {
  return (
    <div className="m-4 p-6 rounded-lg shadow-xl text-center bg-gradient-to-br from-primary-900 to-secondary-700">
      <h3 className="text-lg font-bold text-gray-200 mb-4">{name}</h3>
      <div className="flex flex-wrap justify-center">
        {Array(count)
          .fill()
          .map((_, index) => (
            <LogoContainer
              key={index}
              index={index}
              category={name}
              src={`/logos/${dir}/${index + 1}.png`}
            />
          ))}
      </div>
    </div>
  );
};

const AboutSkills = () => {
  const categories = [
    { name: "Languages", count: 3, dir: "languages" },
    { name: "Frontend", count: 6, dir: "frontend" },
    { name: "Backend", count: 5, dir: "backend" },
    { name: "Database", count: 6, dir: "database" },
    { name: "Dev Ops", count: 12, dir: "devops" },
    { name: "Others", count: 5, dir: "others" },
  ];

  return (
    <section className="text-white" id="about">
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-4 md:mb-8">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <CategoryBox
            key={index}
            name={category.name}
            count={category.count}
            dir={category.dir}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSkills;
