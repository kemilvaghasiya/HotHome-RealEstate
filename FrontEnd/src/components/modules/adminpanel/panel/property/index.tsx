import { Button } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import BasicTable from './table'
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import useStore from '@/components/store/usestore';
import { observer } from 'mobx-react-lite';

const PropertyDetails = () => {
  const [projectData, setProjectData] = useState<any>(null);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { rootStore: { navBarStore: { getRefetchProjectData, setRefetchProjectData } } } = useStore();

  useEffect(() => {
    // console.log('test get',getRefetchProjectData)
    // if (getRefetchProjectData===true){

    axios.get('http://localhost:5000/get-all-properties')
      .then(res => setProjectData(res.data))
      .catch((error) => enqueueSnackbar((error.message), { variant: 'error' }))
    setRefetchProjectData(false);
    // }
  }, [])
  useEffect(() => {
    console.log('test refretch',getRefetchProjectData)
    if (getRefetchProjectData === true) {
      axios.get('http://localhost:5000/get-all-properties')
        .then(res => setProjectData(res.data))
        .catch((error) => enqueueSnackbar((error.message), { variant: 'error' }))
      setRefetchProjectData(false);
    }
  }, [getRefetchProjectData])
  return (
    <div>
      < BasicTable data={projectData} Title={'Property Details'} />
      <Button variant="contained" onClick={() => { router.push('/addproperty') }} startIcon={< AddIcon />}>Add Property</Button>
    </div>
  )
}

export default observer(PropertyDetails)