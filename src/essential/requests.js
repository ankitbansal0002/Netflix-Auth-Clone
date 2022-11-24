const API_KEY = 'd23c79adf6711f69a383956e72bef957';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
	fetchAnimatedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchRegionalMovies: `discover/movie?api_key=${API_KEY}&with_watch_providers=1|2|9&watch_region=IN`
};

export default requests;
