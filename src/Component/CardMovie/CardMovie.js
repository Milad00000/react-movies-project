import React from 'react';
import './CardMovie.css';
import MovieControls from '../MovieControls/MovieControls';

function CardMovie({movie, type}) {
  return (
    <div className='mvoie-card'>
        <div className='overlay'></div>
        {
          movie.Poster 
          ?(<img src={movie.Poster} alt={movie.Title} />)
          :(<div className='filter-poster'></div>)
        }
        <MovieControls movie={movie} type={type} />
    </div>
  )
}

export default CardMovie