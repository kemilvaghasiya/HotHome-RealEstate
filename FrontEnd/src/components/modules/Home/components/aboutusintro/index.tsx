import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import useStyles from './styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';

const AboutHotHome = () => {
    const { classes } = useStyles();
    const router=useRouter();
    return (
        <div className={classes.root}>
            <div className={classes.image}>
                <img src='/images/home/image1.jpg' alt={''} style={{height:480,width:'45rem'}} ></img>
            </div>
            <div className={classes.desc}>
                <span className={classes.title}>HotHome Group</span>
                <span className={classes.title}>
                    Building Dreams, Carving Lives</span>

                <span className={classes.para}>Hothome group is one of the leading real estate construction companies in the business capital, with its legacy blooming over a period of twenty one years, since 2000.</span>
                <span className={classes.para}>The esteemed company now boasts of several successfully completed projects, both residential and commercial with thirty major finished projects in its kitty!</span>    
                <span className={classes.para}>We believe in delivering dreams thus standing for integrity and quality work by shaping it out with much precision.</span>
                <Button variant="contained" style={{marginTop:20}} onClick={()=>{router.push('/aboutus')}}>{`More About Us`}
                    <ArrowForwardIcon style={{fontSize:18,marginLeft:5}} />
                </Button>
            </div>
        </div>
    )
}

export default AboutHotHome