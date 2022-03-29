import { NavLink } from "react-router-dom"
import "./SmallLayout.css"

const SmallLayout = () => {
    return (
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About Me</NavLink>
        <NavLink to="resume">Resume</NavLink>
        <NavLink to="portfolio">Portfolio</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
    )
}

export default SmallLayout