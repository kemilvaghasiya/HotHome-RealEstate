import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import useStyles from './styles';

export function CarouselComp() {
    const { classes } = useStyles();
    var items = [
        {
            name: "Random Name #1",
            description: "GREAT SPACE FOR PERFACTION AND CLASS AT BEST PRICES",
            imageURL: '/images/carousel/image11.jpg'
        },
        {
            name: "Random Name #2",
            description: "LIVE INTO OUR WORLD WITH LAVISH LIFESTYLE AND STRUCTURES",
            imageURL: '/images/carousel/image2.jpg'
        },
        {
            name: "Random Name #3",
            description: "THE CAPITAL PREMIUM CORPORATE & RETAIL BUSINESS SPACE",
            imageURL: '/images/carousel/image3.jpg'
        }
    ]

    return (
        <Carousel
            className={classes.root}
            animation='slide'
            navButtonsAlwaysVisible={true}
            autoPlay={true}
            interval={4000}
            stopAutoPlayOnHover={false}
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
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: any) {
    const { classes } = useStyles();
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
            <div className={classes.titleWrapper}>

                {/* <h2>{props.item.name}</h2> */}
                <p className={classes.title}>{props.item.description}</p>

                {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
            </div>
        </div>
    )
}