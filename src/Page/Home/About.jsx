
import ReactVideoPlayer from '../ReactVideoPlayer';

const About = () => {
  return (
    <div className='mt-14 max-w-[1440px] mx-auto place-items-center px-5'>
      <h2 className='text-center font-extrabold  text-4xl'>About Me</h2>
      <div className='flex-row md:flex-row lg:flex-row xl:flex 2xl:flex justify-evenly items-center mt-10 lg:mx-auto gap-10'>
        <div className='md:w-[700px] lg:w-[800px] xl:w-[800px] 2xl:w-[800px]'>
          
          <p className='font-mono sm:text-base lg:text-lg mt-3 px-3 text-justify'>As a Full Stack Web Developer skilled in crafting dynamic web applications with good design sense. Combines strong creative and analytical abilities to deliver top-notch solutions. Successfully developed Market-Place and to-do list websites. Enthusiastic about exploring emerging technologies. Demonstrates a proven track record in optimizing web functionalities to enhance data retrieval and workflow efficiencies.</p>
        </div>
         <div className="max-w-full ">
          <ReactVideoPlayer></ReactVideoPlayer>
        </div> 
      </div>
    </div>
  );
};

export default About;
