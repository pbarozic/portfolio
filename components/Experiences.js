import React from 'react';

function Experience(props) {
    return (
      <div className="group w-11/12 h-2/3 flex bg-teal-900 cursor-pointer rounded-2xl hover:bg-teal-800 mb-5">
        <div className="w-1/4 h-full">
        <h1 className="group-hover:font-bold text-sm text-white p-2">{props.date}</h1>
        </div>
        <div className="w-3/4 h-full">
        <h1 className="text-3xl text-white">{props.job}</h1>
        <h2 className="text-2xl text-amber-500">{props.company}</h2>
        <p className="text-sm text-white">{props.description}</p>
        <div className="w-full flex flex-wrap">
        {props.skills.map((skill, index) => (
            <p
              key={index}
              className="bg-amber-500 hover:bg-amber-300 text-white font-bold py-2 px-4 rounded-full mr-2 text-center text-xs my-2"
            >
              {skill}
            </p>
          ))}
        </div>
        </div>


      </div>
    );
  }
  
  export default Experience;