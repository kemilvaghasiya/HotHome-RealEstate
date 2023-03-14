import Head from 'next/head'
import React from 'react';
import styles from '@/styles/Home.module.css';
import dynamic from 'next/dynamic';
import { LinearProgress } from '@mui/material';

const Navbar = dynamic(() => import('../components/navbar'), {
    ssr: false,
    loading: () => (
        <div
            style={{
                width: '100%',
            }}
        >
            <LinearProgress />
        </div>)
});

const OurStory = dynamic(() => import('../components/modules/ourstory'), {
    ssr: false,
    loading: () => (
        <div
            style={{
                width: '100%',
            }}
        >
            <LinearProgress />
        </div>)
});

const  AboutUs = () => {
  return (
      <>
          <Head>
              <title>AIP</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
              <Navbar />
              < OurStory />
              {/* <HomePage /> */}
              {/* <Footer /> */}
          </div>
      </>
  )
}

export default  AboutUs