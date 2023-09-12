import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

function Project(props) {
  const {
    imageSrc,
    altText,
    description,
    frontendLink,
    backendLink,
    technologies,
    websiteLink,
    images,
  } = props;

  return (
    <div className="group h-min-screen h-fit lg:h-1/2 w-5/6 flex lg:flex-row flex-col bg-teal-900 rounded-2xl hover:bg-teal-800 mb-5">
      <div className="lg:w-1/2 h-1/2 flex flex-col justify-start items-center pb-3 mt-4">
        <div className="h-1/3 w-1/3 mb-4">
          <Image
            src={imageSrc}
            alt={altText}
            objectFit="contain"
            width={120}
            height={120}
          />
        </div>

        <p className="text-base  lg:w-10/12  font-medium text-justify text-white mb-3 lg:px-0 px-4">
          {description}
        </p>

        <div className="w-5/6 flex flex-col items-center lg:items-start">
          <div className="flex items-center">
            <p className="mr-5 text-white font-bold text-xl">Frontend:</p>
            <a href={frontendLink} target="_blank" rel="noopener noreferrer">
              <FaGithub
                className="text-gray-300 hover:text-white mr-5"
                size={24}
              />
            </a>
          </div>
          <div className="flex">
            {technologies.frontend.map((tech, index) => (
              <p
                key={index}
                className="bg-orange-400 hover:bg-amber-300 text-white font-bold h-6 py-2 px-4 rounded-full mr-2 flex flex-col justify-center text-center text-xs my-2"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>

        <div className="w-5/6 flex flex-col items-center lg:items-start">
          <div className="flex items-center">
            <p className="mr-5 text-white font-bold text-xl">Backend:</p>
            <a href={backendLink} target="_blank" rel="noopener noreferrer">
              <FaGithub
                className="text-gray-300 hover:text-white mr-5"
                size={24}
              />
            </a>
          </div>
          <div className="flex">
            {technologies.backend.map((tech, index) => (
              <p
                key={index}
                className="bg-orange-400 hover:bg-amber-300 text-white font-bold h-6 py-2 px-4 rounded-full mr-2 flex flex-col justify-center text-center text-xs my-2"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-fit flex flex-col items-center mb-2 px-2">
        <div className="flex h-80 lg:h-96 w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex h-full w-${
                images.length === 3 ? "1/3" : index === 0 ? "3/4" : "1/3"
              } relative`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                objectFit="contain"
                layout="fill"
              />
            </div>
          ))}
        </div>

        <div className="h-12 lg:h-16 w-full flex items-center justify-center">
          <a
            href={websiteLink}
            target="_blank"
            className="bg-orange-400 hover:bg-amber-600 lg:h-1/2 h-2/3 lg:w-1/3 w-1/2 text-white font-bold rounded-full flex items-center justify-center text-sm"
          >
            Découvez le projet
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
