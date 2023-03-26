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

const theme = createTheme();

const AddProperty = () => {
    const { classes } = useStyles();
    const [images, setImages] = React.useState<any>([]);
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data:any = new FormData(event.currentTarget);
        let reqBody = {
            propertyName: data.get('propertyName'),
            address: data.get('address'),
            noOfUnits: data.get('noOfUnits'),
            floorPlan: data.get('floorPlan'),
            pincode: data.get('pincode'),
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
        formData.append('noOfBedrooms', data.get('noOfBedrooms'))
        for(let i=0;i<images.length;i++){
            formData.append('images', images[i].file)
        }
        // formData.append('images', images)
        // console.log('test', formData);

        const res: any = await axios.post('http://localhost:5000/register-properties', formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        if (isStatusOk(res.status) && res) {
            enqueueSnackbar('Registered Property Successfully', { variant: 'success' });
            router.push('/adminpanel')
        }
        else {
            enqueueSnackbar(res?.error?.message, { variant: 'error' })
        }
    };

  return (
      <div className={classes.root}>
          <div className={classes.comproot} style={{
            width:'100%',
            height:'100%',
            backgroundColor:'white'
            //   backgroundImage: `url('/images/contactus/image1.jpg')`,
            //   backgroundPosition: 'center',
            //   backgroundRepeat: 'no-repeat',
            //   backgroundSize: 'cover',
          }}>
              <div className={classes.wrapper}>
                  <div>
                      <ThemeProvider theme={theme}>
                          <div style={{ padding: '30px 0px' }}>

                              <Container component="main" maxWidth="xs" >
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
                                        Add Property
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
                                                  />
                                              </Grid>
                                              <Grid item xs={12}>
                                                  <TextField
                                                      //   required
                                                      fullWidth
                                                      name="noOfUnits"
                                                      label="noOfUnits"
                                                      type="noOfUnits"
                                                        inputProps={{ type:'number'}}
                                                      id="noOfUnits"
                                                      autoComplete="off"
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

      </div>
  )
}

export default AddProperty