import { TextField } from '@mui/material';
import React from 'react'
import useStyles from './styles';

const NewsLetter = () => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
        <span className={classes.title}>NEWSLETTER</span>
          <span className={classes.discription}>Get latest news & update</span>
          <TextField
          placeholder='Email'
          className={classes.input}
              variant="outlined"
              inputProps={{

              }}
          >

          </TextField>
          <span className={classes.submit} onClick={()=>{}}>
            <span className={classes.submitInfo}>
              subscribe 
            </span>
          </span>
    </div>
  )
}

export default NewsLetter