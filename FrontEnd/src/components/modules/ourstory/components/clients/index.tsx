import React from 'react'
import useStyles from './styles';

const List = [
    {
        clientName: 'Natalia Lowe',
        desc: `Boost your product and service's
                            credibility by adding testimonials
                        from your clients. People love  
                                    recommendations so feedback from
                                        others who've tried it is invaluable.`
    },
    {
        clientName: ' Elliot Sterling',
        desc: `Boost your product and service's
credibility by adding testimonials
from your clients. People love
recommendations so feedback from
others who've tried it is invaluable.
Boost your product and service's
credibility by adding testimonials
from your clients.
    `
    },
    {
        clientName: 'Lillian Pratt',
        desc: `Boost your product and service's
credibility by adding testimonials
from your clients.
`
    },
]

const HappyClients = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.root} style={{
            backgroundImage: `url('/images/aboutus/image2.jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className={classes.wrapper}>
                <span 
                    style={{
                        fontSize:26,
                        fontWeight:600,
                        letterSpacing:2,
                        marginTop:30
                    }}
                >Happy Clients</span>
                <div className={classes.cardwrapper} style={{display:'flex',justifyContent:'space-evenly',height:'100%',width:'100%',marginTop:30,
            }}>

                {
                    List.map((item)=>{
                        return(
                            <div className={classes.cardcontainer}>
                                <p>{item.desc}</p>
                                <p style={{fontWeight:800,marginTop:20}}>{`- ${item.clientName}`}</p>
                            </div>    
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default HappyClients