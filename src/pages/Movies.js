const Movies = ({ movieList }) => {
	const removeMovie = (movie_name) => {
		movieList.movies.filter((movie) => movie.name !== movie_name);
	};

	return (
		<div>
			{movieList.movies.map((movie) => (
				<div key={movie.name}>
					<h1>{movie.name}</h1>
					<img
						src={movie.poster}
						style={{ height: "275px", objectFit: "cover" }}
					/>
					<h5>Release Date: {movie.release_date}</h5>
					<h5>Starring: {movie.actors.join(", ")}</h5>
					<h5>Rating: {movie.rating} &#9733;</h5>
					<button onClick={removeMovie}>Remove Movie</button>
				</div>
			))}
		</div>
	);
};
export default Movies;
