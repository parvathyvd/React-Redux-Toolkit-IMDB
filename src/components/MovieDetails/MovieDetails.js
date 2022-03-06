import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import './MovieDetails.scss'


const MovieDetails = () => {
    const {imdbID} = useParams() 
    const dispatch = useDispatch()
    console.log(imdbID);
    const data= useSelector(getSelectedMovieOrShow)
    console.log('shows..',data)
    useEffect(()=>{
         dispatch(fetchAsyncMovieOrShowDetail(imdbID))
         return () => {
             dispatch(removeSelectedMovieOrShow())
         }
    },[dispatch,imdbID])
    return (
        <div className='movie-details'>
            {Object.keys(data).length === 0 ? <div>Loading....</div> : (
            <>
            <div className="section-left">
                <div className="movie-title">
                    {data.Title}
                </div>
                <div className="movie-rating">
                    <span>IMDB Rating <i className='fa fa-star'></i>{data.imdbRating}</span>
                    <span>Votes <i className='fa fa-thumbs-up'></i>{data.imdbVotes}</span>
                    <span>Run Time <i className='fa fa-film'></i>{data.Runtime}</span>
                    <span>Year <i className='fa fa-calender'></i>{data.Year}</span>
                </div>
                <div className="movie-plot">
                    {data.Plot}
                </div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Language</span>
                        <span>{data.Language}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={data.Poster} alt={data.Title} />
            </div>
            </>)}
        </div>
    );
};

export default MovieDetails;