import React, { useEffect } from 'react'
import axios from 'axios'

const Read = () => {
  
  useEffect(() => {
  axios.get('http://localhost:3001/journalData')
  .then((response) => {
    response.data.forEach((item) => {
      console.log("item =>", item)
    })
  })
},[])

  return (
    <div>
      <h1 className="class">Read Page</h1>
    </div>
  )
}

export default Read