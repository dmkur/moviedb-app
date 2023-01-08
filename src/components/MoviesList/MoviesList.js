import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";

const MoviesList = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(movieActions.getAll())
    // },[])

  return (
      <div>
        MoviesList component
      </div>
  )
};

export {MoviesList};