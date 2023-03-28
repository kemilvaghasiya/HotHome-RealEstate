import Footer from '@/components/footer';
import React from 'react'
import HappyClients from './components/clients';
import LetsTalk from './components/letstalk';
import OurValues from './components/ourvalues';
import VisionMission from './components/visionmission';
import useStyles from './styles';

const OurStory = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.comproot} style={{
        backgroundImage: `url('/images/aboutus/image1.jpg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <div className={classes.wrapper}>
          <span className={classes.title}>Our real business is not seeling property, but helping our clients make the decision that best fits them</span>
        </div>
      </div>
      < HappyClients />
      < OurValues />
      < VisionMission />
      <LetsTalk />
      <Footer></Footer>
    </div>
  )
}

export default OurStory