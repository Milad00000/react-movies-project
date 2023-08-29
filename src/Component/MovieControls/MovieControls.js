import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Contextdata } from '../Reducer/Context';
import * as Action from '../Reducer/ActionTypes'

function MovieControls( {movie, type} ) {

    const data = Contextdata()

  return (
    <div className='inner-card-controls'>
        {
            type === 'watched' 
            && (<>
                <button onClick={() => data.moviedata({type: Action.ADD_MOVIE_TO_WATCHLIST, pyload: movie})} className='ctrl-btn'><FaRegEyeSlash /></button>
                <button onClick={() => data.moviedata({type: Action.REMOVE_FROM_WATCHED, pyload: movie.imdbID})} className='ctrl-btn'>X</button>
            </>)
        }
        {
            type === 'watchlist' 
            && (<>
                <button onClick={() => data.moviedata({type: Action.ADD_TO_WATCHED, pyload: movie})} className='ctrl-btn'><FaRegEye /></button >
                <button onClick={() => data.moviedata({type: Action.REMOVE_FROM_WATCHLIST, pyload: movie.imdbID})} className='ctrl-btn'>X</button>
            </>)
        }
    </div>
  )
}

export default MovieControls