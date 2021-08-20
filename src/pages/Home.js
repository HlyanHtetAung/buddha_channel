import About from "../components/About";
import Posters from "../components/Posters";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <img
          src="https://s3-cdn.tripfuser.com/blog/wp-content/uploads/2018/02/21083327/Bagan-Temples.jpg"
          alt=""
        />
        <div className="home__quoteDiv">
          <span className="home__quote">Give even if you have a little</span>
          <h2 className="home__quoteOwner">(Buddha)</h2>
        </div>
      </div>
      <About />
      <Posters />
    </>
  );
}

export default Home;
