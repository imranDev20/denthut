import React from "react";
import PersonalImage from "../images/imran-kabir-avatar.jpeg";

const About = () => {
  return (
    <main className="container mx-auto my-10 px-10">
      <div className="flex flex-col justify-center items-center">
        <div className="h-36 w-36 rounded-full overflow-hidden">
          <img className="w-full object-cover" src={PersonalImage} alt="" />
        </div>
        <div className="text-center">
          <h3 className="mt-5 text-2xl font-medium text-neutral-600">
            Md Imran Kabir
          </h3>
          <p className="text-neutral-500">
            Hello, this is Imran Kabir, a performance-driven and highly
            efficient Full Stack Web Developer with a vast array of knowledge in
            many front-end and back-end languages, frameworks, databases and
            libraries.
          </p>
          <h5 className="mt-5 text-xl font-medium text-neutral-600">
            What I Can Do:
          </h5>
          <p className="text-neutral-500">
            Competent in developing different highly functional web
            applications, including WordPress websites. Using the latest and
            most advanced industry-standard technologies, I can create any kind
            of web applications optimized for both speed and user experience. I
            ensure application security and ability to interact with multiple
            APIs and databases. I am a Technology expert with over a decade of
            history working with computers.
          </p>
        </div>
        <div className="text-center">
          <h5 className="mt-5 text-xl text-center font-medium text-neutral-600">
            Experience:
          </h5>
          <p className="text-neutral-500">
            Languages: Javascript, PHP, HTML5, CSS3 <br />
            Frameworks/Libraries: React.js, Express.js, Node.js <br />
            Databases: MongoDB, MySQL, Firebase Additional <br />
            Skill: Graphic Design Hobbyist
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
