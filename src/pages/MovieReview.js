const MovieReview = () => {
	return (
		<div>
			<h1>Leave A Review!</h1>
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
						<input
							type="text"
							name="movie_date"
							placeholder="MM d, YYYY"
						/>
					</label>
					<label>
						Starring Actors / Actresses:
						<input type="text" name="movie_starrs" />
					</label>
					<label>
						Movie Rating:
						<input type="text" name="movie_rating" />
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default MovieReview;
