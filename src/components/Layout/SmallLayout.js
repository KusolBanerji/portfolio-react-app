import { NavLink } from "react-router-dom"
import "./SmallLayout.css"

const SmallLayout = () => {
    return (
      <div className="topnav">
        <NavLink to="/">&#127968;Home</NavLink>
        <NavLink to="about">&#128102;&#127995;About Me</NavLink>
        <NavLink to="resume">&#128203;Resume</NavLink>
        <NavLink to="projects">&#128188;Projects</NavLink>
        <NavLink to="contact">&#128241;Contact</NavLink>
      </div>
    )
}

export default SmallLayout