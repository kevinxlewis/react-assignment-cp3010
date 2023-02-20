import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Movies from "./pages/Movies";
import MovieReview from "./pages/MovieReview";
import { useEffect, useState } from "react";

function App() {
	let [movie, setMovies] = useState();

	useEffect(() => {
		fetch("./movies.json")
			.then((res) => res.json())
			.then(setMovies)
			.catch((err) => console.log(err));
	}, []);

	if (movie == null) {
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
							element={<Movies movieList={movie} />}
						/>
						<Route path="/MovieReview" element={<MovieReview />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
