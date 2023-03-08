import DynamicComponentLoader from '@/components/common/loader/dynemicComploader';
import '@/styles/globals.css'
import { LinearProgress } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { SnackbarProvider } from 'notistack';

// const Navbar = dynamic(() => import('../components/navbar'), {
//   ssr: false,
//   loading: () => (
//     <div
//       style={{
//         width: '100%',
//       }}
//     >
//       <LinearProgress />
//     </div>)
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </SnackbarProvider>
    </SessionProvider>
  )
}
