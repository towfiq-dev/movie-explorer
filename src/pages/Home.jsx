import ExploreByGenre from "../components/ExploreByGenre";
import HeroBanner from "../components/HeroBanner";
import TopRatedHighlights from "../components/TopRatedHighlights";
import TrendingMovies from "../components/TrendingMovies";

const Home = () => {
  return (
    <div>
      <HeroBanner />
       <TrendingMovies />
       <ExploreByGenre />
       <TopRatedHighlights />
      {/* Featured / trending shows section will be added in a later part */}
    </div>
  );
};

export default Home;
