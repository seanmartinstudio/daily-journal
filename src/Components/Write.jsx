import React, { useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';


// styling left over from material ui, figure out how to make styling
//object for form...
const useStyles = makeStyles((theme) => ({

    form: {
      margin: theme.spacing(10),
      width: '25ch',
      font: "times new roman",
      color: "blue"
  
    }
 
}));

const Write = () => {

  const classes = useStyles()
  const [formData, setFormData] = useState({
    date: moment().format("MMM Do YY"),
    journalEntry: "",
  })

  //bug, in console log, input value is one character off...
  const handleChange = (event) => {
    setFormData({
      ...formData,
      journalEntry: event.target.value
    })}

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("form data =>", formData)
    // pass formData object to POST request for render to DOM on read componenet

  }


  return (
      <form className={classes.form} onSubmit={(event) => handleSubmit(event)} >
        <label>Journal Entry:</label><br></br>
        <textarea type="text" value={formData.journalEntry} onChange={(event) => handleChange(event)}></textarea><br></br>
        <input type="submit"  />
      </form>
  )
}

export default Write