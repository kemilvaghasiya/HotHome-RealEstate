import React from 'react'
import { CarouselComp } from './carousel';
import useStyles from './styles';



const Gallery = ({data}:any) => {
  const { classes } = useStyles();
  // console.log('testt data',data)
  return (
    <div className={classes.root}>
      <span className={classes.title}>Gallery</span>
      <div style={{marginLeft:0, width:'100%',overflow:'hidden'}}>
        < CarouselComp data={data} />
      </div>
      
    </div>
  )
}

export default Gallery