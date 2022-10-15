import React, {useState,useEffect} from 'react'
import './RowPost.css'
import{imageUrl} from'../../Constatnts/Constants'
import axios from '../../axios'

function RowPost(props) {
  
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{

      console.log(response)
      setMovie(response.data.results)
      }).catch(err=>{
      
        alert('NETWORK ERROR...')

      })
    }, [])
  
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
          {movie.map((obj)=>
          
            <img className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )} 
        </div>
    </div>
  )
}

export default RowPost