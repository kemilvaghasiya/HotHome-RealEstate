import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import useStyles from './styles';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const { classes }=useStyles();
    const [auth,setAuth]=useState(false)

    return (
        <AppBar position="static" className={classes.root}>
               <div>
                    
               </div>
               <div>
                    
               </div>
               <div className={classes.login}>
                {
                    auth?(
                        <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleMenu}
                    color="inherit"
                    >
                     <AccountCircle />
                        </IconButton>
                    ):<Button  color="inherit" onClick={()=>signIn()}>Login</Button>
                }
               </div>
        </AppBar>
    );
}
export default  Navbar;
