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
                <div>
                    <div className="resume-info" id="left-panel">
                        <h2>Experience</h2>
                        <div className="experience">
                            <div className="exp-child">
                                <h2>Persistent Systems</h2>
                                <p>Jan 2022 - Present</p>
                            </div>
                            <div className="exp-child">
                                <h3>UI - React Developer Intern</h3>
                                <span>📍Pune, India</span>
                                <ul>
                                    <li>Prepared User Interface with React Framework.</li>
                                    <li>Used React Hooks and Redux to use local component states, execute side effects and more.</li>
                                    <li>Developed backend server using Node Js and Express Js.</li>
                                    <li>Created NoSQL(MongoDb) database server using Mongoose.</li>
                                    <li>Technologies used - HTML, CSS, JavaScript, React Framework, Node Js, MongoDb.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="exp-child">
                                <h2>Whoogly Pvt. Ltd.</h2>
                                <p>Aug 2020 - Sep 2020</p>
                            </div>
                            <div className="exp-child">
                                <h3>Backend(PHP) Developer Intern</h3>
                                <span>📍Virtual</span>
                                <ul>
                                    <li>Implemented backend server using PHP.</li>
                                    <li>Merged frontend design with the backend.</li>
                                    <li>Made database operations(CRUD) in MySQL using PHP.</li>
                                    <li>Technologies used - PHP, MySQL.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="resume-info" id="right-panel">
                        <h2>Education</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume