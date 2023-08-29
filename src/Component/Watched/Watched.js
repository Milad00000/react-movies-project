import React from 'react'
import { Contextdata } from '../Reducer/Context';
import CardMovie from '../CardMovie/CardMovie';
import './Watched.css'

function Watched() {
  const data = Contextdata()
  return (
    <div className='watched'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My Watched</h1>
          <span className='mocies-count'>{data.wtached.length}Movies</span>
        </div>
        {
          data.wtached.length > 0 ? 
          <div className='movie-grid'>{data.wtached.map((movie) => <CardMovie key={movie.imdbID} movie={movie} type='watched' /> )}</div> 
          : <h2 className='no-movie'>No Movies In Your WatchList . Add some!</h2>
        }
      </div>
    </div>
  )
}

export default Watched