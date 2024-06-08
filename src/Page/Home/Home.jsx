import ContactForm from "../ContactForm";
import JobExperience from "../JobEcperience";
import EducationComponent from "../educationData";
import About from "./About";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            {/* <JobExperience></JobExperience> */}
            <EducationComponent></EducationComponent>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;