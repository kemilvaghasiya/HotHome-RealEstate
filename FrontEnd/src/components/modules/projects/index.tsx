import DynamicComponentLoader from '@/components/common/loader/dynemicComploader';
import Footer from '@/components/footer';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import ProjectCard from './card';
import useStyles from './styles';

const ProjectWrapper = () => {
    const { classes } = useStyles();
    const [projectData,setProjectData]=useState<any>(null);
    const {enqueueSnackbar}=useSnackbar();

    useEffect(()=>{
        axios.get('http://localhost:5000/get-all-properties')
        .then(res=>setProjectData(res.data))
            .catch((error) => enqueueSnackbar((error.message), { variant: 'error' }))
    },[])
    return (
        <div className={classes.root}>
            <div className={classes.comproot} style={{
                backgroundImage: `url('/images/project/image1.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className={classes.wrapper}>
                    <span className={classes.title}>Residential Projects - HotHome Group</span>
                </div>
            </div>
            <div className={classes.cardContainer}>

                {/* < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard /> */}
                {
                    projectData?
                    projectData.map((data:any)=>{
                        return(
                            < ProjectCard data={data}/> 
                        )
                    }):<DynamicComponentLoader />
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ProjectWrapper