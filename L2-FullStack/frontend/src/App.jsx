// import { use, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import axios, { AxiosError } from 'axios'
// import { useEffect } from 'react'



// function App() {
//   const [jokes, setjokes] = useState([])


//     useEffect(() =>
//     {
//        axios.get('/api/jokes')
//       .then((response) => {
//         setjokes(response.data)
//       }
//       )
//       .catch((error)=>{
//         console.log(error) AxiosError{message : 'request failed'}
//       }
//       )

//     })



//   return (
//     <>
//      <h3>NOW STARTING THE REAL FULL STACK WED DEVELOPMENT</h3>
//      <p>JOKES : {jokes.length}</p>
//      {
//       jokes.map(( joke, index) => {
//         <div key = {joke.id}>
//           <h4>{joke.title}</h4>
//           <p>{joke.content}<p>

//         </div>
//       })
//      }
//     </>

//   )
// }

// export default App
import { useState, useEffect } from 'react'
import axios from 'axios'// substution of fetch
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)  // clean — just log the error
      })
  })  // ✅ Empty array = run only once on mount

  return (
    <>
      <h3>NOW STARTING THE REAL FULL STACK WEB DEVELOPMENT</h3>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke) => (  // ✅ Parentheses = implicit return
          <div key={joke.id}>
            <h4>{joke.title}</h4>
            <p>{joke.content}</p>  {/* ✅ Proper closing tag */}
          </div>
        ))
      }
    </>
  )
}

export default App