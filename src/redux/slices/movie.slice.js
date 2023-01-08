import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: []
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll()
            console.log(data, 'from movieSlice/getAll_____________')
            return data
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: () => {
    }
});

const {reducer: movieReducer} = movieSlice

const movieActions = {
  getAll
}

export {
    movieReducer,
    movieActions
}