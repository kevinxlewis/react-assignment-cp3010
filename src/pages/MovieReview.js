import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const MovieReview = (props) => {
	const [movieName, setMovieName] = useState("");
	const [moviePoster, setMoviePoster] = useState("");
	const [movieReleaseDate, setMovieReleaseDate] = useState("");
	const [movieActors, setMovieActors] = useState("");
	const [movieRating, setMovieRating] = useState("");

	return (
		<div>
			<div id="form">
			<Link to="/reviews"></Link>
			<h3>Fill out this form to leave a review of your own.</h3>
				<Form method="post" action="/api/submitReview" encType="multipart/form-data">
					<Form.Group>
						<Form.Label>
							Movie Name:
							<Form.Control
								type="text"
								name="movie_name"
								id="movie_name"
								value={movieName}
								onChange={(e) => setMovieName(e.target.value)}
							/>
						</Form.Label>
					</Form.Group>

					<Form.Group>
						<Form.Label>
							Movie Release Date:
							<Form.Control
								type="text"
								name="movie_date"
								placeholder="Month Day, Year"
								value={movieReleaseDate}
								onChange={(e) =>
									setMovieReleaseDate(e.target.value)
								}
							/>
						</Form.Label>
					</Form.Group>

					<Form.Group>
						<Form.Label>
							Starring Actors / Actresses:
							<Form.Control
								type="text"
								name="movie_starrs"
								value={movieActors}
								onChange={(e) => setMovieActors(e.target.value)}
							/>
						</Form.Label>
					</Form.Group>

					<Form.Group>
						<Form.Label>
							Movie Rating:
							<Form.Control
								type="text"
								name="movie_rating"
								value={movieRating}
								onChange={(e) => setMovieRating(e.target.value)}
							/>
						</Form.Label>
					</Form.Group>

					<Form.Group>
						<Form.Label>
							Movie Poster:
							<Form.Control
								type='file'
								id="movie_poster"
								name="movie_poster"
								value={moviePoster}
								onChange={(e) => setMoviePoster(e.target.value)}
							>
							</Form.Control>
						</Form.Label>
					</Form.Group>
					<Button variant="dark" type="submit">Submit</Button>
				</Form>
			</div>
		</div>
	);
};

export default MovieReview;
