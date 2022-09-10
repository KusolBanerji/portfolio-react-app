import "./Resume.css";
import ResumePic from '../media_files/resume-logo.png'

const Resume = () => {
    var experiences = [
        {org: 'Wells Fargo', loc:'Hyderabad, Telangana, India', duration: 'Aug 2022 - Present', role: 'Program Associate', desc: 'Designing and developing Pega BPM applications. Performing solution architecture within the Pega PRPC environment. Designing class structures, application frameworks, and data models. Coordinating with the project team to ensure the business architecture matches the needs of the customer. Integrating business databases, legacy systems, and web services. Troubleshooting application issues, coding bugs, and bottlenecks. Conducting system performance tests. Maintaining the security of all system applications.', tech: 'PEGA, Java, HTML, CSS, JS', src: require('../media_files/exp-logo/Wells_Fargo.png')},
        {org: 'Persistent Systems', loc:'Pune, Maharashtra, India', duration: 'Jan 2022 - Jun 2022', role: 'UI - React Developer Intern', desc: 'Prepared User Interface with React Framework. Used React Hooks and Redux to use local component states, execute side effects and more. Developed backend server using Node Js and Express Js. Created NoSQL(MongoDb) database server using Mongoose.', tech: 'HTML, CSS, JavaScript, React Framework, Node Js, MongoDb', src: require('../media_files/exp-logo/Persistent_Systems.png')},
        {org: 'Whoogly Pvt. Ltd.', loc:'Virtual', duration: 'Aug 2020 - Sep 2020', role: 'Backend(PHP) Developer Intern', desc: 'Implemented backend server using PHP. Merged frontend design with the backend. Made database operations(CRUD) in MySQL using PHP.', tech: 'PHP, MySQL'}
    ]
    var educations = [
        {institute: 'Academy of Technology', loc: 'West Bengal, India', duration: 'Aug 2018 - Jun 2022', degree: 'Bachelor of Technology(B. Tech.)', specialization: 'Electronics and Communication Engineering(ECE)', score: 9.37, extra: '', src: require('../media_files/edu-logo/aot.png')}
    ]
    var skills = [
        {name: 'Java', rate: 5, src: require('../media_files/skills-logo/java.png')},
        {name: 'JavaScript', rate: 5, src: require('../media_files/skills-logo/javascript.png')},
        {name: 'Python', rate: 5, src: require('../media_files/skills-logo/python.png')},
        {name: 'C/C++', rate: 5, src: require('../media_files/skills-logo/c++.png')},
        {name: 'Flask', rate: 4, src: require('../media_files/skills-logo/flask.png')},
        {name: 'Oracle', rate: 5, src: require('../media_files/skills-logo/oracle.png')},
        {name: 'MongoDb', rate: 5, src: require('../media_files/skills-logo/mongodb.png')},
        {name: 'Express JS', rate: 5, src: require('../media_files/skills-logo/express.png')},
        {name: 'React JS', rate: 5, src: require('../media_files/skills-logo/react.png')},
        {name: 'Node JS', rate: 5, src: require('../media_files/skills-logo/nodejs.png')},
        {name: 'HTML', rate: 5, src: require('../media_files/skills-logo/html.png')},
        {name: 'CSS3', rate: 5, src: require('../media_files/skills-logo/css.png')},
        {name: 'Bootstrap', rate: 3, src: require('../media_files/skills-logo/bootstrap.png')}
    ]
    var tools = [
        {name: 'Visual Studio', rate: 5, src: require('../media_files/tools-logo/visualstudio.png')},
        {name: 'Eclipse', rate: 5, src: require('../media_files/tools-logo/eclipse.png')},
        {name: 'Spyder', rate: 5, src: require('../media_files/tools-logo/spyder.png')},
        {name: 'Jupyter Notebook', rate: 5, src: require('../media_files/tools-logo/jupyter.png')},
        {name: 'Git', rate: 5, src: require('../media_files/tools-logo/git.png')},
        {name: 'Robo3T', rate: 4, src: require('../media_files/tools-logo/robo3t.png')},
        {name: 'Postman', rate: 4, src: require('../media_files/tools-logo/postman.png')},
    ]
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
                        {
                            experiences.map((each) => <div className="experience">
                                <div className="exp-child left">
                                    <h3>{each.src && <img className="img" src={each.src} alt="Experience"/>} {each.org}</h3>
                                    <p>📍{each.loc}</p>
                                    <p>{each.duration}</p>
                                </div>
                                <div className="exp-child disp">
                                    <h3>{each.role}</h3>
                                    <p>
                                        {each.desc}
                                    </p>
                                    <p>
                                        Technologies used - {each.tech}.
                                    </p>
                                </div>
                            </div>
                            )
                        }
                    </div>
                    <div className="res">
                        <h2>Education</h2>
                        {
                            educations.map((each) => <div className="experience">
                                <div className="exp-child left">
                                    <h3>{each.src && <img className="img" src={each.src} alt="Education"/>} {each.institute}</h3>
                                    <p>📍{each.loc}</p>
                                    <p>{each.duration}</p>
                                </div>
                                <div className="exp-child disp">
                                    <h3>{each.degree}</h3>
                                    <p>
                                        {each.specialization}
                                    </p>
                                    <p>
                                        C.G.P.A. : {each.score} {each.extra}
                                    </p>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
                <br/><br/><br/>
                <div>
                    <div className="resume-info" id="left-panel">
                        <h2>Skills</h2>
                        <ul className="ul">
                            {
                                skills.map((each) => {
                                    let whiteStar = '&#9733;'.repeat(each.rate)
                                    let blackStar = '&#9734;'.repeat(5-each.rate)
                                    let innerHtml = whiteStar+blackStar
                                    return <li><div Style="width:10%"><img className="img" src={each.src} alt="Skill"/></div>{each.name}<label dangerouslySetInnerHTML={{__html: innerHtml}}></label></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="resume-info" id="right-panel">
                        <h2>Tools</h2>
                        <ul className="ul">
                            {
                                tools.map((each) => {
                                    let whiteStar = '&#9733;'.repeat(each.rate)
                                    let blackStar = '&#9734;'.repeat(5-each.rate)
                                    let innerHtml = whiteStar+blackStar
                                    return <li><div Style="width:10%"><img className="img" src={each.src} alt="Skill"/></div>{each.name}<label dangerouslySetInnerHTML={{__html: innerHtml}}></label></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume