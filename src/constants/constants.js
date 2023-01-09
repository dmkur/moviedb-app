const baseURL = 'https://api.themoviedb.org/3/discover'

const _accessKey = 'Bearer ' +
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzk2MTQxYzBhYzJhN2EyMWQ4MzgyNTdlODU0ZDI0OCIsInN1YiI6IjYyZjU0ZGJhYzNiZmZlMDA3YT' +
    'cyYTNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-x0uzBPtnBtI4J2eVfUNAECcFARVtt6O-eJj-xVqug'

const urls = {
    movies: '/movie'
}

export {baseURL, urls, _accessKey}
