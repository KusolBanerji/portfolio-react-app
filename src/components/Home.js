import "./Home.css";
import Photo from "../media_files/home-bg.gif";

const Home = () => {
  return (
    <div className="home">
      <img src={Photo} alt="Snow" id="img" />
      <div className="center">
        <h1 Style="font-size: 3vw;">
          KUSOL BANERJI
        </h1>
        <div className="typewriter">
          <h1 Style="color:orange;">FULL STACK DEVELOPER <br/> Key Skills :REACT JS, JAVA, NODE JS, PYTHON </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
