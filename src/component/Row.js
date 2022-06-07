import axios from './localaxios';
import React, { useEffect, useState } from 'react';
import '../css/row.css'

const Row = ({title,isLargeRow,fetchUrl}) => {
    const [movie, setMovie] = useState([]);
    const base_Url = 'https://image.tmdb.org/t/p/original/';

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            setMovie(request.data.results)
            // console.log(request.data.results)
            return request;
        }
        fetchData()
    },[fetchUrl])
  return (
    <div className='row'>
        
        <h2>{title}</h2>
        <div className='row_posters'>
        {
            movie.map((movie,i)=>{
                return <img src={`${base_Url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} className={`row_image ${isLargeRow && 'largeImage'}`} key={i}/>
            })
        }
            
        </div>
    </div>
  )
}

export default Row