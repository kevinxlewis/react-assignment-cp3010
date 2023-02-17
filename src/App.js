import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Movies from './pages/Movies';
import MovieReview from './pages/MovieReview';
import { useEffect, useState } from 'react';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <div id="body">
          <h1>Movie Reviews</h1>
            <NavBar />
              <Routes>
                <Route exact path="/" element={<Movies />} />
                <Route path="/MovieReview" element={<MovieReview />} />
              </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;