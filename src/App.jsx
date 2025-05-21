import { useState } from "react";
import Form from "./form";
import Movie from "./movie";

function App() {
  const [range, setRange] = useState(80);
  const [genre, setGenre] = useState("action");
  const [decade, setDecade] = useState("1980s");
  const [movie, setMovie] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const genres = {
    action: 28,
    adventure: 12,
    comedy: 35,
    crime: 80,
    drama: 18,
    documentary: 99,
    fantasy: 14,
    horror: 27,
    musical: 10402,
    mystery: 9648,
    romance: 10749,
    sciFi: 878,
    thriller: 53,
    western: 37,
  };

  const decades = {
    "1980s": [1980, 1989],
    "1990s": [1990, 1999],
    "2000s": [2000, 2009],
    "2010s": [2010, 2019],
    "2020s": [2020, 2025],
  };

  const genreId = genres[genre];
  const [startYear, endYear] = decades[decade];

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31&with_runtime.lte=${range}&vote_count.gte=100&page=1`;

  async function fetchRandomMovie() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
        setMovie(randomMovie);
        !isSubmit && setIsSubmit(true);
        return randomMovie;
      } else {
        console.warn("No results found.");
        alert("No movies found. Try adjusting your filters.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching movie:", err);
      alert("Failed to fetch movie.");
      return null;
    }
  }
  return (
    <main className="bg-blue-950 min-h-screen w-screen flex justify-center items-center">
      {isSubmit ? (
        <Movie movie={movie} 
        setIsSubmit={setIsSubmit} fetchRandomMovie={fetchRandomMovie} />
      ) : (
        <Form
          range={range}
          setRange={setRange}
          genre={genre}
          setGenre={setGenre}
          decade={decade}
          setDecade={setDecade}
          fetchRandomMovie={fetchRandomMovie}
        />
      )}
    </main>
  );
}
export default App;
