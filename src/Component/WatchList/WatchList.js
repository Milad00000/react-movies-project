import CardMovie from '../CardMovie/CardMovie';
import { Contextdata } from '../Reducer/Context';
import './WatchList.css'

function WatchList() {
  const data = Contextdata()

  return (
    <div className='watch-list'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My WatchList</h1>
          <span className='movies-count'>{data.watchList.length}Movies</span>
        </div>
        {
          data.watchList.length > 0 ? 
          <div className='movie-grid'>{data.watchList.map((movie) => <CardMovie key={movie.imdbID} movie={movie} type='watchlist' /> )}</div> 
          : <h2 className='no-movie'>No Movies In Your WatchList . Add some!</h2>
        }
      </div>
    </div>
  )
}

export default WatchList