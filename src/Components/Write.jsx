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
  const handleSubmit = (event) => {
    event.preventDefault()
    setFormData(event.target.value)
    console.log("form data======>", formData)
  }


  return (
      <form className={classes.form}>
        <label>Journal Entry:</label><br></br>
        <input type="text" value={formData.journalEntry} onChange={handleSubmit}/>
        <input type="submit" />
      </form>
  )
}

export default Write