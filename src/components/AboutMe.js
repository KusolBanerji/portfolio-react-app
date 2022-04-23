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
                <div Style="width:40%;">

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe