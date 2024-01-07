
import ReactVideoPlayer from '../ReactVideoPlayer';

const About = () => {
  return (
    <div className='mt-10 max-w-[1800px] mx-auto'>
      <h2 className='text-center font-bold font-mono text-3xl'>About Me</h2>
      <div className='flex-row lg:flex justify-evenly items-center mt-10 lg:mx-48 gap-20'>
        <div className=''>
          <h2 className='text-2xl font-mono mb-8 ml-5'> Hi, I'm <span className='text-indigo-600 font-semibold'>Mujahid</span></h2>
          <p className='font-mono sm:text-base lg:text-lg mt-3 px-3 text-justify'>Full Stack Web Developer skilled in crafting dynamic web applications with good design sense. Combines strong creative and analytical abilities to deliver top-notch solutions. Successfully developed Market-Place and to-do list websites. Enthusiastic about exploring emerging technologies. Demonstrates a proven track record in optimizing web functionalities to enhance data retrieval and workflow efficiencies.</p>
        </div>
         <div className=" md:max-w-full ">
          <ReactVideoPlayer></ReactVideoPlayer>
        </div> 
      </div>
    </div>
  );
};

export default About;
