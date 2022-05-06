import "./Projects.css";
import Image from './Layout/Image/Image'

import Project from '../media_files/project-logo.png'
import Photo1 from '../media_files/projects-img/project1.jpg'
import Photo2 from '../media_files/projects-img/project2.jpeg'
import Photo3 from '../media_files/projects-img/project3.JPG'
import Photo4 from '../media_files/projects-img/project4.JPG'

const Projects = () => {
    var arr = [
        { text:'Social Distancing Alert System', src:Photo1, href:'https://kusolbanerji.github.io/ML-Projects/Social%20Distancing/'},
        { text:'K-Means Clustering', src:Photo2, href:'https://kusol-banerji.shinyapps.io/K_means-Iris_Dataset/'},
        { text:'Cat Classifier', src:Photo3, href:'http://kusolbanerji.pythonanywhere.com/'},
        { text:'Object Detection', src:Photo4, href:'https://kusolbanerji.github.io/ML-Projects/Object%20Detection%20-%20ml5.js/'}
    ]
    var i = 0
    return (
        <div className="project">
            <div className="project-container">
                <h1>
                    Projects
                    <img Style="width:40px;height:40px;float:right;" src={Project} alt="about" />
                </h1>
                <hr />
                <div>
                    {
                        arr.map((each) => {
                            return <a href={arr[i].href} target='_blank' rel="noreferrer"><Image id={'img'+i} photo={arr[i].src} txt={arr[i++].text}/></a>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects