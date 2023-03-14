import Image from 'next/image';
import React from 'react'
import useStyles from './styles';

const LetsTalk = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <Image src={'/images/logo.png'} height={130} width={200} alt={'logo'}></Image>
            <div className={classes.divwrapper}>
                <div className={classes.div1}>
                    <span style={{fontSize:30,height:50}}>Let's Talk</span>
                    <span style={{ height: 50, width: '100%', border:'2px solid #B89E69',borderRadius:30,padding:'0px 20px',display:'flex',alignItems:'center',marginTop:20}}>123 Anywhere St. Any City, ST 12345</span>
                    <span style={{ height: 50, width: '100%', border: '2px solid #B89E69', borderRadius: 30, padding: '0px 20px', display: 'flex', alignItems: 'center', marginTop: 20 }}>(123) 456-7890</span>
                    <span style={{ height: 50, width: '100%', border: '2px solid #B89E69', borderRadius: 30, padding: '0px 20px', display: 'flex', alignItems: 'center', marginTop: 20 }}>hello@hothomesite.com</span>
                    <span style={{ height: 50, width: '100%', border: '2px solid #B89E69', borderRadius: 30, padding: '0px 20px', display: 'flex', alignItems: 'center', marginTop: 20 }}>GET SOCIAL</span>
                </div>
                <div className={classes.div2}>
                    <span style={{ fontSize: 30, height: 50 }}>          
                    Business Hours
                    </span>
                    <div className={classes.divContainer}>
                        <span>Monday to Friday</span>
                        <span>9:00 am to 6:00 pm</span>
                        <span>Saturday</span>
                        <span>9:00 am to 12 noon</span>
                        <span style={{marginTop:25,fontWeight:500}}>Sunday by appointment only</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsTalk