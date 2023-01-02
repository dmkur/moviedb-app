import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "../../services/movie.service";

const initialState = {
  movie: {},
};

const getAllMovies = createAsyncThunk(
  "movieSLice/getAllMovies",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await movieService.getAllMovies();
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const movieSlice = createSlice({
  name: "movieSLice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
  },
});

const { reducer: movieReducer } = movieSlice;

const movieActions = {
  getAllMovies,
};

export { movieActions, movieReducer };
