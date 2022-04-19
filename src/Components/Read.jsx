import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker'
import JournalEntry from './JournalEntry'

const Read = () => {

  // const [dateValue, setDateValue] = useState(null);
  // ^^^ State for DatePicker update

  const [postData, setPostData] = useState([])

  // Initiates GET request from server and updates state after component renders
  useEffect(() => {
  axios.get('http://localhost:3001/journalData')
  .then((response) => {setPostData(response.data)})
  },[])

  // deteles joural entry from UI
  const handleDeleteUI = (id) => {
    const newArrDelete = postData.filter((post) => {
      if(post.id !== id) {
        return id
      }})
    setPostData(newArrDelete)
  }

  const newArr = postData.map((post) => (
  <JournalEntry handleDeleteUI={handleDeleteUI} post={post.formData.journalEntry} date={post.formData.date} key={post.id} id={post.id}/>
  ))

  return (
    <div style={{fontFamily: "helvetica", padding: 25}}>
      <h1>Journal Entries</h1>
      {/* <DatePicker onChange={setDateValue} value={dateValue}/> */}
      {/* {^^^ Element for DatePicker update} */}
      <ul style={{whiteSpace: "pre-line"}}>
      {newArr}
      </ul>
    </div>
  )
}

export default Read