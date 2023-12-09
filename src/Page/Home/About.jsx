import React from 'react';

const About = () => {
    return (
        <div>
            <h2 className='text-center font-bold font-mono text-3xl'>About Me</h2>
            
        <div className='flex justify-evenly items-center mt-10'>
            <h2>Assalamu Alaikum,<br /> I'm Mujahidul Islam</h2>
            <div>
                <h2> </h2>
            </div>
            <div>
            <video width="640" height="360" controls>
            <source src='../../assets/Web Development.mp4' type="video.mp4" />
        </video>
            </div>
        </div>
        </div>
        
    );
};

export default About;