import React from 'react';
import data from './data.js';
import Project from './project.js';

function Projects() {
    return(
        <div>
            {
            data.projects.map(function (item, i) {
                return <Project 
                    project = {item}
                />
            })
        }
        <hr></hr>
        </div>
    )
}

export default Projects;