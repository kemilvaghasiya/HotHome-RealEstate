import React from 'react'
import useStyles from './styles';
const List=[
    {
        label:'PHONE',
        value:'079 12345678',
    },
    {
        label:'EMAIL',
        value:'info@hothome.in'
    }
]

const ContactUs = () => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
        <span className={classes.title}>CONTACT US</span>
        {
            List.map((item)=>{
                return(
                    <div style={{display:'flex',flexDirection:'column',marginTop:10}}>
                        <span className={classes.discriptionlabel}>{item.label}</span>
                        <span className={classes.discriptionvalue}>{item.value}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ContactUs