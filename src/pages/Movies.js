import { useState } from "react";

const Movies = (props) => {
	const [movies, setMovies] = useState(props.movieList);

	const removeMovie = (movie) => {
		const index = props.movieList.movies.indexOf(movie); // Grabbing movie index
		props.movieList.movies.splice(index, 1); // Removing movie index using .splice and only removing one
		setMovies(movie); // updating state to reflect changes
		console.log(props);
	};

	return (
		<div>
			{props.movieList.movies.map((movie) => (
				<div key={movie.id}>
					<h1>{movie.name}</h1>
					<img
						src={movie.poster}
						style={{ height: "275px", objectFit: "cover" }}
					/>
					<h5>Release Date: {movie.release_date}</h5>
					<h5>
						Starring: {movie.actors.toString().replace(/,/g, ", ")}
					</h5>
					<h5>Rating: {movie.rating} &#9733;</h5>
					<button onClick={() => removeMovie(movie)}>
						Remove Movie
					</button>
				</div>
			))}
		</div>
	);
};
export default Movies;
