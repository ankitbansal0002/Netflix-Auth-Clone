import React from 'react';
import '../App.css';
import Row from '../components/Row';
import requests from '../essential/requests';
import Banner from '../components/Banner';
import Nav from '../components/Nav';

function HomeScreen() {

	

  return (
    <div>
      <Nav />
		<Banner />
		<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
		<Row title="Trending" fetchUrl={requests.fetchTrending} />
		<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
		<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
		<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
		<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
		<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
		<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		<Row title="Animated Movies" isLargeRow fetchUrl={requests.fetchAnimatedMovies} />
		<Row title="Regional Movies" fetchUrl={requests.fetchRegionalMovies} />
    </div>
  )
}

export default HomeScreen
