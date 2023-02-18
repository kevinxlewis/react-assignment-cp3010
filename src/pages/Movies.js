import { useEffect, useState } from "react";

const Movies = () => {
	const [movie, setMovie] = useState("");
	const fetchData = () => {
		fetch("./movies.json")
			.then((res) => {
				return res.json();
			})
			.then((movie) => {
				setMovie(movie);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			{movie.movies?.map((movie) => (
				<div key={movie.name}>
					<h1>{movie.name}</h1>
					<img
						src={movie.poster}
						style={{ height: "275px", objectFit: "cover" }}
					/>
					<h5>Release Date: {movie.release_date}</h5>
					<h5>Starring: {movie.actors.join(", ")}</h5>
					<h5>Rating: {movie.rating} &#9733;</h5>
					<button>Remove Movie</button>
				</div>
			))}
		</div>
	);
};
export default Movies;
