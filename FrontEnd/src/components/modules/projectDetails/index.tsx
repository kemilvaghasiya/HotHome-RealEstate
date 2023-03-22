import { LinearProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react'
import AboutProject from './aboutproject';
import Amenities from './amenities';
import Gallery from './projectgallery';
import ProjectPrice from './projectprice';
import useStyles from './styles';

const ProjectHighlights = dynamic(() => import('./projectheilights'), {
    ssr: true,
    loading: () => (
        <div
            style={{
                width: '100%',
            }}
        >
            <LinearProgress />
        </div>)
});

const ProjectDetailsWrapper = () => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
          <ProjectHighlights />
          < AboutProject />
          < Amenities />
          < ProjectPrice />
          < Gallery />
    </div>
  )
}

export default ProjectDetailsWrapper