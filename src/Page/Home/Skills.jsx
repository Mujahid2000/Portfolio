

const Skills = () => {
  const skills = [
    { name: 'HTML', imageUrl: 'https://i.ibb.co/0fs4XyL/html-5-svgrepo-com.jpg' },
    { name: 'CSS', imageUrl: 'https://i.ibb.co/XsCzgdZ/4672509.png' },
    { name: 'JavaScript', imageUrl: 'https://i.ibb.co/XSjWDqn/javascript-logo-javascript-icon-transparent-free-png.webp' },
    { name: 'Tailwind CSS', imageUrl: 'https://i.ibb.co/8NtHPCT/social-square.jpg' },
    { name: 'React', imageUrl: 'https://i.ibb.co/LSnYRwB/react.jpg' },
    { name: 'React Router', imageUrl: 'https://i.ibb.co.com/7j03tvX/React-Router-logo-vector-01.webp' },
    { name: 'Next.Js', imageUrl: 'https://i.ibb.co/N7FrTLX/nextjs-boilerplate-logo.png' },
    { name: 'VueJs', imageUrl: 'https://i.ibb.co/jv1zYSr/vuejs.png' },
    { name: 'Node.JS', imageUrl: 'https://i.ibb.co/9tvBbQw/node-js-emblem-vector-28501403.jpg' },
    { name: 'Express.Js', imageUrl: 'https://i.ibb.co/7zq71MB/expressjs-removebg-preview.jpg' },
    { name: 'MongoDB', imageUrl: 'https://i.ibb.co/vvrdx27/images.png' },
    { name: 'Mongoose', imageUrl: 'https://i.ibb.co/GkTRSrg/mongoose.png' },
    { name: 'MySQL', imageUrl: 'https://i.ibb.co/fGhD2LV/logo-mysql-cdb-for-mysql-7.png' },
    { name: 'Supabase', imageUrl: 'https://i.ibb.co.com/ZxXbpVC/supabase-logo-DCC676-FFE2-seeklogo-com.png' },
    { name: 'Firebase', imageUrl: 'https://i.ibb.co/xgnVg88/firebase.jpg' },
    { name: 'GitHub', imageUrl: 'https://i.ibb.co/PjfFNDV/Git-Hub-Mark-ea2971cee799.png' },
    { name: 'Git', imageUrl: 'https://i.ibb.co/C5tB69v/images11-removebg-preview.jpg' },
  ];

  return (
    <div className='max-w-[1440px] mx-auto mt-1 md:mt-7 lg:mt-24 xl:mt-24 2xl:mt-24 flex flex-col items-stretch'>
      <h1 className="text-4xl text-center  font-bold mb-10">My Skills</h1>
      <div className="grid mx-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-6">
        {skills.map(skill => (
          <div key={skill.name} className="relative gap-5 group w-40 py-2 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img className="w-full h-32 object-cover" src={skill.imageUrl} alt={`${skill.name} logo`} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-xl text-white font-bold">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
