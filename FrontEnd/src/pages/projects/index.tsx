import { LinearProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import Head from 'next/head'
import React from 'react';
import styles from '@/styles/Home.module.css';


const Navbar = dynamic(() => import('../../components/navbar'), {
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

const ProjectWrapper = dynamic(() => import('../../components/modules/projects'), {
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

const Projects = () => {
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
                < ProjectWrapper />
            </div>
        </>
    )
}

export default Projects