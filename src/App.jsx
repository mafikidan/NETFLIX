
import './App.css'
import Row from './Componenet/Row'
import requests from './requests'
import Banner from './Componenet/Banner'
import Nav from './Componenet/Nav'
function App() {
   
  return (
    <div className='App'>
      <Nav/>
      <Banner/>
    <Row isLargeRow title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row pagination title="Netflix Trending" fetchUrl={requests.fetchTrending}/>
    <Row title="Netflix Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Netflix Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Netflix Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Netflix Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    <Row title="Netflix TopRatedMovies" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Netflix Upcomming" fetchUrl={requests.fetchUpcomming}/>
    <Row title="Netflix Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Netflix Playknow" fetchUrl={requests.fetchPlayknow}/>
    
    </div>
  )
}

export default App
//??