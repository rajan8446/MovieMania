import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import userRequest from './Request'
import Row from './Row'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Navbar />
      <Banner />
      <Row title="MovieMania Originals" isLargeRow fetchUrl={userRequest.fetchMovieManiaOriginals}/>
      <Row title="Trending Now" fetchUrl={userRequest.fetchTrending}/>
      <Row title="Top Rated Movies" fetchUrl={userRequest.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={userRequest.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={userRequest.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={userRequest.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={userRequest.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={userRequest.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen;