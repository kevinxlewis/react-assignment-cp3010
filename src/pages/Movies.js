
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Movies = (props) => {
	const [movies, setMovies] = useState(props.movieList);
	const removeMovie = async (movie) => {

		const requestOptions = {method: 'POST', headers: {"Content-Type" : "application.json"}, body: JSON.stringify({_id: movie._id})}

		fetch('/removeMovie', requestOptions )
		const updatedMovieList = props.movieList.filter((movieElement) => movieElement._id !== movie._id); 
		props.setMovies(updatedMovieList);
	}

	return (
		<>
		<div className="d-flex flex-wrap justify-content-center">
			<Link to="/movies"></Link>
				{props.movieList.map((movie) => (
					<Card style={{width:"425px", marginTop: "15px", marginBottom: "15px", marginRight: "10px", marginLeft: "10px"}}>
						<div key={movie.id}>
							<Card.Title>{movie.name}</Card.Title>
								<Card.Img src={movie.poster} style={{ height: "450px", width: "250px", objectFit: "cover" }}></Card.Img>
									<Card.Body>
										<Card.Text>{movie.release_date}</Card.Text>
										<Card.Text>{movie.actors + " "}</Card.Text>
										<Card.Text>{movie.rating}/5</Card.Text>
										<Button variant="dark" onClick={() => removeMovie(movie)}>Remove Movie</Button>
									</Card.Body>
						</div>
					</Card>
				))}
		</div>
		</>
	);
};
export default Movies;
