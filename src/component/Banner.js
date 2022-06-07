import axios from './localaxios';
import React, { useEffect, useState } from 'react';
import '../css/banner.css'
import userRequest from './Request';

const Banner = () => {
    const [movie, setMovie] = useState([]);
    const base_Url = 'https://image.tmdb.org/t/p/original/';

    useEffect(()=>{
        async function fetchData (){
            const request = await axios.get(userRequest.fetchMovieManiaOriginals);
            console.log(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
        }
        fetchData()
    },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${base_Url}${movie?.backdrop_path || movie?.poster_path})`,backgroundPosition:'center',backgroundSize:'cover',marginTop:'1px'}}>

        <div className='banner_container'>
            <h1 className='banner_title'>
                { movie?.name }
            </h1>
            <div className='banner_buttons'>
                <button>Play</button>
                <button>My List</button>
            </div>
            <div className='banner_description'>
                <p>
                { movie.overview }
                </p>
            </div>
        </div>
        <div className='banner_fade'></div>
    </div>
  )
}

export default Banner