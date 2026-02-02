import React from "react";
import Link from "next/link";
import Image from "next/image";

const BottomSection = () => {
  const paragraphStyle = {
    textAlign: "justify",
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative bg-gradient-to-br from-primary-800 to-secondary-600 rounded-lg shadow-lg"
    >
      <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Let&apos;s Connect
        </h2>
        <p
          style={paragraphStyle}
          className="text-[#FFFFFF] text-lg mb-8 max-w-lg"
        >
          I&apos;m currently exploring new opportunities and welcome any
          inquiries or messages you may have. Whether you have questions, ideas
          to discuss, or just want to say hello, feel free to reach out.
          I&apos;m committed to responding promptly and look forward to
          connecting with you!
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/harrisazmi">
            <div className="hover:text-gray-300 transition-colors duration-300">
              <Image
                src="/githubicon.svg"
                width={40}
                height={40}
                alt="Github Icon"
              />
            </div>
          </Link>
          <Link href="http://www.linkedin.com/in/harris-azmi-roswadi">
            <div className="hover:text-gray-300 transition-colors duration-300">
              <Image
                src="/linkedinicon.svg"
                width={40}
                height={40}
                alt="Linkedin Icon"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
