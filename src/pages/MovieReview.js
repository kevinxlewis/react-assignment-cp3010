import { useState } from "react";
import { Link } from "react-router-dom";

const MovieReview = (props) => {
	const [movieName, setMovieName] = useState("");
	const [moviePoster, setMoviePoster] = useState("");
	const [movieReleaseDate, setMovieReleaseDate] = useState("");
	const [movieActors, setMovieActors] = useState("");
	const [movieRating, setMovieRating] = useState("");

	const handleSubmission = (event) => {
		event.preventDefault();
		props.movieList.push({
			id: props.movieList.length + 1,
			name: movieName,
			release_date: movieReleaseDate,
			actors: movieActors,
			poster: moviePoster,
			rating: movieRating,
		});
		event.target.reset();
	};

	return (
		<div>
			<Link to="/reviews"></Link>
			<h1>Leave A Review!</h1>
			<div id="form">
				<form onSubmit={handleSubmission} method="post" action="/reviews">
					<label>
						Movie Name:
						<input
							type="text"
							name="movie_name"
							id="movie_name"
							value={movieName}
							onChange={(e) => setMovieName(e.target.value)}
						/>
					</label>
					<label>
						Movie Poster:
						<select
							id="movie_poster"
							name="movie_poster"
							value={moviePoster}
							onChange={(e) => setMoviePoster(e.target.value)}
						>
							<option value="https://img.freepik.com/premium-vector/cinema-movie-poster-with-popcorn-soda-ticket-film-reel-glasses_124507-9984.jpg?w=2000"></option>
						</select>
					</label>
					<label>
						Movie Release Date:
						<input
							type="text"
							name="movie_date"
							placeholder="MM d, YYYY"
							value={movieReleaseDate}
							onChange={(e) =>
								setMovieReleaseDate(e.target.value)
							}
						/>
					</label>
					<label>
						Starring Actors / Actresses:
						<input
							type="text"
							name="movie_starrs"
							value={movieActors}
							onChange={(e) => setMovieActors(e.target.value)}
						/>
					</label>
					<label>
						Movie Rating:
						<input
							type="text"
							name="movie_rating"
							value={movieRating}
							onChange={(e) => setMovieRating(e.target.value)}
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default MovieReview;
