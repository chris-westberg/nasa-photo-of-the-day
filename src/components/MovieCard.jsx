import React , {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MovieCard = (props) => {
//    const 
   console.log(props)
    return( 
    <div>
        <div className='header'>
            <h1>{props.title}</h1>
            <h2>Celestial Wonders of the Universe</h2>
        </div>
        <img src={props.image} />
        <p>{props.explain}</p>
    </div>
    );
}

export default MovieCard