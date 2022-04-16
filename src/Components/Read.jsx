import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-date-picker'
import JournalEntry from './JournalEntry'

const Read = () => {

const [postData, setPostData] = useState([])
//date picker boiler state...
const [dateValue, setDateValue] = useState(new Date());
  
  useEffect(() => {
  axios.get('http://localhost:3001/journalData')
  .then((response) => {setPostData(response.data)})
},[])

const newArr = postData.map((post) => (
<JournalEntry post={post.formData.journalEntry} date={post.formData.date}/>
))

  return (
    <div>
      <h1 className="class">Read Page</h1>
      <DatePicker onChange={setDateValue} value={dateValue} />
      <ul style={{whiteSpace: "pre-line"}}>
      {newArr}
      </ul>
    </div>
  )
}

export default Read

//post.formData.journalEntry