import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from '../styles';
import HotelIcon from '@mui/icons-material/Hotel';

export default function ProjectCard() {
    const {classes}=useStyles();
    return (
        <Card sx={{ maxWidth: 345 }} style={{ margin: 20, borderRadius: 10, boxShadow:'0px 0px 8px rgba(0, 0, 0, 0.4)'}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                image="images/project/image1.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                    Prestige View Park
                </Typography>

                <Typography variant='body1' component="div" className={classes.cardLocation}>
                    Prestige View Park -locatin
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.info}>
                    < HotelIcon />
                    <span style={{marginLeft:10,marginTop:3}}>3,4 BHK Aprtment</span>
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">Share</Button> */}
                <Button size="small">View In Detail</Button>
            </CardActions>
        </Card>
    );
}