import "./AboutMe.css";
import About from '../media_files/about-logo.png'

const AboutMe = () => {
    return (
        <div className="about">
            <div className="about-container">
                <h1>
                    About Me
                    <img Style="width:40px;height:40px;float:right;" src={About} alt="about" />
                </h1>
                <hr />
                <div>
                    <div className="about-info" id="summary">
                        <h2>Software Engineer</h2>
                        <p>
                            Strong in design and integration with intuitive problem-solving skills. 
                            Proficient in JAVA, PYTHON, JAVASCRIPT, SQL and NOSQL. Passionate 
                            about implementing and launching new projects. Ability to translate business 
                            requirements into technical solutions. Continuous learner of new technologies, 
                            strategies, and tools.
                        </p>
                    </div>
                    <div className="about-info" id="personal-info">
                        <h2>Personal Information</h2>
                        <p>
                            <b><u>Name</u> :</b> Kusol Banerji<br/>
                            <b><u>Age</u> :</b> 22 Years<br/>
                            <b><u>Residence</u> :</b> Kolkata, India<br/>
                            <b><u>Email</u> :</b> kusol.banerji100@gmail.com<br/>
                            <b><u>Phone</u> :</b> (+91) 700 301 1271<br/>
                        </p>
                    </div>
                </div>
                <br/><br/>
                <div className="services">
                    <h2>Services</h2>
                    <div>
                        <div className="services-div">
                            <label>📰</label>
                            <h3>Web Development</h3>
                            <p>
                                Create visually appealing, brand strengthening 
                                digital interfaces that attract users.
                            </p>
                        </div>
                        <div className="services-div">
                            <label>💻</label>
                            <h3>Backend Development</h3>
                            <p>
                                Build extensible back-end solutions that 
                                scale together business needs.
                            </p>
                        </div>
                        <div className="services-div">
                            <label>✨</label>
                            <h3>Responsive Design</h3>
                            <p>
                                Make applications smart enough to resize 
                                and adapt its content based on screen size.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe