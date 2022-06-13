import ScrollToTop from "react-scroll-to-top";
import Quotes from "../../Assets/Quotes.webp";
import Awwards from "../../Assets/Awwards.webp";

const Projects = () => {
  return (
    <div className="resume-body">
      <div className="project-text">
        <h2 className="navbar-brand headline" href="/">
          <span className="dot align-top mr-3">do</span>Projects
        </h2>
        <p className>
          For a complete project dive check{" "}
          <a href="https://github.com/andrew4779">my github page</a> <br />
          <br />
          Check out some of my projects down below!
        </p>

        <div className="experience d-flex mt-5">
          <div className="role desc-proj">
            <div className="button4-flex">
              <p className="role1"> Quotes App</p>
              <a
                href="https://andrew4779.github.io/Quotes/"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              Quotes is an application that lets one post a quote through a form. The quote can then be upvoted or downvoted.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">
              Angular, Typescript, Javascript, HTML </p>
          </div>
          <div className="description img-place">
            <img src={Quotes} alt="" className="md-preview" />
          </div>
        </div>

          <div className="experience d-flex mt-5">
          <div className="role desc-proj">
            <div className="button4-flex">
              <p className="role1"> Awwards App</p>
              <a
                href="https://drewawwards.herokuapp.com/"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              This is web application that allows you to view different projects that have been posted.The Projects can reviewed and rated according to usability, design and content.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">
             Python, Django, Ajax, Javascript, HTML, Powershell. </p>
          </div>
          <div className="description img-place">
            <img src={Awwards} alt="" className="md-preview" />
          </div>
        </div>        

      </div>
      <ScrollToTop smooth color="#007bff" />
    </div>
  );
};

export default Projects;