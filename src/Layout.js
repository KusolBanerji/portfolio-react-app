import { Outlet, Link } from "react-router-dom";
import Image from "./components/Image";

const Layout = () => {
  return (
    <>
      <div Style="width: 12%; float: left;">
        <div>
          <Image />

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About Me</Link>
              </li>
              <li>
                <Link to="resume">Resume</Link>
              </li>
              <li>
                <Link to="portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="blogs">Blog</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div>
            <ul>
              <li>
                <Link to="#">
                  <i className="fab fa-facebook-square"></i>
                </Link>
              </li>
              <li>
                <Link to={<Layout/>}>
                  <i className="fab fa-twitter-square"></i>
                </Link>
              </li>
              <li>
                <Link to={<Layout/>}>
                  <i className="fab fa-youtube-square"></i>
                </Link>
              </li>
              <li>
                <Link to={<Layout/>}>
                  <i className="fab fa-dribbble-square"></i>
                </Link>
              </li>
              <li>
                <Link to={<Layout/>}>
                  <i className="fab fa-behance-square"></i>
                </Link>
              </li>
            </ul>
            <div>
              <p>
                2021 © Cosmos-Themes.
                <br />
                All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
