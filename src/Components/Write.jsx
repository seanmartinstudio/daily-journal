import React, { useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


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
    journalEntry: "Test entry...",
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }


  return (
    // <div>
    //   <h1 className="class">Write Page</h1>
    //     <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
    //     <TextField id="outlined-basic" label="Journal Entry" color="primary" variant="outlined"/><br></br>
    //     <Button variant="outlined" color="primary" onClick={handleSubmit}>Submit</Button>
    //     </form>
    // </div>

      <form className={classes.form}>
        <label>Journal Entry:</label><br></br>
        <input value={formData.journalEntry} />
        <input type="submit" />
      </form>
  )
}

export default Write