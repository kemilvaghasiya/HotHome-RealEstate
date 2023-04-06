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
// import AdbIcon from '@mui/icons-material/Adb';
import useStyles from './styles';
// import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import useStore from '../store/usestore';
import clsx from 'clsx';



const pages = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Our Story',
        path: '/aboutus'
    },
    {
        label: 'Services',
        path: '/projects'
    },
    {
        label: 'Get in Touch',
        path: '/contactus'
    }

]

const pages1=[
    {
        label:'Home',
        path:'/'
    },
    {
        label: 'Our Story',
        path: '/aboutus'
    },
    {
        label: 'Services',
        path: '/projects'
    },
    {
        label: 'Admin Panel',
        path: '/adminpanel'
    },
    {
        label: 'Get in Touch',
        path: '/contactus'
    }

]
// const settings = [ 'Logout'];

function Navbar() {
    const { classes } = useStyles();
    const router = useRouter();
    const session:any=useSession();
    const {rootStore:{navBarStore:{getTabSelected,setTabSelected}}}=useStore();
    const [auth, setAuth] = useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    // console.log('test', router.pathname)
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page:any) => {
        setTabSelected(page.label)
        router.push(page.path)
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <AppBar position="static" className={classes.root}>
            {/* <div className={classes.leftnav}>
                <span className={classes.logo} onClick={() => router.push('/')}>HotHome Inc.</span>
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
               </div> */}
            <Container maxWidth="xl">
                <Toolbar disableGutters className={classes.root}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'monospace',
                            // fontWeight: 700,
                            fontSize:16,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        // className={classes.logo}
                    >
                        <img src='/images/logo.png' style={{height:55,width:70}}></img>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {session.status === "authenticated" && session.data.user.user.userRole !== 'admin' ? pages1.map((page) => (
                                <MenuItem key={page.label} onClick={()=>handleCloseNavMenu(page)}>
                                    <Typography textAlign="center" className={clsx({
                                        [classes.selctedTab]:router.pathname===`${page.path}`
                                    })}>{page.label}</Typography>
                                </MenuItem>
                            )):
                                pages.map((page) => (
                                    <MenuItem key={page.label} onClick={() => handleCloseNavMenu(page)}>
                                        <Typography textAlign="center" className={clsx({
                                            [classes.selctedTab]: router.pathname === `${page.path}`
                                        })}>{page.label}</Typography>
                                    </MenuItem>
                                ))    
                            }
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontSize:16,
                            // fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src='/images/logo.png' style={{height:55,width:70}}></img>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center' } }}>
                        {session.status === "authenticated" && session.data.user.user.userRole !== 'admin' ?pages1.map((page) => (
                            <Button
                                key={page.label}
                                onClick={()=>handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className={clsx({
                                    [classes.selctedTab]: router.pathname === `${page.path}`
                                })}
                            >
                                {page.label}
                            </Button>
                        )):
                            pages.map((page) => (
                                <Button
                                    key={page.label}
                                    onClick={() => handleCloseNavMenu(page)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    className={clsx({
                                        [classes.selctedTab]: router.pathname === `${page.path}`
                                    })}
                                >
                                    {page.label}
                                </Button>
                            ))
                        }
                    </Box>

                    {session.status === "authenticated"?<Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp"  />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/* {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))} */}
                            <MenuItem key={'yash'} onClick={handleCloseUserMenu}>
                               
                                <Typography textAlign="center">{session.data.user.user.name}</Typography>
                            </MenuItem>

                            <MenuItem key={'Logout'} onClick={()=>{
                               signOut();
                                handleCloseUserMenu;
                            }}>
                                <Typography textAlign="center">{'Logout'}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>:
                        <MenuItem key={'yash'} onClick={()=>signIn()}>
                            <Typography textAlign="center">{'Login'}</Typography>
                        </MenuItem>
                    }
                </Toolbar>
                
            </Container>
        </AppBar>
    );
}
export default observer(Navbar);
