import { Button } from '@mui/material';
import {MovingComponent} from 'react-moving-text' 

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='max-w-[1880px] mx-auto '>
            <div className="sm:items-center mt-20 sm:flex-row lg:flex items-center justify-around ">
            <div >
            <h3 className="font-mono text-2xl font-semibold ml-5">Hi I'm <span className='text-indigo-600'>Mujahidul Islam</span> </h3>
            <h2 className='flex ml-5 text-base lg:text-2xl lg:mt-4 font-mono'>I'm a <span className='font-bold text-cyan-500 text-base lg:text-3xl'>
                <MovingComponent type="typewriter"
            dataText={[
            'MERN Stack Developer',
            'React Developer',
            'Javascript Developer'
            ]} />
            </span> 
            </h2>
            <p className='font-mono text-lg mt-3 px-3 md:w-[700px] lg:w-[600px] text-justify ml-2'>
            As junior Web Developer skilled in HTML, CSS, and JavaScript, specializing in full-stack development. Proficient in ReactJS, Node.js/Express.js, and MongoDB. Proven hands-on expertise in dynamic web development, eager for new challenges.
            </p>

            <div className='flex gap-7 mt-5 ml-5'>
            <div className='flex gap-3'>
            <Link to={'/projects'}>
            <button className="bg-pink-500 hover:bg-pink-600 text-white  font-bold py-2 px-4 rounded">
              Projects
            </button>
            </Link>
            <Link to={'https://drive.usercontent.google.com/download?id=1zI_Z7IerPeomLvcOFWZoVTixSs5O3GQ7&export=download&authuser=2&confirm=t&uuid=2b44e543-1a2d-4db8-b8ae-a5a0e8940f53&at=APZUnTUtitdz6hNVOGLE3qIzvlZV:1706365179661'}>
            
            <button className="rounded-md border text-gray-700 hover:text-white border-gray-500 hover:bg-pink-600 hover:border-white font-bold py-2 px-4" >download CV</button>
            </Link>
            </div>
            </div>
            <p className='mt-5 text-lg font-mono ml-5'>Connect With Me</p>
            <div className='flex gap-8 mt-4 ml-5'>

            <Button href='https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/' sx={{ backgroundColor: '#eceff1'}}>
            <LinkedInIcon sx={{ fontSize: '1.8rem' }}/>
            </Button>
            <Button href='https://www.facebook.com/mujahidul.islam.1656854/' sx={{ backgroundColor: '#eceff1'}}>
            <FacebookOutlinedIcon sx={{ fontSize: '1.8rem' }}/>
            </Button>

            <Button href='https://github.com/Mujahid2000' sx={{ backgroundColor: '#eceff1', }}>
            <GitHubIcon sx={{ fontSize: '1.8rem', color: '#000000'}}/>
            </Button>
            </div>
            
            </div>
            <div>
            <img className=" lg:rounded-md items-center mx-auto justify-center flex mt-9 h-80 w-80 lg:h-96" src="https://i.ibb.co/ygLpwPN/01987064-removebg-preview.png" alt="" />
            </div>
        </div>
        
        </div>
    );
};

export default Banner;