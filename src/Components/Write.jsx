import React, { useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      font: "helvetica",
      color: "black"
  
    },
  },
}));

const Write = () => {

  const classes = useStyles()
  const [formData, setFormData] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  

  // console.log("moment", moment().format())
  return (
    <div>
    <Container>
      <h1 className="class">Write Page</h1>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Journal Entry" color="primary" variant="outlined"/>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>Submit</Button>
        </form>
    </Container>

    </div>
  )
}

export default Write