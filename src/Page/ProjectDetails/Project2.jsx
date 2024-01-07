import { Button } from '@mui/material';


const Project2 = () => {
    return (
        <div className='mx-auto max-w-[800px] mt-10'>
            <h1 className='text-2xl mt-28 text-center font-mono mb-10 text-teal-500 font-bold'>Fitness Center</h1>
            <img className='w-[600px] h-72 mx-auto' src="https://i.ibb.co/bNqyjgZ/Web-capture-11-12-2023-22931-worried-horn-surge-sh.jpg" alt="" />
            <hr />
            <p className='mt-10  font-mono'><span className='font-bold text-xl'>OverView:</span> This is a Fitness related website. Where a customer see about a company which service they provide and take service from this company. And a trainer can also apply on this company using this website. In this website, user, trainer, and admin dashboard. A user can book a trainer. A user can see schedule class.</p>

            <p className='mt-10 font-mono'><span className='font-bold text-xl'>Technology used:</span> ReactJs, Redux, Tailwind CSS, ExpressJS, Firebase, MongoDB, JWT.</p>

            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }} href='https://github.com/Mujahid2000/Fitness-Website'>
        Client Code Link
          </Button>
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }} href='https://github.com/Mujahid2000/Fitness-Server'>
        Server Code Link
          </Button>
          <Button variant="contained" color="secondary" style={{ marginRight: '10px' }} href='https://gigantic-scarf.surge.sh/'>
        Live Link
          </Button>
            </div>
        </div>
    );
};

export default Project2;