import React from 'react';

export default function Bio(){
    return(
        <div className='bio'>
            <h1 className='bio-header'>I'm Katie</h1>
            <p className='bio-subheader'>a Full Stack Engineer</p>
            {/* *Include/embed icons for Github/Linkedin/email here* */}
        </div>

        <div className='about-me'>
            <h1 className='about-me-header'>I'm a Full Stack Engineer based in Denver, Colorado.</h1>
            <p className='about-me-subheader'>I have a passion for data and design, which has led me to become a web developer</p>
            <p className='about-me-subheader'>Previously, I worked as a Graphic Designer and Business Analyst focusing in data automation</p>
        </div>

        <div className='tech-stack'>
            <h1 className='tech-stack-header'>Current Tech Stack</h1>
            <p className='tech-stack-subheader'>JavaScript, React, Ruby, Rails, Django</p>
            <p className='tech-stack-subheader'>Open to all new opportunities and languages! I have always been interested in challenges and long-term learning which piqued my interest in Software Engineering</p>
        </div>
    )
}