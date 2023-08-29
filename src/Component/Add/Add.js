import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './Add.css';
import * as ActionTypes from '../Reducer/ActionTypes'
import { Contextdata } from '../Reducer/Context';
import Card from '../Card/Card';

function Add() {

    const data = Contextdata()

    let [value, setValue] = useState('')

    let [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${value}&apikey=b9af1fca`)
        .then((req) => {
            if(req.data.Search) {
                setMovies(req.data.Search)
                // console.log(req);
                // console.log(req.data);
                // console.log(req.data.Search.Title);
            }
        }).catch((error) => console.log(error))
    }, [value])

    console.log(movies);
    
    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-container'>
                        <input type='text' placeholder='Search For A Movie' onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <ul className='results'>
                        {
                            movies.map((movie) => <Card key={movie.imdbID} movie={movie} />)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Add