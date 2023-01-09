import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    page: null,
    error: null,
    totalPages:null
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (params, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(params)
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
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.page = action.payload.page
                state.totalPages = action.payload.total_pages

            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                type === 'rejected'
                    ? state.error = action.paylaod
                    : state.error = null
            })
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