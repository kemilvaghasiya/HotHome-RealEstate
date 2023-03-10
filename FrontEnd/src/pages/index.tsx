import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { LinearProgress } from '@mui/material'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })
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
const HomePage = dynamic(() => import('../components/modules/Home'), {
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

const Footer = dynamic(() => import('../components/footer'), {
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

export default function Home() {
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
        <HomePage />
        {/* <Footer /> */}
      </div>
    </>
  )
}
