import { useNavigate } from "react-router-dom"
import Typical from "react-typical"
import me from "../../Assets/me.webp"

const Profile = () => {
    const navigate = useNavigate();

    const Projects = () => {
        navigate("/projects")
    }

    const Resume = () => {
        navigate("/resume")
    }

    return (

        <div className="main-body">
            <div className="home-card d-flex">
                <div className="card">
                    <img className="card-img-top card-img" src={me} alt="Andrew's potrait" />
                    <h2 className="card-title text-center my-0">Andrew</h2>
                    <h2 className="card-title text-center my-0">Kimani</h2>
                    <hr />
                    <span className="profile-role py-0 mb-0 text-center">
                        <Typical
                            loop={Infinity}
                            steps={[
                                'Software Developer', 8000,
                                'Front-End-Developer', 9000
                            ]}
                        />
                    </span>
                    <div className="mobile-buttons">
                        <button onClick={Resume} className="btn button1 btn-primary mobile-btn-touch1">RESUME</button>
                        <button onClick={Projects} className="btn btn-outline-primary button2 mobile-btn-touch">PROJECTS</button>
                    </div>
                    <div className="pad">
                        <div className="card-footer">
                            <p>Get in Touch</p>
                            <div className="card-link">
                                <a href="https://www.linkedin.com/in/drew-kimani/" title="Linkedin" target="_blank" rel="noreferrer">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/masaneii/" title="Instagram" target="_blank" rel="noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="https://twitter.com/masaneii" title="Twitter" target="_blank" rel="noreferrer">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="https://github.com/andrew4779" title="Github" className="" target="_blank" rel="noreferrer">
                                    <i className="fa fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-card-description">
                        <h1 className="">Hello</h1>
                        <p className="profile-tagline">
                            I'm Andrew, a Software Developer based in Kenya.
                            <br />
                            <br className="hide-space" />
                            <br />
                        </p>
                        <button onClick={Resume} className="btn button1 btn-primary mobile-button-display">RESUME</button>
                        <button onClick={Projects} className="btn btn-outline-primary button2 mobile-button-display">PROJECTS</button>
                    </div>
                </div>
        </div>
    );
}

export default Profile;