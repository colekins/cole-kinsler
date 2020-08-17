import React from 'react';
import data from './data.js';
import Project from './project.js';

function Projects() {
  return (
    <div>
      {data.projects.map(function (item, i) {
        return <Project project={item} key={i} />;
      })}
      <hr></hr>
      <div className='music-note'>
        If you're looking for my music, you should go{' '}
        <a
          href='http://spacemountain.bandcamp.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          here
        </a>
        .
      </div>
    </div>
  );
}

export default Projects;
