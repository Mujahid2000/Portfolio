import { Link, useParams } from 'react-router-dom';
import Data from '../../datacopy.json';
const ProjectDetail = () => {
    const { id } = useParams();
    
    const data = Data.find(proj => proj.id == id)

    if(!data){
        return <div>
            <h2>Data not Found Here</h2>
        </div>
    }
    return (
        <div className='h-fit bg-white'>
           
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={data.picture}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-base font-bold title-font text-gray-800 tracking-widest">{data.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.title}</h1>
        <div className="flex mb-4">
         <h3 className='text-lg'>Technology: {data.Technology}</h3>
          
        </div>
        <p className="leading-relaxed">{data.overview}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          
          <div className="flex ml-6 items-center">
         
            
          </div>
        </div>
        <div className="flex justify-around items-center place-items-center mx-auto">
          <Link to={data.live_link}>
          <button className="flex  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Live Link</button>
          </Link>
          <Link to={data.client_link}>
          <button className="flex  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Client Site</button>
          </Link>
          <Link to={data.server_link}>
          <button className="flex  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Server Site</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default ProjectDetail;