import React from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Write = () => {

  const classes = useStyles();

  // console.log("moment", moment().format())
  return (
    <div>
    <h1 className="class">Write Page</h1>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Journal Entry" variant="outlined" />
      </form>

    </div>
  )
}

export default Write