import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import useStyles from './styles';
import axios from 'axios';
import { useSnackbar } from 'notistack';

export function CarouselComp({data}:any) {
    const { classes } = useStyles();
    // var items:any = [
    //     '/images/carousel/image11.jpg'
    //     // {
    //     //     name: "Random Name #1",
    //     //     description: "GREAT SPACE FOR PERFACTION AND CLASS AT BEST PRICES",
    //     //     imageURL: '/images/carousel/image11.jpg'
    //     // },
    //     // {
    //     //     name: "Random Name #2",
    //     //     description: "LIVE INTO OUR WORLD WITH LAVISH LIFESTYLE AND STRUCTURES",
    //     //     imageURL: '/images/carousel/image2.jpg'
    //     // },
    //     // {
    //     //     name: "Random Name #3",
    //     //     description: "THE CAPITAL PREMIUM CORPORATE & RETAIL BUSINESS SPACE",
    //     //     imageURL: '/images/carousel/image3.jpg'
    //     // }
        
    // ]
    // useEffect(async ()=>{
    //     if(data){
    //         console.log('test data',data)
    //         const images = data.image
    //         for(let i = 0;i<images.length;i++) {
    //             await axios.get(`http://localhost:5000/get-property-images/${images[i]}`)
    //             .then(res=>{
    //                 //console.log('test res',res.data)
    //                 items.push(res.data)
    //                 console.log('..........',items)
    //             })
    //                 .catch((error) => enqueueSnackbar((error), { variant: 'error' }))
                
    //         }
    //         // data.image.map(async(id:string)=>{
    //         //    await axios.get(`http://localhost:5000/get-property-images/${id}`)
    //         //     .then(res=>{
    //         //         //console.log('test res',res.data)
    //         //         items.push(res.data)
    //         //         console.log('..........',items)
    //         //     })
    //         //         .catch((error) => enqueueSnackbar((error), { variant: 'error' }))
    //         // })
    //     }
        
    // },[])
    // console.log('test item', items)
    return (
        <Carousel
            className={classes.root}
            animation='slide'
            navButtonsAlwaysVisible={true}
            autoPlay={false}
            // interval={4000}
            // stopAutoPlayOnHover={false}
            // fullHeightHover={false}
            indicators={false}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    // backgroundColor: 'lightgrey',
                    borderRadius: 15,
                    opacity: 0.8,
                    // marginTop:-30
                }
            }}
        >
            {
                 data?.image?.map((item:any, i:number) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: any) {
    const { classes } = useStyles();
    const [imageURL,setImageURL]=useState(null);
    const { enqueueSnackbar } = useSnackbar();
    React.useEffect(() => {
        axios.get(`http://localhost:5000/get-property-images/${props.item}`, {
        })
            .then(response => {
                // const imageBlob = new Blob([response.data.imageData], { type: 'image/jpeg' });
                // console.log('test image', URL.createObjectURL(imageBlob))
                setImageURL(response.data)
            })
            .catch((error) => enqueueSnackbar((error), { variant: 'error' }))

    }, [])

    return (
        <div
            style={{
                backgroundImage: `url('${imageURL}')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // opacity:0.5
            }}
            className={classes.container}
        >
        </div>
    )
}