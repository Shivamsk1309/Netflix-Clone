const API_KEY = "dff518c62b66f76f29833a636e83c0d6";

export const fetchTrending = `/trending/all/day?api_key=${API_KEY}&language=en-US`;
export const fetchNetflixOriginals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const fetchTopRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const fetchActionMovies = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const fetchComedyMovies = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const fetchHorrorMovies = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const fetchRomanceMovies = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const fetchDocumentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
