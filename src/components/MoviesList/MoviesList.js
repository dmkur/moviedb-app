import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const {movies, page, totalPages} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});
    console.log(movies)


    useEffect(() => {
        const params = {
            page: query.get('page')
        }
        dispatch(movieActions.getAll(params))
    }, [query])

    const nextPage = () => {
        const next = +query.get('page') + 1;
        setQuery({page: `${next}`})
    };

    const prevPage = () => {
        const prev = query.get('page') - 1;
        setQuery({page: `${prev}`})
    };

    return (
        <div>
            <div>
                {
                    movies.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)
                }
            </div>
            <div>
                <button disabled={page === 1} onClick={prevPage}>prev</button>
                <button disabled={page>=totalPages} onClick={nextPage}>next</button>
            </div>
        </div>
    )
};

export {MoviesList};