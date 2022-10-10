import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constatnts/Constants'



function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {

        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            const r=Math.floor(Math.random() * (19 + 1));
            console.log(response.data.results[r])
            setMovie(response.data.results[r])
        })
    
    }, [])
    
  return (
    <div style ={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'> {movie ? movie.overview:""} </h1>
        </div>
    <div className="fade_bottom"></div>   

    </div>
  )
}

export default Banner