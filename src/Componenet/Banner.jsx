import { useEffect, useState } from 'react'
import requests from '../requests'
import axios from '../axios'
import './banner.css'

function Banner() {
    const [movei, setMovei] = useState([])
    useEffect(()=>{
        async function fetch_data(){
            const response = await axios.get(requests.fetchNetflixOriginals)
            setMovei(
                response?.data.results[
                  Math.floor(Math.random()*response.data.results.length)
                ]
            )
return response
        }
        fetch_data();
    },[]);
    console.log(movei)

    
    function truncate(str, n){
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <div className='banner'
    style ={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movei?.backdrop_path}")`,
        backgroundPosition:'center center'
      }}
      >
      <div className='banner_contents' >
            <h1 className='banner_title' >
                {movei?.title || movei?.name || movei?.original_name}
            </h1>
            <div className='banner_buttons' >
                <button className='banner_button' >Play</button>
                <button className='banner_button' >My List</button>
            </div>
            <h1 className='banner_description' >{truncate(movei?.overview, 150)}</h1>
        </div>
        <div className='banner_fadeBottom' />
      
      
        
    </div>
  )
}

export default Banner

//??