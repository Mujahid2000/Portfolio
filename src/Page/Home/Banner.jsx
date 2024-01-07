import { Button } from '@mui/material';
import {MovingComponent} from 'react-moving-text' 
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className="sm:items-center mt-20 sm:flex-row lg:flex items-center lg:justify-between lg:mx-52">
            <div >
            <h3 className="font-mono text-2xl font-semibold ml-5">Hi I'm <span className='text-indigo-600'>Mujahidul Islam</span> </h3>
            <h2 className='flex ml-5 text-base lg:text-2xl lg:mt-4 font-mono'>I'm a <span className='font-bold text-cyan-500 text-base lg:text-3xl'>
                <MovingComponent type="typewriter"
            dataText={[
            'MERN Stack Developer',
            'React Expert',
            'Javascript Expert'
            ]} />
            </span> 
            </h2>
            <p className='font-mono text-lg mt-3 px-3 lg:w-[800px] text-justify ml-2'>
            As junior Web Developer skilled in HTML, CSS, and JavaScript, specializing in full-stack development. Proficient in ReactJS, Node.js/Express.js, and MongoDB. Proven hands-on expertise in dynamic web development, eager for new challenges.
            </p>

            <div className='flex gap-7 mt-5 ml-5'>
            <Link to={'/projects'}>
            <Button  color='success' variant="contained" >View Projects</Button>
            </Link>
            <Button href='https://drive.usercontent.google.com/download?id=19S7j6vBEeEsJXvCfK1DbJjXx21ZmPZs3&export=download&authuser=0&confirm=t&uuid=c7fab1e6-6b4f-453c-9aec-4fd9ae2f2c98&at=APZUnTXeMKQU84R9uzetobfyJX6t:1702237301051' variant="contained" endIcon={<ArrowDownwardIcon />} >download CV</Button>
            </div>
            <p className='mt-5 text-lg font-mono ml-5'>Connect With Me</p>
            <div className='flex gap-8 mt-4 ml-5'>
            <Button href='https://github.com/' sx={{ backgroundColor: '#eceff1', }}>
            <GitHubIcon sx={{ fontSize: '1.8rem'}}/>
            </Button>

            <Button href='https://www.facebook.com/mujahidul.islam.1656854/' sx={{ backgroundColor: '#eceff1'}}>
            <FacebookOutlinedIcon sx={{ fontSize: '1.8rem' }}/>
            </Button>

            <Button href='https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/' sx={{ backgroundColor: '#eceff1'}}>
            <LinkedInIcon sx={{ fontSize: '1.8rem' }}/>
            </Button>
            </div>
            
            
            
            </div>
            <div className='items-center'>
            <img className="sm:rounded-full lg:rounded-md  ml-8 mt-9  sm:h-28 w-80 lg:h-96" src="https://imgtr.ee/images/2023/12/07/d2d9ef058f383927fd2cb565623eb588.jpeg" alt="" />
            </div>
        </div>
        
        </div>
    );
};

export default Banner;