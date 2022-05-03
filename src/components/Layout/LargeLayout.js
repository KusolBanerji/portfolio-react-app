import { NavLink, Link } from "react-router-dom";
import Image from "./Image/Image";
import Layout from "./Layout";
import "./LargeLayout.css"
import Photo from '../../media_files/Photo1-1.jpg'

const LargeLayout = () => {
  return (
    <div className="main-div">
      <div className="layout">
        <Image photo={Photo} txt="KUSOL BANERJI"/>

        <nav>
          <ul className="layout-ul">
            <li>
              <NavLink className="link" to="/">
                <label>&#127968;</label> Home
              </NavLink>
              <hr />
            </li>
            <li>
              <NavLink className="link" to="about">
                <label>&#128102;&#127995;</label> About Me
              </NavLink>
              <hr />
            </li>
            <li>
              <NavLink className="link" to="resume">
                <label>&#128203;</label> Resume
              </NavLink>
              <hr />
            </li>
            <li>
              <NavLink className="link" to="projects">
                <label>&#128188;</label> Projects
              </NavLink>
              <hr />
            </li>
            <li>
              <NavLink className="link" to="contact">
                <label>&#128241;</label> Contact
              </NavLink>
              <hr />
            </li>
          </ul>
        </nav>

        <div className="layout-footer">
          <ul className="layout-ul-footer">
            <li>
              <Link to="#">
                <i className="fa fa-linkedin-square"></i>
              </Link>
            </li>
            <li>
              <Link to={<Layout />}>
                <i className="fa fa-github-square"></i>
              </Link>
            </li>
            <li>
              <Link to={<Layout />}>
                <i className="fa fa-google"></i>
              </Link>
            </li>
            <li>
              <Link to={<Layout />}>
                <i className="fa fa-whatsapp"></i>
              </Link>
            </li>
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default LargeLayout;
