import path from "path";
import multer from 'multer'; 
import express from "express";
import { fileURLToPath } from "url";
import { MongoClient, ObjectId } from 'mongodb'; 

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "../build")));
app.use(express.static(path.join(__dirname, "../posters")));

const upload = multer({ dest: "posters/" });

app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// Loading movies from database and displaying them on main page of application.
app.get('/api/movies', async (req, res) => {
	const client = new MongoClient("mongodb://0.0.0.0:27017");
	await client.connect(); 
	
	const db = client.db("movies-db"); 
	
	const movieData = await db.collection("movies").find({}).toArray();
	res.json(movieData); 
});

// Adding a movie to the database via form submission using multer package for uploading a movie poster.
app.post('/api/submitReview', upload.single("movie_poster"), async (req, res) => {
	const client = new MongoClient("mongodb://0.0.0.0:27017"); 
	await client.connect(); 

	const db = client.db("movies-db"); 
	
	const insertMovie = await db.collection("movies").insertOne({
		'name': req.body.movie_name, 
		'poster': req.file.filename, 
		'release_date': req.body.movie_date, 
		'actors': req.body.movie_starrs, 
		'rating': req.body.movie_rating 
	});

	console.log(insertMovie);
	res.redirect("/"); 
});

// Removing movie using ObjectId from database, not functional. 
 app.post('/removeMovie', async (req, res) => {
	const client = new MongoClient("mongodb://0.0.0.0:27017");
	await client.connect(); 
	
	const db = client.db("movies-db");

 	const deleteMovie = await db.collection('movies').deleteOne({_id: new ObjectId(req.body._id)}); 
 	console.log(deleteMovie);
});

app.listen(8000, () => {
	console.log("Server running on port 8000.");
});