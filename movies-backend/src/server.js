import express, { response } from "express";
import { MongoClient } from 'mongodb'; 
import multer from 'multer'; 
import fs from 'fs';
import { fileURLToPath } from "url";

const app = express();


// This works (thankfully)
// Can see movies on home page :))
app.get('/movies', async (request, response) => {

	const client = new MongoClient("mongodb://0.0.0.0:27017");
	await client.connect(); 
	
	const db = client.db("movies-db"); 
	
	const movieData = await db.collection("movies").find({}).toArray();
	response.json(movieData); 

});

// Attempting to submit a review through the form
// Can see new review load on home page of react app but does not go to db
// Using Postman, can add a new document to db that is comprised of null values
// why? 

app.post('/submitReview', async (request, response) => {
	
	const client = new MongoClient("mongodb://0.0.0.0:27017"); 
	await client.connect(); 

	const db = client.db("movies-db"); 
	
	const insertMovie = await db.collection("movies").insertOne({
		'name': request.body.name,
		'release_date': request.body.release_date,
		'actors': request.body.actors, 
		'rating': request.body.rating
	})
	console.log(insertMovie);
	response.redirect("/movies"); 
});

// Attempting to remove a movie from db, get: TypeError: Cannot read properties of undefined (reading 'movie')
// Need to implement fix

// app.post('/removeMovie', async (request, response) => {

// 	const client = new MongoClient("mongodb://0.0.0.0:27017");
// 	await client.connect(); 
	
// 	const db = client.db("movies-db");

// 	const deleteMovie = await db.collection('movies').deleteOne( {"movie" : request.body.movie} ); 
// 	console.log(deleteMovie); 
// })

app.listen(8000, () => {
	console.log("Server running on port 8000.");
});