import { Button } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import BasicTable from './table'

const PropertyDetails = () => {
  const [projectData, setProjectData] = useState<any>(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios.get('http://localhost:5000/get-all-properties')
      .then(res => setProjectData(res.data))
      .catch((error) => enqueueSnackbar((error.message), { variant: 'error' }))
  }, [])
  return (
    <div>
      < BasicTable data={projectData} Title={'Property Details'} />
      <Button variant="contained">+ Add Property</Button>
    </div>
  )
}

export default PropertyDetails