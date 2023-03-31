import { isStatusOk } from '@/api/utils';
import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React from 'react'
import useStyles from './styles';

const List = [
  {
    label: 'Development Size',
    value: 'floorPlan'
  },
  {
    label: 'Project Type',
    value: 'villas'
  },
  {
    label: 'Total units',
    value: '320 units'
  },
  {
    label: 'Bedrooms',
    value: '3,4 BHK'
  }
]

const ProjectHighlights = ({ data }: any) => {
  const { classes } = useStyles();
  const {enqueueSnackbar}=useSnackbar();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data1 = new FormData(event.currentTarget);
    let reqBody = {
      name: `${data1.get('name')}`,
      email: data1.get('email'),
      phone: data1.get('phone'),
      propertyId:data._id,
      propertyName: data.propertyName
    }
    // console.log(reqBody);

    const res: any = await axios.post('http://localhost:5000/add-userNotification', reqBody)
    if (isStatusOk(res.status) && res) {
      const form:any = document.getElementById('form');
      form.reset();
        enqueueSnackbar('Enquired Successfully', { variant: 'success' });
        // router.push('/auth/signin');
    }
    else {
        enqueueSnackbar(res?.error?.message, { variant: 'error' })
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.left}>

        <span className={classes.title}>
          Project Highlights
        </span>
        <div style={{ marginTop: 5 }}>
          {/* {
          List.map((item)=>{
            return(
           
            )
          })
        } */}
          <div className={classes.item}>
            <span className={classes.label}>Development Size</span>
            <span className={classes.value}>{data.floorPlan} Acres</span>
          </div>
          <div className={classes.item}>
            <span className={classes.label}>Project Type</span>
            <span className={classes.value}>Apartment</span>
          </div>
          <div className={classes.item}>
            <span className={classes.label}>Transaction Type</span>
            <span className={classes.value}>{data.transactionType}</span>
          </div>
          <div className={classes.item}>
            <span className={classes.label}>Total Units</span>
            <span className={classes.value}>{data.noOfUnits}</span>
          </div>
          <div className={classes.item}>
            <span className={classes.label}>Bedrooms</span>
            <span className={classes.value}>{data.noOfBedrooms}</span>
          </div>
          <div className={classes.item}>
            <span className={classes.label}>Price</span>
            <span className={classes.value}>{data.price}$</span>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <Box
            sx={{
              //   marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            // className='authBox'
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                  <LockOutlinedIcon />
                              </Avatar> */}
            <Typography component="h1" style={{ fontWeight: 500 }} variant="h6" color='primary'>
              Request a callback
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }} id='form'>
              <Grid container spacing={1}>
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
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    autoFocus

                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Youe Mobile"
                    name="phone"

                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Your Email"
                    name="email"

                    autoComplete="off"
                  />
                </Grid>
                {/* </Grid> */}
               
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

              >
                 ENQUIRE
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
    </div>
  )
}

export default ProjectHighlights