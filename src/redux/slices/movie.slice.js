import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: () => {
    }
});

const {reducer: movieReducer} = movieSlice

const movieActions = {}

export {
    movieReducer,
    movieActions
}