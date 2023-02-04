import React from 'react';
import projects from '../assets/projects';

const ExpInfo = () => {
    return (
        <div className='interior-info' >
            <h1>
                These are the projects I have worked on: 
            </h1>
            { projects.map(project => (
                        <div className="project-card">
                            <h1>{project.name}</h1>
                            <img className='project-image' src={project.image} alt="" />
                        </div>
                    ))}
            <p>My exprience</p>
            <p>Nicolas</p>
        </div>
    );
};

export default ExpInfo;