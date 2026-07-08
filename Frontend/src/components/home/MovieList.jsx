import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getHorrorMovies,
  getSciFiMovies,
  getComedyMovies,
  getActionMovies,
} from "../../services/api";
import PosterCard from "../ui/PosterCard";

const MovieList = () => {
  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    horror: [],
    sciFi: [],
    comedy: [],
    action: [],
  });

  useEffect(() => {
    // async convert into 3 states: pending, success, error
    const fetchAllMovies = async () => {
      try {
        const [popular, topRated, horror, sciFi, comedy, action] =
          await Promise.all([
            getPopularMovies(),
            getTopRatedMovies(),
            getHorrorMovies(),
            getSciFiMovies(),
            getComedyMovies(),
            getActionMovies(),
          ]);
        setMovies({
          popular,
          topRated,
          horror,
          sciFi,
          comedy,
          action,
        });
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    fetchAllMovies();
  }, []);
  return (
    <>
      <div>
        <PosterCard
          title="Popular Movies"
          movies={movies.popular.slice(0, 8)}
        />
        <PosterCard
          title="Top Rated Movies"
          movies={movies.topRated.slice(0, 8)}
        />
        <PosterCard title="Horror Movies" movies={movies.horror.slice(0, 8)} />
        <PosterCard title="Sci-Fi Movies" movies={movies.sciFi.slice(0, 8)} />
        <PosterCard title="Comedy Movies" movies={movies.comedy.slice(0, 8)} />
        <PosterCard title="Action Movies" movies={movies.action.slice(0, 8)} />
      </div>
    </>
  );
};
export default MovieList;
