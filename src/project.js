import React from 'react';

function Project(props) {
  return (
    <div className='row'>
      <br></br>
      <div className='col-md-5'>
        <a href={props.project.live} target='_blank' rel='noopener noreferrer'>
          <img
            src={props.project.screenshot}
            alt={props.project.title + ' screenshot'}
            className='mobile-screenshot screenshot'
          ></img>
        </a>
        <h3 className='appname'>{props.project.title}</h3>
        <div className='caption'>
          <span>{props.project.date}</span>
        </div>
        {props.project.description.map(function (text, i) {
          return (
            <p className='project-description' key={i}>
              {text}
            </p>
          );
        })}
        <div className='actions'>
          <a
            href={props.project.live}
            target='_blank'
            rel='noopener noreferrer'
          >
            Live
          </a>
          {props.project.repo ? (
            <a
              href={props.project.repo}
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          ) : (
            <span className='private-repo'>Private Repo</span>
          )}
        </div>
      </div>
      <div className='col-md-7'>
        <div className='project'>
          <a
            href={props.project.live}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={props.project.screenshot}
              alt={props.project.title + ' screenshot'}
              className='desktop-screenshot screenshot'
            ></img>
          </a>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Project;
