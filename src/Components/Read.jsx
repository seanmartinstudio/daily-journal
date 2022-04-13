import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Read = () => {

  const [post, setPost] = useState("")
  
  useEffect(() => {
  axios.get('http://localhost:3001/journalData')
  .then((response) => {
    response.data.forEach((item) => {
      console.log("item =>", item.formData.journalEntry)
      setPost(item.formData.journalEntry)
    })
  })
},[])

  return (
    <div>
      <h1 className="class">Read Page</h1>
      <li>{post}</li>
    </div>
  )
}

export default Read