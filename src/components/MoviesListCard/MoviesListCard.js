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
        <div>
            <div>{original_title}</div>
            <div><img src={backdrop_path} alt={'b'}/></div>
            <div><img src={poster_path} alt={'p'}/></div>
            <hr/>
        </div>
    )
};

export {MoviesListCard};