import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from '@mui/material/Link';
import { FormEventHandler, useState } from "react";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

interface Props { }

const SignIn: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        // validate your userinfo
        e.preventDefault();
        const data = new FormData( e.currentTarget);
        const reqBody={
            email:data.get('email'),
            password:data.get('password')
        }
        // console.log(reqBody)

        const res = await signIn("credentials", {
             email: userInfo.email,
            password: userInfo.password,
            redirect: true,
        });

        // console.log(res);
    };
    return (
        <div className='authbackground'>

            <Container component="main" maxWidth="xs" className="container">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignSelf:'center'
                        
                    }}
                    className ='authBox'
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    // id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete='off'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />

                            </Grid>


                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}

                        >
                            Log in
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/auth/signup" variant="body2">
                                    Not have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default SignIn;