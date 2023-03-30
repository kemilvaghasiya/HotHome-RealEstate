import DynamicComponentLoader from '@/components/common/loader/dynemicComploader';
import Footer from '@/components/footer';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import ProjectCard from './card';
import SearchField from './search';
import useStyles from './styles';

const ProjectWrapper = () => {
    const { classes } = useStyles();
    const [projectData,setProjectData]=useState<any>();
    const [filterdProjectData,setFilteedProjectData]=useState<any>();
    const [projectName,setProjectName]=useState('');
    const [minValue,setMinValue]=useState('');
    const[maxValue,setMaxValue]=useState('');
    const {enqueueSnackbar}=useSnackbar();
    const [bedRoom, setBedRoom] = React.useState('');
    const [transactionType, setTransactionType]=useState( '')
    const [length,setLength]=useState();

    const handleChange = (event: any) => {
        setBedRoom(event.target.value);
    };

    useEffect(()=>{
        axios.get('http://localhost:5000/get-all-properties')
            .then(res => { setProjectData(res.data); setFilteedProjectData(res.data); setLength(res.data?.length)})
            .catch((error) => enqueueSnackbar((error.message), { variant: 'error' }))
    },[])

    const searchHandler=()=>{
        if (minValue && maxValue && Number(minValue)>Number(maxValue)){
            enqueueSnackbar(('minValue can not exceed then maxValue'), { variant: 'warning' })
        }
        // setFilteedProjectData([]);
        let originalData=JSON.parse( JSON.stringify(projectData));
        originalData= originalData?.filter((data:any)=>{
            let filterd=true;
            if (projectName && !data.propertyName.includes(projectName)){
                filterd=false;
            }
            if (bedRoom && !(data.noOfBedrooms===bedRoom)){
                filterd= false;
            }
            if (transactionType && !(data?.transactionType===transactionType)){
                filterd= false;
            }
            if(minValue && maxValue && !(data.price >=Number(minValue) && data.price<=Number(maxValue)) ){
                filterd=false;
            } 

            if(minValue && !(data.price>=Number(minValue))){
               
                filterd=false;
            }
            if(maxValue && !(data.price<=Number(maxValue))){
                 filterd= false;
            }
            return filterd
        })
        setLength(originalData?.length)
        setFilteedProjectData(originalData)
    }

    const clearHandler=()=>{
        setProjectName('');
        setBedRoom( '');
        setMaxValue( '');
        setMinValue('');
        setTransactionType('');
        setLength(projectData?.length)
        setFilteedProjectData(projectData)
    }
    return (
        <div className={classes.root}>
            <div className={classes.comproot} style={{
                backgroundImage: `url('/images/project/image1.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className={classes.wrapper}>
                    <span className={classes.title}>Residential Projects - HotHome Group</span>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: 'fit-content', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.5)', margin:15}}>
                <div className={classes.searchFilter}>

                <SearchField title={'Project Name'} value={projectName} onchange={(event: any) => setProjectName(event.target.value)}/> 
                <SearchField title={'Min Value'} value={minValue} onchange={(event: any) => setMinValue(event.target.value)} /> 
                <SearchField title={'Max Value'} value={maxValue} onchange={(event: any) => setMaxValue(event.target.value)} />
                </div>
                <div className={classes.selectFilter}>

               
                    <Box sx={{ width: 250, maxWidth: 350, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)', }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Beds</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={bedRoom}
                            label="Beds"
                            onChange={(event:any)=>setBedRoom(event.target.value)}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                    <Box sx={{ width: 250, maxWidth: 350, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)'}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Transaction Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={transactionType}
                            label="Beds"
                            onChange={(event:any)=>setTransactionType(event.target.value)}
                        >
                            <MenuItem value={'For Sale'}>For Sale</MenuItem>
                            <MenuItem value={'For Rent'}>For Rent</MenuItem>
                            
                        </Select>
                    </FormControl>
                </Box>
                </div>
                <div className={classes.searchButton}>
                    <Button variant='contained' onClick={searchHandler} >Search</Button>
                    <Button variant='contained' style={{backgroundColor:'red',marginLeft:30}} onClick={clearHandler} >Clear</Button>
                </div>
            </div>
            <div className={classes.cardContainer}>

                {/* < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard />
                < ProjectCard /> */}
                {
                    filterdProjectData ?
                        length !== 0 ? filterdProjectData.map((data: any) => {
                            return (
                                < ProjectCard data={data} />
                            )
                        }):(<div style={{color:'black'}}>No Data Available for applied Filters</div>)
                        :<DynamicComponentLoader />
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ProjectWrapper