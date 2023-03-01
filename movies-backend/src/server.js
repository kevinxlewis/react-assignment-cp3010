import express from "express";
import mongodb from "mongodb";

const app = express();

app.get("/", (req, res) => {
	const movieData = [
		{
			id: 1,
			name: "The Batman",
			release_date: "March 4, 2022",
			actors: ["Robert Pattinson", "Zoe Kravitz", "Paul Dano"],
			poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
			rating: "4.2",
		},
		{
			id: 2,
			name: "Top Gun: Maverick",
			release_date: "May 27, 2022",
			actors: ["Tom Cruise", "Miles Teller", "Val Kilmer"],
			poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
			rating: "4.7",
		},
		{
			id: 3,
			name: "The Lord of the Rings: The Return of the King",
			release_date: "December 17, 2003",
			actors: ["Elijah Wood", "Ian McKellen", "Andy Serkis"],
			poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
			rating: "4.5",
		},
		{
			id: 4,
			name: "Spider-Man 3",
			release_date: "May 4, 2007",
			actors: ["Tobey Maguire", "Kirsten Dunst", "Topher Grace"],
			poster: "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
			rating: "3.0",
		},
	];
	res.json(movieData);
});

// app.post("/review", (req, res) => {
// 	movieData.push({
// 		id: req.body.id,
// 		name: req.body.name,
// 		release_date: req.body.release_date,
// 		actors: req.body.actors,
// 		rating: req.body.rating,
// 	});
// 	console.log(req.body);
// 	res.redirect("/");
// });

app.listen(8000, () => {
	console.log("Server is listening on port 8000!");
});
