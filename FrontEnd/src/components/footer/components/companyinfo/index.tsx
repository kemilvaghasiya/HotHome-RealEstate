import React from 'react'
import useStyles from './styles';

const List=['Home','Our Story','services','Get In Touch' ]

const CompanyInfo = () => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
        <span className={classes.title}>COMPANY INFO</span>
        {
            List.map((item)=>{
                return(
                    <span className={classes.discription}>{'> '}{item}</span>
                )
            })
        }
    </div>
  )
}

export default CompanyInfo