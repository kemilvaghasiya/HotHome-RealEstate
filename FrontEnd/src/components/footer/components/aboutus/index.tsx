import React from 'react'
import useStyles from './styles';

const AboutUS = () => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
        <span className={classes.title}>ABOUT US</span>
          <span className={classes.discription} >We are in Real Estate Building Construction since last 21 years. we want our company to be a major infrastructure and growth driver for the development of India so that the whole nation gets empowered.</span>
    </div>
  )
}

export default AboutUS