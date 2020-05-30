import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from './components/MovieCard'
import axios from 'axios'
import dummyData from './dummyData'

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(dummyData)
  }, [])
  // useEffect(() => {
  //     axios
  //       .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  //       .then(res => {
  //         console.log(res)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //     }, [])
  return (
  <div>
    <MovieCard  image={data.hdurl} title={data.title} explain={data.explanation}/>
  </div>
  );
}

export default App;
