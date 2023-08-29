import { createContext, useContext, useEffect, useReducer, useState } from "react";

import {Reducer} from './Reducer'

let initialState = {
    wtached : localStorage.getItem ? JSON.parse(localStorage.getItem('watched')) : [],
    watchList : localStorage.getItem ? JSON.parse(localStorage.getItem('watchlist')) : []
}

export const GlobalContext = createContext(initialState)

const Provieder = ({children}) => {
    
    const [state, dispatch] = useReducer(Reducer, initialState)

    useEffect(() => {
        localStorage.setItem('watched', JSON.stringify(state.wtached))
        localStorage.setItem('watchlist', JSON.stringify(state.watchList))
    }, [state])
    return (
        <GlobalContext.Provider value={{
            wtached : state.wtached,
            watchList : state.watchList,
            moviedata : dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Provieder

export const Contextdata = () => {
   return useContext(GlobalContext)
}