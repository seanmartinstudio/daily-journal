import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Read = () => {

const [postData, setPostData] = useState([])
  
  useEffect(() => {
  axios.get('http://localhost:3001/journalData')
  .then((response) => {setPostData(response.data)})
},[])

const newArr = postData.map((post) => {
return post.formData.journalEntry
})

  return (
    <div>
      <h1 className="class">Read Page</h1>
      <ul>
        {newArr}
      </ul>
    </div>
  )
}

export default Read