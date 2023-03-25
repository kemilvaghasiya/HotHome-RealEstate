import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React from 'react'
import VerticalTabs from './panel';

const AdminPanel = () => {
    const session: any = useSession();
    const {enqueueSnackbar}=useSnackbar();
    const router=useRouter();
    console.log('test ',session)
    if (session.status=== 'loading'){
        return <></>
    }

    if (  session.status!== "authenticated"){
        enqueueSnackbar('Please Login as Admin to Access the Admin Panel',{variant:'warning'})
        return<>
            <Button style={{display:'flex',justifyContent:'center',marginTop:50}} onClick={()=>router.push('auth/signin')} variant="contained">Login</Button>
        </>
    }
    // else if(session.data.user.user.userRole!=='admin'){
    //     enqueueSnackbar('This Page is only Accessible by Admin ', { variant: 'warning' })
    // }
  return (
    <div style={
        {
            display:'flex',
            width:'100%',
            height:'100%'
        }
    }>
          < VerticalTabs />
    </div>
  )
}

export default AdminPanel