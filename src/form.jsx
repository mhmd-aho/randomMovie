export default function Form(props) {
  const hour = Math.floor(props.range / 60);
  const remainingMin = props.range % 60;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.fetchRandomMovie();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] h-auto rounded-3xl bg-teal-600 text-teal-50"
    >
      <div className="flex flex-col gap-2 w-full">
        <label className="text-xl sm:text-2xl md:text-3xl font-bold" htmlFor="genre">
          Genre: {props.genre}
        </label>
        <select
          className="text-base sm:text-lg bg-teal-50 text-black w-full rounded-md p-2"
          onChange={(e) => props.setGenre(e.target.value)}
          value={props.genre}
          name="genre"
          id="genre"
        >
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="musical">Musical</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="sciFi">Sci-Fi</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-xl sm:text-2xl md:text-3xl font-bold" htmlFor="decade">
          Decade: {props.decade}
        </label>
        <select
          onChange={(e) => props.setDecade(e.target.value)}
          value={props.decade}
          className="text-base sm:text-lg bg-blue-50 text-black w-full rounded-md p-2"
          name="decade"
          id="decade"
        >
          <option value="1980s">1980s</option>
          <option value="1990s">1990s</option>
          <option value="2000s">2000s</option>
          <option value="2010s">2010s</option>
          <option value="2020s">2020s</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-xl sm:text-2xl md:text-3xl font-bold" htmlFor="runtime">
          Runtime: {props.range ? `${hour}h ${remainingMin}min` : "Select time"}
        </label>
        <input
          className="w-full h-2 bg-blue-50 rounded-lg cursor-pointer accent-blue-950"
          onChange={(e) => props.setRange(Number(e.target.value))}
          value={props.range}
          min={80}
          max={300}
          type="range"
          name="runtime"
          id="runtime"
        />
      </div>
      <input
        type="submit"
        value="Find Movie"
        className="bg-blue-950/70 hover:bg-blue-950 hover:scale-105 duration-300 text-teal-50 text-base sm:text-lg py-2 px-6 rounded-full self-center mt-4"
      />
    </form>
  );
}
