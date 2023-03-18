import Footer from '@/components/footer';
import React from 'react'
import ProjectCard from './card';
import useStyles from './styles';

const ProjectWrapper = () => {
    const { classes } = useStyles();
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

                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ProjectWrapper