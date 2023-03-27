import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from '../styles';
import HotelIcon from '@mui/icons-material/Hotel';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSnackbar } from 'notistack';

export default function ProjectCard({data}:any) {
    const {classes}=useStyles();
    const router=useRouter();
    const [imageData,setImageData]=React.useState('')
    const { enqueueSnackbar } = useSnackbar();
    React.useEffect(()=>{
        if(data?.image?.length){
            axios.get(`http://localhost:5000/get-property-images/${data.image[0]}`, {
            })
                .then(response =>{
                    const imageBlob = new Blob([response.data.imageData], { type: 'image/jpeg' });
                    // console.log('test image', URL.createObjectURL(imageBlob))
                    setImageData(response.data)
            })
                .catch((error) => enqueueSnackbar((error.message), { variant: 'error' }))
        }

    },[])
    return (
        <Card sx={{ maxWidth: 345 }} style={{ margin: 20, borderRadius: 10, boxShadow:'0px 0px 8px rgba(0, 0, 0, 0.4)'}}>
          <CardMedia
                component="img"
                alt="image"
                height="250"
                image={`${imageData}`}
            />
            
            {/* <img src={imageData} alt="API Response Image" /> */}
            {
                data && <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                        {data.propertyName}
                    </Typography>

                    <Typography variant='body1' component="div" className={classes.cardLocation}>
                        {data.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={classes.info}>
                        < HotelIcon />
                        <span style={{ marginLeft: 10, marginTop: 3 }}>{`${data.noOfBedrooms} BHK Aprtment`}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className={classes.info}>
                        <span style={{ fontWeight: 500 }}>Price -</span>
                        <span style={{ marginLeft: 10 }}>{`${data.price} $`}</span>
                    </Typography>
                </CardContent>
           } 
            <CardActions>
                {/* <Button size="small">Share</Button> */}
                <Button size="small" onClick={() => router.push(`/projects/${data?._id}`)}>View In Detail</Button>
            </CardActions>
        </Card>
    );
}