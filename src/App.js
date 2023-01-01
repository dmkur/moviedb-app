import {useSelector} from "react-redux";

const App = () => {
    const {movie} = useSelector(state => state.movieReducer);
    console.log(movie)
    return (
        <div>

            App component

        </div>
    )
};

export {App};
