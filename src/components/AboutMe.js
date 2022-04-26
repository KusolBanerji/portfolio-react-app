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
                            requirements into technical solutions.
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
                <div className="services">
                    <h2>Services</h2>
                </div>
            </div>
        </div>
    )
}

export default AboutMe