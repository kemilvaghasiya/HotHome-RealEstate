import React from 'react'
import useStyles from './styles';



const Gallery = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.title}>Gallery</span>

    
    </div>
  )
}

export default Gallery