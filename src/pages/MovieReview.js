import { useState } from "react";

const MovieReview = () => {

    const [submit, setSubmit] = useState(""); 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(`Form submitted, ${submit}`); 
    }
    return (
        <div>
            <h1>Movie Review Page</h1>
            <div id="form"> 
                <form>
                    <label>
                        Movie Name: 
                        <input type="text" name="movie_name" />
                    </label>
                    <label>
                        Movie Poster: 
                        <select>
                            <option value="The Batman"></option>
                        </select>
                    </label>
                    <label>
                        Movie Release Date: 
                        <input type="date" name="movie_date" />
                    </label>
                    <label>
                        Starring Actors / Actresses: 
                        <input type="text" name="movie_starrs" />
                    </label>
                    <label>
                        Movie Rating: 
                        <input type="text" name="movie_rating" />
                    </label>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>

        </div>
    ); 
}

export default MovieReview; 