import { Button } from '@mui/material';


const Project3 = () => {
    return (
        <div className='mx-auto max-w-[800px] mt-10'>
            <h1 className='text-2xl mt-28 text-center font-mono mb-10 text-teal-500 font-bold'>Car Deals</h1>
            <img className='w-[600px] h-72 mx-auto' src="https://i.ibb.co/kBZ7H8k/Web-capture-11-12-2023-155625-pumped-side-surge-sh.jpg" alt="" />
            <hr />
            <p className='mt-10  font-mono'><span className='font-bold text-xl'>OverView:</span> Explore a dynamic car marketplace with a homepage featuring car brands. Navigate through the navbar to discover brand-specific products. View, update details, and add products to the cart. Experience a comprehensive platform for buying, selling, and updating cars with user-friendly interactions.</p>

            <p className='mt-10 font-mono'><span className='font-bold text-xl'>Technology used:</span> ReactJs, Redux, Tailwind CSS, ExpressJS, Firebase, MongoDB.</p>

            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }} href='https://github.com/Mujahid2000/Brand-Client-Site'>
        Client Code Link
      </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }} href='https://github.com/Mujahid2000/Brand-Server-Site'>
        Server Code Link
      </Button>
      <Button variant="contained" color="secondary" href='https://pumped-side.surge.sh'>
        Live Link
      </Button>
            </div>
        </div>
    );
};

export default Project3;