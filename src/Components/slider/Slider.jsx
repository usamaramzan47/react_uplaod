import { useEffect, useState } from "react";
import "./slider.scss";
import StarIcon from '@mui/icons-material/Star';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Slider() {

    const [movies , setMovie] = useState([]);
    useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    .then(res=>res.json())
    .then(data=>setMovie(data.results))
    },[]);
  return (
    <div className="slider">
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={5}
            infiniteLoop={true}
            showStatus={false}
        >
        {
            movies.map(movie => (
                // <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                    <div>
                    <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                    </div>
                    <div className="posterImage__overlay">
                        <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                        <div className="posterImage__runtime">
                            {movie ? movie.release_date : ""}
                            <span className="posterImage__rating">
                                {movie ? movie.vote_average :""}
                                <StarIcon/>
                            </span>
                        </div>
                        <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                    </div>
                </div>
                // </Link>
            ))
        }
    </Carousel>
    </div>
  )
}

export default Slider