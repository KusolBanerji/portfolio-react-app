import "./Home.css";
import Photo from "../media_files/home-bg.gif";

const Home = () => {
  return (
    <div className="home">
      <img src={Photo} alt="Snow" id="img" />
      <div className="center">
        <h1 Style="font-size: 3vw;">
          KUSOL <b Style="color: purple;">BANERJI</b>
        </h1>
        <div className="typewriter">
          <h1><span Style="color:orange;">FULL STACK</span> DEVELOPER</h1>
          <h1><span Style="color:orange;">FRONT-END</span> SKILLS : <span Style="color:green;">REACT</span></h1>
          <h1><span Style="color:orange;">BACK-END</span> SKILLS : <span Style="color:green;">JAVA, NODE JS, PYTHON</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
