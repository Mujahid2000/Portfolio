import { Link } from 'react-router-dom';
import Data from '../../datacopy.json';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios.get(Data)
    setProject(Data);
  }, []);


  return (
    <div className='mt-10 place-items-center max-w-[1500px] mx-auto'>
      <h1 className='text-center font-bold  text-4xl'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {project.map(proj => (
          <div key={proj.id} className="max-w-sm bg-white mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
          <div className="relative">
              <img className="w-96 h-64" src={proj.picture} alt="Product Image"/>
              
          </div>
          <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{proj.title}</h3>
              <div className="flex items-center justify-between py-4">
              <Link to={proj.live_link} target="_blank">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              Live link
            </button>
              </Link>
                 <Link to={`/projectDetails/${proj.id}`} >
                 <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              Project Details
            </button>
                 </Link>
              </div>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
