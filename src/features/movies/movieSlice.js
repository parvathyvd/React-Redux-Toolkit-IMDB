import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async ()=> {
    const movieText = 'Harry';
    const res = await movieApi.get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`).catch((err)=>{
        console.log(err);
    })
    const info = res.data; 
    console.log(info);
    return res.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async ()=> {
    const seriesText = 'Friends';
    const res = await movieApi.get(`?apiKey=${APIKEY}&s=${seriesText}&type=series`).catch((err)=>{
        console.log(err);
    })
    const info = res.data; 
    console.log(info);
    return res.data
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id)=> {
    const seriesText = 'Friends';
    const res = await movieApi.get(`?apiKey=${APIKEY}&i=${id}&Plot = full`).catch((err)=>{
        console.log(err);
    })
    const info = res.data; 
    console.log(info);
    return res.data
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow : {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {} 
     },
    },
    extraReducers : {
        [fetchAsyncMovies.pending] : () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
            console.log('fetched');
            return{...state, movies: payload}
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log('reject');
        },
        [fetchAsyncShows.fulfilled] : (state, {payload}) => {
            console.log('fetched shows');
            return{...state, shows: payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled] : (state, {payload}) => {
            console.log('fetched shows');
            return{...state, selectedMovieOrShow: payload}
        },
    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions;

export const getAllMovies = state => state.movies.movies
export const getAllShows = state => state.movies.shows
export const getSelectedMovieOrShow = state => state.movies.selectedMovieOrShow


export default movieSlice.reducer;
