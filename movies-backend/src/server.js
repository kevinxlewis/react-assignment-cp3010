import express from "express";
let movieData = [
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

const app = express();

app.get("/movies", (request, response) => {
	response.json(movieData);
});

app.post("/reviews", (request, response) => {
	
	movieData.push({
		//id: request.id,
		"name": request.body.name,
		"release_date": request.body.release_date,
		"actors": request.body.actors,
		"rating": request.body.rating,
	});
	console.log(request.body);
	response.redirect("/movies");
});

app.listen(8000, () => {
	console.log("Server running on port 8000.");
});
