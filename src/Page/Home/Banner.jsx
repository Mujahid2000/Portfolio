import { Button } from '@mui/material';
import {MovingComponent} from 'react-moving-text' 
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Banner = () => {
    return (
        <div>
            <div className="mt-20 flex items-center justify-between lg:mx-52">
            <div >
            <h3 className="font-mono text-base lg:text-xl">Hi I'm Mujahidul Islam</h3>
            <h2 className='flex text-base lg:text-2xl lg:mt-4 font-mono'>I'm a <span className='font-bold text-cyan-500 text-base lg:text-3xl'>
                <MovingComponent type="typewriter"
            dataText={[
            'MERN Stack Developer',
            'React Expert',
            'Javascript Expert'
            ]} />
            </span> 
            </h2>
            <p className='font-mono text-lg mt-3 text-justify'>
            As a Junior Web Developer, I excel in HTML, CSS, and JavaScript, specializing in full-stack development. <br /> Proficient in ReactJS and Node.js/Express.js, with strong MongoDB skills for effective database management. <br /> My recent projects demonstrate hands-on expertise, showcasing the ability to contribute effectively to dynamic <br /> web development teams. Eager to tackle new challenges and enhance my skills continually.
            </p>

            <div className='flex gap-7 mt-5'>
            <Button   color='success' variant="contained" >View Projects</Button>
            <Button variant="contained" endIcon={<ArrowDownwardIcon />} >download CV</Button>
            </div>
            <p className='mt-5 text-lg font-mono'>Connect With Me</p>
            <div className='flex gap-8 mt-4'>
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
            <div>
            <img className="rounded-md w-32 h-40 lg:w-80 lg:h-96" src="https://imgtr.ee/images/2023/12/07/d2d9ef058f383927fd2cb565623eb588.jpeg" alt="" />
            </div>
        </div>
        
        </div>
    );
};

export default Banner;