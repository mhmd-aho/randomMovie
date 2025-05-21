import ReadMore from "./readmore";
export default function Movie(props) {
  const theMovie = props.movie;

  const handleRetry = async () => {
    await props.fetchRandomMovie();
  };

  return (
    <section className="p-2 flex flex-col gap-4 min-h-[90%] w-[95%] md:w-[80%] rounded-3xl bg-teal-600 text-blue-50">
      <div className="w-full flex justify-between items-center px-4">
        <button className="w-6 h-6 sm:w-8 sm:h-8" onClick={() => props.setIsSubmit(false)}>
          Back
        </button>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center flex-1">
          {theMovie.title}
        </h1>
        <button className="w-6 h-6 sm:w-8 sm:h-8"  onClick={handleRetry}>
          Retry
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full h-full">
        <img
          className="w-full sm:w-[300px] md:w-[342px] h-auto max-h-[400px] object-contain rounded-lg"
          src={`https://image.tmdb.org/t/p/w342${theMovie.poster_path}`}
          alt={theMovie.title}
        />

        <div className="w-full lg:w-2/3 p-4 flex flex-col gap-4 bg-blue-950 rounded-lg">
          <ul className="flex flex-col sm:flex-row justify-between text-base sm:text-lg font-semibold gap-2">
            <li>Release date: {theMovie.release_date}</li>
            <li>Rate: {theMovie.vote_average}</li>
          </ul>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Overview</h2>
            <ReadMore text={theMovie.overview} maxChars={300} />
          </div>
        </div>
      </div>
    </section>
  );
}