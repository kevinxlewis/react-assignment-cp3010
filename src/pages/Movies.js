import { useEffect, useState } from "react";

const Movies = ({ movieList }) => {
	// Function to remove movie ... breaks everything.. why?
	const [movie, setMovies] = useState(movieList.movies);

	const removeMovie = (movie_name) => {
		movie.name.filter((movie) => movie.name !== movie_name);
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
