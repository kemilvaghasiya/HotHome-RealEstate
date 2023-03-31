// import { TextField } from '@mui/material'
// import React, { useState } from 'react'

// const SignUp = () => {

//     const [user,setUser]=useState({
//         username: "",
//         email: "",
//         password: "",
//         pwconfirm: ""
//     })
//     const onSubmit=()=>{

//     }

//     const onChange =(event:any)=> {
//         const field = event.target.name;
//         const updateduser:any= {...user};
//         updateduser[`${field}`] = event.target.value;

//         setUser(updateduser)
//     }
//   return (
//     <div>
//           <div className="loginBox">
//               <h1>Sign Up</h1>
//               {/* {errors.message && <p style={{ color: "red" }}>{errors.message}</p>} */}

//               <form onSubmit={onSubmit}>
//                   <TextField
//                       name="username"
//                     //   floatingLabelText="user name"
//                       value={user.username}
//                       onChange={onChange}
//                       errorText={errors.username}
//                   />
//                   <TextField
//                       name="email"
//                     //   floatingLabelText="email"
//                       value={user.email}
//                       onChange={onChange}
//                       errorText={errors.email}
//                   />
//                   <TextField
//                       type={type}
//                       name="password"
//                     //   floatingLabelText="password"
//                       value={user.password}
//                       onChange={onPwChange}
//                       errorText={errors.password}
//                   />

//                   <div className="pwStrRow">
//                       {score >= 1 && (
//                           <div>
//                               <PasswordStr score={score} />
//                               <FlatButton
//                                   className="pwShowHideBtn"
//                                   label={btnTxt} onClick={pwMask}
//                                   style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
//                               />
//                           </div>
//                       )}
//                   </div>
//                   <TextField
//                       type={type}
//                       name="pwconfirm"
//                       floatingLabelText="confirm password"
//                       value={user.pwconfirm}
//                       onChange={onChange}
//                       errorText={errors.pwconfirm}
//                   />
//                   <br />
//                   <RaisedButton
//                       className="signUpSubmit"
//                       primary={true}
//                       type="submit"
//                       label="submit"
//                   />
//               </form>
//               <p>
//                   Aleady have an account? <br />
//                   <a href="/">Log in here</a>
//               </p>
//           </div>
//     </div>
//   )
// }

// export default SignUp


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


const theme = createTheme();

export default function SignUp() {
    const { enqueueSnackbar } = useSnackbar();
    const router=useRouter();
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get('password') === data.get('confirmpassword')) {
            let reqBody = {
                name: `${data.get('firstName')} ${data.get('lastName')}`,
                email: data.get('email'),
                password: data.get('password'),
                phone: data.get('phone')
            }
            // console.log(reqBody);
            

            const res:any = await axios.post('http://localhost:5000/signup',reqBody)
            if (isStatusOk(res.status) && res){
                enqueueSnackbar('Registered Successfully',{variant:'success'});
                router.push('/auth/signin');
            }
            else{
                enqueueSnackbar(res?.error?.message,{variant:'error'})
            }
        }
        else {
            enqueueSnackbar('password and confirm password must be same', { variant: 'warning' })
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className='authbackground'>

                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        className='authBox'
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }} id='form'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="off"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="off"
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
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        inputProps={{ minLength: 8 }}
                                        id="password"
                                        autoComplete="off"
                                    />

                                </Grid>
                                <Grid item xs={12}>

                                    <TextField
                                        required
                                        fullWidth
                                        name="confirmpassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="password"
                                        autoComplete="off"
                                        inputProps={{ minLength: 8 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Mobile Number"
                                        name="phone"
                                        inputProps={{ minLength: 10 }}
                                        autoComplete="off"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/auth/signin" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}