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
                    <div className="res">
                        <h2>Experience</h2>
                        <div className="experience">
                            <div className="exp-child left">
                                <h3>Persistent Systems</h3>
                                <p>📍Pune, Maharashtra, India</p>
                                <p>Jan 2022 - Present</p>
                            </div>
                            <div className="exp-child disp">
                                <h3>UI - React Developer Intern</h3>
                                <p>
                                    Prepared User Interface with React Framework.
                                    Used React Hooks and Redux to use local component states, execute side effects and more.
                                    Developed backend server using Node Js and Express Js.
                                    Created NoSQL(MongoDb) database server using Mongoose.
                                </p>
                                <p>
                                    Technologies used - HTML, CSS, JavaScript, React Framework, Node Js, MongoDb.
                                </p>
                            </div>
                        </div>
                        <br/>
                        <div className="experience">
                            <div className="exp-child left">
                                <h3>Whoogly Pvt. Ltd.</h3>
                                <p>📍Virtual</p>
                                <p>Aug 2020 - Sep 2020</p>
                            </div>
                            <div className="exp-child disp">
                                <h3>Backend(PHP) Developer Intern</h3>
                                <p>
                                    Implemented backend server using PHP.
                                    Merged frontend design with the backend.
                                    Made database operations(CRUD) in MySQL using PHP.
                                </p>
                                <p>
                                    Technologies used - PHP, MySQL.
                                </p>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="res">
                        <h2>Education</h2>
                        <div className="experience">
                            <div className="exp-child left">
                                <h3>Academy of Technology</h3>
                                <p>📍West Bengal, India</p>
                                <p>Aug 2018 - Jul 2022</p>
                            </div>
                            <div className="exp-child disp">
                                <h3>Bachelor of Technology(B. Tech.)</h3>
                                <p>
                                    Specialization : Electronics and Communication Engineering(ECE)
                                </p>
                                <p>
                                    C.G.P.A. : 9.35 (upto 7th Semester)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div>
                    <div className="resume-info" id="left-panel">
                        <h2>Skills</h2>
                        <ul className="ul">
                            <li>Java<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>JavaScript<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Python<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>C/C++<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Flask<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Oracle SQL<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>MongoDb<label>&#9733;&#9733;&#9733;&#9733;&#9734;</label></li>
                            <li>Express JS<label>&#9733;&#9733;&#9733;&#9733;&#9734;</label></li>
                            <li>React JS<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Node JS<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>HTML<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>CSS3<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Bootstrap<label>&#9733;&#9733;&#9733;&#9733;&#9734;</label></li>
                        </ul>
                    </div>
                    <div className="resume-info" id="right-panel">
                        <h2>Tools</h2>
                        <ul className="ul">
                            <li>Visual Studio<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Eclipse<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Spyder<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Jupyter Notebook<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Git<label>&#9733;&#9733;&#9733;&#9733;&#9733;</label></li>
                            <li>Robo3T<label>&#9733;&#9733;&#9733;&#9733;&#9734;</label></li>
                            <li>Postman<label>&#9733;&#9733;&#9733;&#9733;&#9734;</label></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume