import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [jokes, setjokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes').then((Response) => {
      setjokes(Response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      jokes : {jokes.length}
      {jokes.map((elem,idx)=>{
        return <div key={idx}>
          {elem.title}
          {elem.content}
        </div>
      })}
    </>
  )
}

export default App