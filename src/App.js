import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./pages/Movies";
import MovieReview from "./pages/MovieReview";
import { useEffect, useState } from "react";

function App() {
	let [movies, setMovies] = useState();

	useEffect(() => {
		fetch("/")
			.then((res) => res.json())
			.then(setMovies)
			.catch((err) => console.log(err));
	}, []);

	if (movies == null) {
		return <h2>Loading...</h2>;
	}

	return (
		<BrowserRouter>
			<div className="App">
				<div id="body">
					<h1>Movie Reviews</h1>
					<NavBar />
					<Routes>
						<Route
							exact
							path="/"
							element={
								<Movies
									movieList={movies}
									setMovies={setMovies}
								/>
							}
						/>
						<Route
							path="/MovieReview"
							element={
								<MovieReview
									movieList={movies}
									setMovies={setMovies}
								/>
							}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
