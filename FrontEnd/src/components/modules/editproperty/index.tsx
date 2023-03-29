import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { isStatusOk } from '@/api/utils';
import { useRouter } from 'next/router';
import useStyles from './styles';
import { ImageUploadWrapper } from './imageupload';
import DynamicComponentLoader from '@/components/common/loader/dynemicComploader';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const theme = createTheme();

const convertToFile=async(URL:string,index:number)=>{
    const blob = await(await fetch(URL)).blob()
    // console.log('test blob',new File([blob], `image${index}.png`, { type: blob.type }))
    return new File([blob], `image${index}.png`, { type: blob.type })
}

const EditProperty = ({data}:any) => {
    const propertyData=data?.property[0];
    const { classes } = useStyles();
    const [images, setImages] = React.useState<any>([]);

    React.useEffect(()=>{
        console.log('test refetch', images)
    },[images])
   
    React.useEffect(()=>{
        // setImages([]);
        if(data && data.images){
            
            setImages([]);
             data.images.map(async (image: any, index: number) => {
                const result = await convertToFile(image.dataURL, index).then(res=>res)
                setImages((oldstate:Array<any>)=>{
                    let  updatedState=[...oldstate];
                    let Available=false;
                    updatedState.map((imageInfo)=>{
                        if((imageInfo.data_url===image.data_url) || (imageInfo.file.name ===result.name)){
                            imageInfo = { data_url: image.dataURL, file: result }
                            Available=true;
                        }
                    })
                    if(!Available){
                        updatedState.push({ data_url: image.dataURL, file: result })
                    }
                    return (updatedState)
                })
                return (
                    { data_url: image.dataURL,file: result }
                )
            })
        }
    },[data])
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const [transition, setTransaction]=useState('');
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data:any = new FormData(event.currentTarget);
        let reqBody = {
            propertyName: data.get('propertyName'),
            address: data.get('address'),
            noOfUnits: data.get('noOfUnits'),
            floorPlan: data.get('floorPlan'),
            pincode: data.get('pincode'),
            transactionType: transition,
            price: data.get('price'),
            noOfBedrooms: data.get('noOfBedrooms'),
            images:images
        }
        let formData=new FormData();
        formData.append('propertyName', data.get('propertyName'))
        formData.append('address', data.get('address'))
        formData.append('noOfUnits', data.get('noOfUnits'))
        formData.append('floorPlan', data.get('floorPlan'))
        formData.append('pincode', data.get('pincode'))
        formData.append('price', data.get('price'))
        formData.append('transactionType', transition)
        formData.append('noOfBedrooms', data.get('noOfBedrooms'))
        for(let i=0;i<images.length;i++){
            formData.append('images', images[i].file)
        }
        // formData.append('images', images)
        // console.log('test', reqBody);

        const res: any = await axios.put(`http://localhost:5000/update-property/${propertyData._id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        if (isStatusOk(res.status) && res) {
            enqueueSnackbar('Edited Property Successfully', { variant: 'success' });
            router.push('/adminpanel')
        }
        else {
            enqueueSnackbar(res?.error?.message, { variant: 'error' })
        }
    };

  return (
      <div className={classes.root}>
        {data?(
              <div className={classes.comproot} style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white'
                  //   backgroundImage: `url('/images/contactus/image1.jpg')`,
                  //   backgroundPosition: 'center',
                  //   backgroundRepeat: 'no-repeat',
                  //   backgroundSize: 'cover',
              }}>
                  <div className={classes.wrapper}>
                      <div>
                          <ThemeProvider theme={theme}>
                              <div style={{ padding: '30px 0px' }}>

                                  <Container component="main" maxWidth="lg" >
                                      <CssBaseline />
                                      <Box
                                          sx={{
                                              //   marginTop: 8,
                                              display: 'flex',
                                              flexDirection: 'column',
                                              alignItems: 'center',
                                          }}
                                          className='authBox'
                                      >
                                          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                  <LockOutlinedIcon />
                              </Avatar> */}
                                          <Typography component="h1" style={{ fontWeight: 500 }} variant="h5" color='primary'>
                                              Edit Property
                                          </Typography>
                                          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }} id='form'>
                                              <Grid container spacing={2}>
                                                  {/* <Grid item xs={12} sm={6}>
                                          <TextField
                                              autoComplete="off"
                                              name="name"
                                              required
                                              fullWidth
                                              id="name"
                                              label="Your Name"
                                              autoFocus

                                          />
                                      </Grid> */}
                                                  {/* <Grid item xs={12} sm={6}>
                                          <TextField
                                              required
                                              fullWidth
                                              id="lastName"
                                              label="Last Name"
                                              name="lastName"
                                              autoComplete="off"
                                          />
                                      </Grid> */}
                                                  <Grid item xs={12} >
                                                      <TextField
                                                          autoComplete="off"
                                                          name="propertyName"
                                                          required
                                                          fullWidth
                                                          id="propertyName"
                                                          label="property Name"
                                                          autoFocus
                                                      //   placeholder='test'
                                                          defaultValue={propertyData?.propertyName}
                                                      />
                                                  </Grid>
                                                  <Grid item xs={12}>
                                                      <TextField
                                                          required
                                                          fullWidth
                                                          id="address"
                                                          label="Address"
                                                          name="address"
                                                          multiline
                                                          minRows={3}
                                                          autoComplete="off"
                                                          defaultValue={propertyData?.address}
                                                      />
                                                  </Grid>
                                                  <Grid item xs={12}>
                                                      <TextField
                                                          required
                                                          fullWidth
                                                          id="noOfBedrooms"
                                                          label="noOfBedrooms"
                                                          name="noOfBedrooms"
                                                          inputProps={{ type: 'number' }}
                                                          //   multiline
                                                          //   minRows={3}
                                                          autoComplete="off"
                                                          defaultValue={propertyData?.noOfBedrooms}
                                                      />
                                                  </Grid>
                                                  <Grid item xs={12}>
                                                      <FormControl fullWidth>
                                                        
                                                          <InputLabel id="demo-simple-select-label">Transaction Type</InputLabel>
                                                          <Select
                                                              labelId="demo-simple-select-label"
                                                              id="demo-simple-select"
                                                            //   value={age}
                                                              defaultValue={propertyData?.transactionType}
                                                              label="Age"
                                                              onChange={(event:any)=>setTransaction(event.target.value)}
                                                          >
                                                              <MenuItem value={"For Sale"}>For Sale</MenuItem>
                                                              <MenuItem value={'For Rent'}>For Rent</MenuItem>
                                                              {/* <MenuItem value={30}>Thirty</MenuItem> */}
                                                          </Select>
                                                      </FormControl>
                                                  </Grid>
                                                  <Grid item xs={12}>
                                                      <TextField
                                                          //   required
                                                          fullWidth
                                                          name="noOfUnits"
                                                          label="noOfUnits"
                                                          type="noOfUnits"
                                                          inputProps={{ type: 'number' }}
                                                          id="noOfUnits"
                                                          autoComplete="off"
                                                          defaultValue={propertyData?.noOfUnits}
                                                      />

                                                  </Grid>
                                                  <Grid item xs={12}>

                                                      <TextField
                                                          //   required
                                                          fullWidth
                                                          name="floorPlan"
                                                          label="floorPlan"
                                                          type="floorPlan"
                                                          id="floorPlan"
                                                          autoComplete="off"
                                                          defaultValue={propertyData?.floorPlan}
                                                      //   multiline
                                                      //   minRows={4}
                                                      //   inputProps={{ minLength: 8 }}
                                                      />
                                                  </Grid>
                                                  <Grid item xs={12}>

                                                      <TextField
                                                          //   required
                                                          fullWidth
                                                          name="price"
                                                          label="price"
                                                          type="price"
                                                          id="price"
                                                          inputProps={{ type: 'number' }}
                                                          autoComplete="off"
                                                          defaultValue={propertyData?.price}
                                                      //   multiline
                                                      //   minRows={4}
                                                      //   inputProps={{ minLength: 8 }}
                                                      />
                                                  </Grid>
                                                  <Grid item xs={12}>

                                                      <TextField
                                                          //   required
                                                          fullWidth
                                                          name="pincode"
                                                          label="pincode"
                                                          type="pincode"
                                                          id="pincode"
                                                          autoComplete="off"
                                                          inputProps={{ type: 'number' }}
                                                          defaultValue={propertyData?.pincode}
                                                      //   multiline
                                                      //   minRows={4}
                                                      //   inputProps={{ minLength: 8 }}
                                                      />
                                                  </Grid>

                                                  <Grid item xs={12}>

                                                      < ImageUploadWrapper images={images} setImages={setImages} />
                                                  </Grid>
                                                  {/* <Grid item xs={12}>
                                          <TextField
                                              required
                                              fullWidth
                                              id="phone"
                                              label="Mobile Number"
                                              name="phone"
                                              inputProps={{ minLength: 10 }}
                                              autoComplete="off"
                                          />
                                      </Grid> */}
                                              </Grid>
                                              <Button
                                                  type="submit"
                                                  fullWidth
                                                  variant="contained"
                                                  sx={{ mt: 3, mb: 2 }}

                                              >
                                                  SUBMIT
                                              </Button>
                                              {/* <Grid container justifyContent="flex-end">
                                      <Grid item>
                                          <Link href="/auth/signin" variant="body2">
                                              Already have an account? Sign in
                                          </Link>
                                      </Grid>
                                  </Grid> */}
                                          </Box>
                                      </Box>
                                  </Container>
                              </div>
                          </ThemeProvider>
                      </div>
                  </div>
              </div>
        ):<DynamicComponentLoader />}
         

      </div>
  )
}

export default EditProperty