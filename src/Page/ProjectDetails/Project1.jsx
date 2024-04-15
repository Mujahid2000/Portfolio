import { Button } from '@mui/material';


const Project1 = () => {
    return (
        <div className='mx-auto max-w-[800px] mt-10'>
            <h1 className='text-2xl mt-28 text-center font-mono mb-10 text-teal-500 font-bold'>Taskla</h1>
            <img className='w-[600px] h-72 mx-auto p-2' src="https://i.ibb.co/tM67C77/Web-capture-11-12-2023-11418-dry-whip-surge-sh.jpg" alt="" />
            <hr />
            <p className='mt-10  font-mono p-4'><span className='font-bold text-xl'>OverView:</span> In this website you can show a home page where have some section. Job category part is one of the most important part. This part show some jobs. In every client can post job by using his account. And a freelancer can apply this job. Here is some or route. When you go my bid jobs how much bid you have and when you go bid request you will show how much job request on your posted jobs.</p>

            <p className='mt-10 font-mono p-4'><span className='font-bold text-xl'>Technology used:</span> React, Tailwind CSS, Node.js, Express.js, Firebase, MongoDB, JWT.</p>

            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 px-3'>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }} href='https://github.com/Mujahid2000/Market-Place-Website-Client'>
        Client Code Link
      </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }} href='https://github.com/Mujahid2000/Market-Place-Website-Server'>
        Server Code Link
      </Button>
      <Button variant="contained" color="secondary" href='https://childlike-dogs.surge.sh/'>
        Live Link
      </Button>
            </div>
        </div>
    );
};

export default Project1;