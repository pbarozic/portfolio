import React from 'react';

function Experience(props) {
    return (
        <div className="flex w-full h-96 flex-col justify-between items-start px-5">

            <div className="w-1/2 h-10 bg-gray-500 flex rounded-2xl mb-3">
                <h1 className="group-hover:font-bold text-sm text-white p-2">{props.date}</h1>
            </div>

            <div className="group h-5/6 max-w-lg flex bg-teal-900 cursor-pointer rounded-2xl hover:bg-teal-800 mb-5 p-3">
                <div className="w-full h-full flex flex-col justify-between">
             
                    <div>
                        <h1 className="group-hover:font-bold lg:text-2xl text-lg text-white">{props.job}</h1>
                        <h2 className="group-hover:font-bold lg:text-xl text-base text-amber-500">{props.company}</h2>
                    </div>
                    <p className="lg:text-sm text-xs text-white">
                        {props.intro && props.intro}
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                        {props.description && props.description.map((item, index) => (
                            <li className="lg:text-sm text-xs text-white" key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="w-full flex flex-wrap">
                        {props.skills && props.skills.map((skill, index) => (
                            <p
                                key={index}
                                className="bg-amber-500 hover:bg-amber-300 text-white font-bold h-6 py-2 px-4 rounded-full mr-2 flex flex-col justify-center text-center text-xs my-2"
                            >
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Experience;