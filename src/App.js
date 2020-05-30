import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from './components/MovieCard'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
      axios
        .get('https://reqres.in/api/users?page=2')
        .then( res => {
          console.log(res.data.data)
          setData(res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
      }, [] )
      console.log(data)
  return data.map(e => {
  return <MovieCard firstName={e.first_name} lastName={e.last_name} image={e.avatar}/>
  })
  //   <div className="App">
  //     {/* <p>
  //       Read through the instructions in the README.md file to build your NASA
  //       app! Have fun <span role="img" aria-label='go!'>🚀</span>!
  //     </p> */}
  //     <MovieCard />
  //   </div>
  // )
}

export default App;
