import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from 'react-awesome-reveal';
import { FaDownload } from 'react-icons/fa';
// import resume from "../../../public/resume.1.pdf"

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div id='aboutMe' className="hero min-h-screen bg-gray-500 py-3 md:px-32">
            <div className="hero-content flex lg:flex-row-reverse gap-7">
                <div className='md:w-2/5'>
                    <Fade direction="right">
                        <img
                            src="https://i.ibb.co/ByB9VzG/aboutmejpg.jpg"
                            className=" h-96 w-full object-cover rounded-lg shadow-2xl"
                            alt="About Me"
                        />
                    </Fade>
                </div>
                <div className='md:w-3/5'>
                    <Fade direction="left">
                        <div>
                            <h1 className="text-3xl font-bold">About me</h1>
                            <h1 className="text-3xl font-bold text-red-400">I am available for your Project</h1>
                            <p className="py-6 text-justify">
                               I am Md Alhaj Sarker, I am from Sirajgonj, Bangladesh. I am passionate about coding and creating user-friendly web applications. With expertise in HTML5, CSS3, JavaScript, and ReactJS, I strive to develop great user experiences. I am a quick learner, thrive in fast-paced environments, and have experience with tools like VS Code, Figma, Git & GitHub. I have strong communication skills, work well in teams, and meet project deadlines with attention to detail. Check out my projects, and lets connect for exciting opportunities!
                            </p>
                            <a href='' download>
                                <button
                                    type="submit"
                                    className=" btn btn-error btn-sm font-bold"
                                >
                                    Download Resume
                                    <span>
                                        <FaDownload />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;