import { useSession } from 'next-auth/react';
import { useSnackbar } from 'notistack';
import React from 'react'
import VerticalTabs from './panel';

const AdminPanel = () => {
    const session: any = useSession();
    const {enqueueSnackbar}=useSnackbar();
    console.log('test ',session)
    if (session.status=== 'loading'){
        return <></>
    }

    if (  session.status!== "authenticated"){
        enqueueSnackbar('Please Login as Admin to Access the Admin Panel',{variant:'warning'})
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