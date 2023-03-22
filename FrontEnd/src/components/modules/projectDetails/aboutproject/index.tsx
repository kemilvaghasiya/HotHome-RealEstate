import React from 'react'
import useStyles from './styles';

const AboutProject = () => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
          <span className={classes.title}>
              About Prestige White Meadows
          </span>
          <div style={{ marginTop: 20,lineHeight:1.8 }}>
              Prestige White Meadows is an exclusive community that offers exclusive ultra luxury villas in Whitefield for the very upper crust. Situated on a gentle hillock in Whitefield, Bangalore’s much sought after suburb, Prestige White Meadows comprises of 288 Sky Villas in four high rise towers of up to 27 floors and 66 Independent Bungalows set in a scenic background, altogether painting a picture of a blissfully luxurious neighborhood that reposes in unquestioned majesty. The Independent Bungalows are situated on stepped terraces defining the gradual acclivity of Prestige White Meadows, while the high rise towers are located on the flatter terrain along its periphery. The Independent Bungalows with areas ranging from 5576 sq ft – 6219 sq ft are 3 storied edifices set in scenic streetscapes.
          </div>
    </div>
  )
}

export default AboutProject