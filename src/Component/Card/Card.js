import React from 'react';
import './Card.css';
import { Contextdata } from '../Reducer/Context';
import * as Action from '../Reducer/ActionTypes'
function Card( {movie} ) {

    const data = Contextdata()

    const wtachedboolean = data.wtached.find((mov) => mov.imdbID === movie.imdbID)
    const watchlistboolean = data.watchList.find((mov) => mov.imdbID === movie.imdbID)

    const disabledwtached = wtachedboolean ? true : false;
    const disabledwtachlist =  watchlistboolean ? true : wtachedboolean ? true : false;

    return (
        <div className='result-card'>
            
            <div className='poster-wrapper'>
                {
                    movie.Poster ? 
                    <img src={movie.Poster} alt={movie.Title} /> :
                    <div className='filler-poster'></div>
                }
            </div>
            <div className='info'>
                <div className='heading'>
                    <h3 className='title'>{movie.Title}</h3>
                    <h4 className='release-data'>{movie.Year ? <span>{movie.Year}</span> : '-'}</h4>
                </div>
                <div className='controls'>
                    <button 
                        disabled={disabledwtachlist}
                        onClick={() => data.moviedata({type: Action.ADD_TO_WATCHLIST, pyload: movie,})} 
                        className='btn'>
                            Add To Watch List
                    </button>
                    <button 
                        disabled={disabledwtached}
                        onClick={() => data.moviedata({type: Action.ADD_TO_WATCHED, pyload: movie,})} 
                        className='btn'>
                            Add To Watched
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card

{/* {
            Movies.length > 0 
            ? Movies.map((movie) => 
                <>
                    
                </>
            )
            : console.log('Loding...!')
        } */}
        {/* <div className='poster-wrapper'>
                <img />
            </div>
            <div className='info'>
                <div className='heading'>
                    <h3 className='title'></h3>
                    <h4 className='release-data'></h4>
                </div>
                <div className='controls'>
                    <button className='btn'>Add To WatchList</button>
                    <button className='btn'>Add To Watched</button>
                </div>
            </div> */}