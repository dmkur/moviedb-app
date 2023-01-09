import {Link} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {
        original_title,
        overview,
        popularity,
        backdrop_path,
        poster_path,
        release_date,

    } = movie
    return (
        <Link to={`/movie/${movie.id}`}>
            <div>{original_title}</div>
            <div><img src={poster_path} alt={'p'}/></div>
            <hr/>
        </Link>
    )
};

export {MoviesListCard};