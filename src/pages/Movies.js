import movies from "../movies.json"; 

const Movies = () => {
    return (
        <div>
            {movies.movies.map((movie) => (
                <div>
                    <h1>{movie.name}</h1>
                    <img src={movie.poster} style={{ height: "275px", objectFit: "cover" }}/>
                    <h5>Release Date: {movie.release_date}</h5>
                    <h5>Starring: {movie.actors.join(", ")}</h5>
                    <h5>Rating: {movie.rating} &#9733;</h5>
                </div>
            ))}
        </div>
    ); 
}
export default Movies; 