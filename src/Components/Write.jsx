import React, { useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';


// styling left over from material ui, figure out how to make styling
//object for form...
const useStyles = makeStyles((theme) => ({

    form: {
      margin: theme.spacing(10),
      width: '25ch',
      font: "times new roman",
      color: "blue"
  }}));

const initialState = {
  date: moment().format("MMM Do YYYY"),
  journalEntry: "",
}

const Write = () => {
  const classes = useStyles()
  const [formData, setFormData] = useState(initialState)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      journalEntry: event.target.value
    })}

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log("formData", formData)
    axios.post('http://localhost:3001/journalData', {
      formData
    })
    .then((() => {
      setFormData(initialState)
    }))}

  return (
      <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
        <label>Journal Entry:</label><br></br>
        <textarea  rows="10" cols="80" type="text" value={formData.journalEntry} onChange={(event) => handleChange(event)} ></textarea><br></br>
        <input type="submit" />
      </form>
  )
}

export default Write