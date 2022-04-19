import React, { useState } from 'react'
import moment from 'moment'
import axios from 'axios'


const initialState = {
  date: moment().format("ddd MMM D YYYY"),
  journalEntry: "",
}

const Write = () => {

  const [formData, setFormData] = useState(initialState)

  // Dynamically updates formData obj from textarea
  const handleChange = (event) => {
    setFormData({
      ...formData,
      journalEntry: event.target.value
    })}

  //submits fomrData obj to server and renders to UI
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3001/journalData', {
      formData
    })
    .then((() => {
      setFormData(initialState)
    }))}

  return (
      <form style={{padding: 50, fontFamily: "helvetica"}} onSubmit={(event) => handleSubmit(event)}>
        <label>Journal Entry:</label><br></br>
        <textarea style={{fontFamily: "helvetica"}} rows="10" cols="80" type="text" value={formData.journalEntry} onChange={(event) => handleChange(event)} ></textarea><br></br>
        <input type="submit" />
      </form>
  )
}

export default Write