import ScrollToTop from "react-scroll-to-top"
import andrew_resume from "../../Assets/Curriculum Vitae.pdf"

const Resume = () => {
    return (
        <div className="resume-body">
            <div className="">
                <h2 className="navbar-brand headline" href="/"><span className="dot align-top mr-3">do</span>Resume</h2>
                <div className="d-flex resume-content">
                    <p className="experience-style">Experience</p>
                    <a href={andrew_resume} download="Andrew's Resume" className="" target="_blank" rel="noreferrer">
                        <button className="btn button3">DOWNLOAD CV</button>
                    </a>
                </div>

                <div className="experience d-flex">
                    <div className="role">
                        <p className="role1">OCT 2022 - Present</p>
                        <p className="role2">Software engineer</p>
                        <p className="role3"> iTalanta </p>
                        <p className="role4"> Hybrid/Remote </p>
                    </div>
                    <div></div>
                </div>

                <div className="experience d-flex">
                    <div className="role">
                        <p className="role1">Jan 2022 - Mar 2022</p>
                        <p className="role2">Frontend Developer (intern)</p>
                        <p className="role3"> Creative Consilium</p>
                        <p className="role4">Fully Remote</p>
                    </div>
                    <div className="description">
                        <ul className="desc-list">
                            <li>Collaboration in designing the user interface of the web application.</li>
                            <li>Front-end development using angular.</li>
                            <li>Testing front-end design, usability, and software security before deployment.</li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex resume-content">
                    <p className="experience-style">Education</p>
                </div>
                <div className="experience d-flex">
                    <div className="role">
                        <p className="role1">2021 - 2022</p>
                        <p className="role2">Moringa School</p>
                        <p className="role3">Software Developement</p>
                        <p className="role4">Ngong Lane, Kenya</p>
                    </div>
                    <div className="description">
                        <ul className="desc-list">
                            <p className="course-work underline">Relevant Coursework:</p>
                            <li>Introduction to Programming</li>
                            <li>Object-Oriented Programming</li>
                            <li>Proffesional Developement(Prodev)</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex resume-content">
                    <p className="experience-style">Technical Skills</p>
                </div>
                <div className="experience dis-skill">
                    <div className="description">
                        <ul className="desc-list list-style">
                            <li><span className="dot align-top mr-3 dot-size">do</span>Javascript</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Angular</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Git</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Django</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Flask</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>SQL</li>

                        </ul>
                    </div>
                    <div className="description">
                        <ul className="desc-list list-style">
                            <li><span className="dot align-top mr-3 dot-size">do</span>Reactjs</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>UI&UX Design</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>HTML5</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>CSS</li>
                            <li><span className="dot align-top mr-3 dot-size">do</span>Github</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth color="#007bff" />
        </div>
    );
}
 
export default Resume;