import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
    let renderMovie, renderShows = '';

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    if(movies.Response === 'True'){
        console.log('this is movies',movies);
        renderMovie = movies.Search.map((movie,index)=>{
            return <MovieCard key={index} movie={movie}/>
        })
    }
    else{
        renderMovie = <div className='movies-error'>
            <h3>{movies.Error}</h3>
        </div>
    }
    if(shows.Response === 'True'){
        console.log('this is shows',movies);
        renderShows = shows.Search.map((movie,index)=>{
            return <MovieCard key={index} movie={movie}/>
        })
    }
    else{
        renderMovie = <div className='movies-error'>
            <h3>{movies.Error}</h3>
        </div>
    }
    return (
        <div className='movie-wrapper'>
        <div className="movie-list">
            <h2>Movies</h2>
        <div className="movie-container">
            {renderMovie}
        </div>
        <div className="show-list">
            <h2>Shows</h2>
        <div className="movie-container">
            {renderShows}
        </div>
        </div>
        </div>
    </div>
    );
};

export default MovieListing;