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
  date: moment().format("MMM Do YY"),
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
    axios.post('http://localhost:3001/journalData', {
      formData
    })
    .then((() => {
      setFormData(initialState)
    }))
}

  return (
      <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
        <label>Journal Entry:</label><br></br>
        <textarea type="text" value={formData.journalEntry} onChange={(event) => handleChange(event)}></textarea><br></br>
        <input type="submit" />
      </form>
  )
}

//To Do...
//1. Move data state to parent app comp, pass to write comp as prop...
//2. Get form to restest after submit
//3. Suss out where POST AND GET requests will live
//4. Add conditional logic to .then after posts to DOM to confirm on Write page that entry went through


export default Write