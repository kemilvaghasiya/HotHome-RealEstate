import { LinearProgress } from '@mui/material';
import { observer } from 'mobx-react-lite'
import dynamic from 'next/dynamic';
import React from 'react'
import ProjectCard from './components/projectcard';
import AboutHotHome from './components/aboutusintro';
import { CarouselComp } from './components/carousel'
import DetailKPI from './components/detailkpi';
import useStyles from './styles';
import Gallery from './components/projectgallery';
const Footer = dynamic(() => import('../../footer'), {
    ssr: false,
    loading: () => (
        <div
            style={{
                width: '100%',
            }}
        >
            <LinearProgress />
        </div>)
});

const index = observer(() => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
          <CarouselComp />
          <AboutHotHome />
          < DetailKPI />
          < Gallery />
          < ProjectCard />
          <Footer />
    </div>
  )
})

export default index