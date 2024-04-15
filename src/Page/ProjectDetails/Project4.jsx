import { Button } from '@mui/material';


const Project4 = () => {
    return (
        <div className='mx-auto max-w-[800px] mt-10'>
            <h1 className='text-2xl mt-28 text-center font-mono mb-10 text-teal-500 font-bold'>Car Deals</h1>
            <img className='w-[600px] h-72 mx-auto' src="https://i.ibb.co/KmQ9SJy/Screenshot-15-4-2024-11351-streme-eight-vercel-app.jpg" alt="" />
            <hr />
            <p className='mt-10  font-mono'><span className='font-bold text-xl'>OverView:</span> The user dashboard facilitates video uploads and playback with features like liking and saving to playlists. Additionally, users can interact with a chatbot and engage in messaging with others. This comprehensive platform provides seamless video management, social interaction, and AI-powered assistance, enhancing the user experience across various activities.</p>

            <p className='mt-10 font-mono'><span className='font-bold text-xl'>Technology used:</span> Next.js, Tailwind CSS, ExpressJS, Firebase, Node.js MongoDB.</p>

            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }} href='https://github.com/sajalbiswas1/video-stream-client-side/tree/Mujahid'>
        Client Code Link
      </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }} href='https://github.com/sajalbiswas1/video-stream-server-side'>
        Server Code Link
      </Button>
      <Button variant="contained" color="secondary" href='https://streme-eight.vercel.app/'>
        Live Link
      </Button>
            </div>
        </div>
    );
};

export default Project4;