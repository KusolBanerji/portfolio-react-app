import "./Resume.css";
import ResumePic from '../media_files/resume-logo.png'

const Resume = () => {
    return (
        <div className="resume">
            <div className="resume-container">
                <h1>
                    Resume
                    <img Style="width:40px;height:40px;float:right;" src={ResumePic} alt="about" />
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

export default Resume