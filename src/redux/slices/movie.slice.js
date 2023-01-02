import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movie: {}
}

const movieSlice = createSlice({
    name: 'movieSLice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {}

export {
    movieActions,
    movieReducer
}