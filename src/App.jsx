import Banner from "./components/Banner";
import Row from "./components/Row";
import NavBar from "./components/NavBar";
import './App.css'
import {
  fetchTrending,
  fetchNetflixOriginals,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
} from "./requests";
function App() {
  return <div className="app">
    <NavBar/>
    <Banner url={fetchTrending}/>
    <Row title='NETFLIX ORIGINALS' url = {fetchNetflixOriginals} isLarge={true}/>
    <Row title='Trending' url ={fetchTrending}/>
    <Row title='Top Rated' url={fetchTopRated}/>
    <Row title='Action Movies ' url={fetchActionMovies}/>
    <Row title='Comedy Movies ' url={fetchComedyMovies}/>
    <Row title='Horror Movies ' url={fetchHorrorMovies}/>
    <Row title='Romance Movies ' url={fetchRomanceMovies}/> 
    <Row title='Documentaries ' url={fetchDocumentaries}/>
  </div>;
}

export default App;
