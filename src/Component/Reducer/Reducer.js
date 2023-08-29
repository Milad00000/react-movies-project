import * as ActionTypes from './ActionTypes'

export const Reducer = (state, action) => {
    switch (action.type) {
        // WatchList
        case ActionTypes.ADD_TO_WATCHLIST : 
            return{
                    ...state,
                    watchList : [action.pyload, ...state.watchList]
            }
        case ActionTypes.ADD_MOVIE_TO_WATCHLIST : 
            return {
                ...state,
                wtached : state.wtached.filter((id) => id.imdbID !== action.pyload.imdbID),
                watchList : [action.pyload, ...state.watchList]
            }
        case ActionTypes.REMOVE_FROM_WATCHLIST : 
            return{
                    ...state,
                    watchList : state.watchList.filter((id) => id.imdbID !== action.pyload)
            }
        // Watched
        case ActionTypes.ADD_TO_WATCHED : 
            return{
                    ...state,
                    watchList : state.watchList.filter((id) => id.imdbID !== action.pyload.imdbID),
                    wtached : [action.pyload, ...state.wtached]
            }
        case ActionTypes.REMOVE_FROM_WATCHED : 
            return{
                    ...state,
                    wtached : state.wtached.filter((id) => id.imdbID !== action.pyload)
            }
        default : 
            return state
}
}