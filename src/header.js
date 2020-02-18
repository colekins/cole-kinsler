import React from 'react';
import './App.css';

const Header = () => {
    return (
        <div className="">
            <div className="row">
                <img className="profile" alt='profile' src="https://i.imgur.com/eNAhoPc.png"/>
                <div className="col-md-7 intro-box">
                <h1 className="name">Cole Kinsler</h1>
                <div className="caption"><span>Web Developer in Portland, ME</span></div>
                <p className="intro">
                    An ambitious developer who is eager to solve real-world problems with unique solutions. Driven by a passion for creativity, I am constantly expanding my skill set to drive thoughtfully designed applications.
                </p>
                <p className="sub">
                    I enjoy working with Javascript, React, HTML5, CSS3, Sass and Node. I'm especially interested in emerging front end frameworks, GraphQL, and CSS Grid at the moment.
                </p>
                <div className="actions">
                    <a href="mailto:colekins@gmail.com?Subject=Hi there" rel="noopener noreferrer" target="_blank">Email</a>
                    <a href="https://github.com/colekins/" rel="noopener noreferrer" target="_blank">GitHub</a>
                </div>
                </div>
            </div>
            <hr></hr>
        </div>
      );
}


export default Header;
