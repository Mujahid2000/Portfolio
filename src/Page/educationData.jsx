


import { useSpring, animated } from 'react-spring';

const educationData = [
  {
    degree: 'Bachelor of Arts (B.A)',
    school: 'National University',
    year: '2019 - Present',
  },
  {
    degree: 'Higher Secondary Certificate (H.S.C)',
    school: 'Govt. B.M College, Barishal',
    year: '2016 - 2019',
  },
  {
    degree: 'Secondary School Certificate (S.S.C)',
    school: 'Jhalokathi Govt. High School',
    year: '2014 - 2016',
  },
];

const EducationComponent = () => {
  const cardAnimations = useSpring({
    from: { transform: 'rotateX(-90deg) translateZ(-100px)', opacity: 0 },
    to: { transform: 'rotateX(0deg) translateZ(0)', opacity: 1 },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <div className="py-8 px-6 lg:mx-52 max-w-[1600px] mx-auto mt-5">
      <h2 className="text-3xl mb-4 text-center font-mono">
        My Education Journey
      </h2>
      <div className="grid gap-4 mt-8">
        {educationData.map((education, index) => (
          <animated.div
            key={index}
            style={{ ...cardAnimations, delay: index * 150 }}
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
            <p className="text-gray-600">{education.school}</p>
            <p className="text-gray-600">{education.year}</p>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default EducationComponent;
