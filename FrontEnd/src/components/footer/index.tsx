import React from 'react'
import AboutUS from './components/aboutus';
import CompanyInfo from './components/companyinfo';
import ContactUs from './components/contactus';
import NewsLetter from './components/newsletter';
import useStyles from './styles';

const Footer = () => {
    const {classes}=useStyles();
  return (
    <>
    <div className={classes.root}>
        <AboutUS />
        <CompanyInfo />
        <ContactUs />
        <NewsLetter />
    </div>
          <span className={classes.tag}>
              {'© 2023 – HotHome Group. All rights reserved.'}
          </span>
    </>
  )
}

export default Footer