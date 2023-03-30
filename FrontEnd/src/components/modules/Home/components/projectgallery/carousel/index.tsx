import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import useStyles from './styles';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import HotelIcon from '@mui/icons-material/Hotel';

export function CarouselComp({data}:any) {
    const { classes } = useStyles();
    var items:any = [
        {
            name: "Water Street Unit ",
            address:'torrento,Canada',
            description: "2BHK",
            imageURL: '/images/home/upcoming/image1.jpg'
        },
        {
            name: "Bay Lake",
            address: 'Montréal,Canada',
            description: "3BHK",
            imageURL: '/images/home/upcoming/image2.jpg'
        },
        {
            name: "Morin Avenue",
            address: 'Vancouver,Canada',
            description: "1BHK",
            imageURL: '/images/home/upcoming/image3.jpg'
        },
        
    ]
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
                    opacity: 1,
                    // marginTop:-30
                }
            }}
        >
            {
                items?.map((item:any, i:number) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: any) {
    const { classes } = useStyles();
    // const [imageURL,setImageURL]=useState(null);
    const { enqueueSnackbar } = useSnackbar();
    // React.useEffect(() => {
    //     if(props.item){

    //         axios.get(`http://localhost:5000/get-property-images/${props.item.ima}`, {
    //         })
    //             .then(response => {
    //                 // const imageBlob = new Blob([response.data.imageData], { type: 'image/jpeg' });
    //                 // console.log('test image', URL.createObjectURL(imageBlob))
    //                 setImageURL(response.data)
    //             })
    //             .catch((error) => enqueueSnackbar((error), { variant: 'error' }))
    //     }

    // }, [])

    return (
        <div
            style={{
                backgroundImage: `url('${props.item.imageURL}')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // opacity:0.5
            }}
            className={classes.container}
        >
            {/* <div style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.3)'}}> */}
                <div style={{ height: 150, width: 300, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 5, marginTop: 430, marginLeft: 100 ,display:'flex',flexDirection:'column'}}>
                <span style={{fontSize:25,fontWeight:500,marginLeft:20,marginTop:25}} >{props.item.name}</span>
                <span style={{fontSize:14,marginLeft:20,color:'grey',marginTop:10}}>{props.item.address}</span>
                <div style={{display:'flex',marginTop:10,marginLeft:20}}>

                < HotelIcon />
                    <span style={{marginLeft:10,marginTop:3}}>{props.item.description}</span>
                </div>
                </div>
            {/* </div> */}
           
            
        </div>
    )
}