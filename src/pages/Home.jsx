import HeroBanner from "../components/HeroBanner";
import TrendingMovies from "../components/TrendingMovies";

const Home = () => {
  return (
    <div>
      <HeroBanner />
       <TrendingMovies />
      {/* Featured / trending shows section will be added in a later part */}
    </div>
  );
};

export default Home;
