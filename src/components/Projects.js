import "./Projects.css";
import Project from '../media_files/project-logo.png'

const Projects = () => {
    return (
        <div className="project">
            <div className="project-container">
                <h1>
                    About Me
                    <img Style="width:40px;height:40px;float:right;" src={Project} alt="about" />
                </h1>
                <hr />
                <div Style="width:40%;">

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Projects