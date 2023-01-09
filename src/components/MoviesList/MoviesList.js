import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const {movies} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    console.log(movies)


    useEffect(() => {
        dispatch(movieActions.getAll())
    },[])

  return (
      <div>
        <div>
            {
                movies.map(movie => <MoviesListCard movie={movie} key={movie.id} />)
            }
        </div>
      </div>
  )
};

export {MoviesList};