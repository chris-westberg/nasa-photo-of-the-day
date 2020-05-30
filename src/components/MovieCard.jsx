import React , {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MovieCard = (props) => {
   console.log(props)

   const Box = styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
   `
   const HeaderBox = styled.div `
        width: 650px;
        border: 5px solid black;
        border-radius: 10px;
        margin: 10px;
   `
   const Image = styled.img `
        height: 650px;
        width: 650px;
        border-radius: 10px;
        margin: 0px;
        padding: 0px;
        border: 5px solid black;
   `
   const Para = styled.p `
        max-width: 650px;
        text-align: justify;
        border: 5px solid black;
        border-radius: 10px;
        padding: 2px;
   `
   const HeaderOne = styled.h1 `
        text-align: center;
   `
   const HeaderTwo = styled.h2 `
        text-align: center;
   `
    return( 
    <Box>
        <HeaderBox className='header'>
            <HeaderOne>{props.title}</HeaderOne>
            <HeaderTwo>Celestial Wonders of the Universe</HeaderTwo>
        </HeaderBox>
        <Image src={props.image} />
        <Para>{props.explain}</Para>
    </Box>
    );
}

export default MovieCard