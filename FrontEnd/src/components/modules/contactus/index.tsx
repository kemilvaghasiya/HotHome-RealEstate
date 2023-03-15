import Footer from '@/components/footer'
import useStyles from './styles';
import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import axios from 'axios';
// import { isStatusOk } from '@/api/utils';
import { useRouter } from 'next/router';

const theme = createTheme();

const ContactUsWrapper = () => {
    const { classes } = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
            let reqBody = {
                name: `${data.get('name')}`,
                email: data.get('email'),
                subject: data.get('subject'),
                message: data.get('message')
            }
            console.log(reqBody);

            // const res: any = await axios.post('http://localhost:5000/signup', reqBody)
            // if (isStatusOk(res.status) && res) {
            //     enqueueSnackbar('Registered Successfully', { variant: 'success' });
            //     router.push('/auth/signin');
            // }
            // else {
            //     enqueueSnackbar(res?.error?.message, { variant: 'error' })
            // }
    };
    return (
        <div className={classes.root}>
            <div className={classes.comproot} style={{
                backgroundImage: `url('/images/contactus/image1.jpg')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
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
                                  We Love To Here From You
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
                                                        id="email"
                                                        label="Email Address"
                                                        name="email"

                                                        autoComplete="off"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        //   required
                                                        fullWidth
                                                        name="subject"
                                                        label="Subject"
                                                        type="subject"
                                                        //   inputProps={{ minLength: 8 }}
                                                        id="subject"
                                                        autoComplete="off"
                                                    />

                                                </Grid>
                                                <Grid item xs={12}>

                                                    <TextField
                                                        //   required
                                                        fullWidth
                                                        name="message"
                                                        label="Message"
                                                        type="message"
                                                        id="message"
                                                        autoComplete="off"
                                                        multiline
                                                        minRows={4}
                                                    //   inputProps={{ minLength: 8 }}
                                                    />
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

            <Footer></Footer>
        </div>
    )
}

export default ContactUsWrapper