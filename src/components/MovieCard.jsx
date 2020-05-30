import React , {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MovieCard = (props) => {
    const Container = styled.div `
        display: flex;
        flex-direction: row;
    `
    const Name = styled.h1 ` 
        width: 350px
    `
    const Box = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

    `
    const Picture = styled.img`
    // transform: scale(2);
    border-radius: 10px;
    border: 2px solid red;
    cursor: pointer;
    &:hover{ transform:scale(1.01)}
`


    return (
        <Container>
            <Box className='box'>
                <Name>{props.firstName} {props.lastName}</Name>
                <Picture src={props.image} alt={props.name}/>
            </Box>
         </Container>
    
        

    );
}

export default MovieCard