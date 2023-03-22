import React from 'react'
import useStyles from './styles';

const AboutProject = ({data}:any) => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
          <span className={classes.title}>
        About {data.propertyName}
          </span>
          <div style={{ marginTop: 20,lineHeight:1.8 }}>
        {data.propertyName} is an exclusive community that offers exclusive ultra luxury villas for the very upper crust. Situated on a gentle hillock, much sought after suburb,it's comprises of  high rise towers of up to 27 floors set in a scenic background, altogether painting a picture of a blissfully luxurious neighborhood that reposes in unquestioned majesty. The Independent Apartment are situated on stepped terraces defining the gradual acclivity of {data.propertyName}, while the high rise towers are located on the flatter terrain along its periphery. The Independent Bungalows with areas edifices set in scenic streetscapes.
          </div>
    </div>
  )
}

export default AboutProject