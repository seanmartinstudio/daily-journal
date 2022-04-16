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
    // lineBreakHandler(event)
    // const replace = event.target.value.replace('\n', "8888")
    setFormData({
      ...formData,
      journalEntry: event.target.value
    })
  console.log("formData", formData)}

    // // function to create line breaks
    // const lineBreakHandler = (event) => {
    //   const split = event.target.value.replace("\n", "{\\n}")
    //   console.log("split", split)
    //   return split
    // }

  

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log("formData", formData)
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
        <textarea rows="10" cols="80" type="text" value={formData.journalEntry} onChange={(event) => handleChange(event)} ></textarea><br></br>
        <input type="submit" />
      </form>
  )
}

export default Write

//submit run function to parse it and find line breaks, replase them for JSX
//get string, look for line break, if line break, split on line break, returns array of split on line break, if line break, replace for {}