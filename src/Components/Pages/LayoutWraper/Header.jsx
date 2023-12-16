import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Badge, Box, Button, Divider, Drawer, IconButton, MenuItem, MenuList, Stack, Toolbar, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import UserLogInPage from '../SignInPage/UserLogInPage';
import AfterLogInRedirectBox from '../SignInPage/AfterLogInRedirectBox';

// Badge Styling
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -5,
        top: -2,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

// User LogIn or SignIn Button Componetn
const LogInButton = (props) => {
    const { firsttext, secondtext, funcCall } = props.userdata;
    return (
        <>
            <Button sx={{ color: 'white', display: 'flex', border: '0px solid white', padding: '5px 8px' }} onClick={funcCall}>
                <Avatar alt="" src="/static/images/avatar/1.jpg" sx={{ width: '30px', height: '30px' }} />
                <Stack>
                    <Typography component={'span'} fontSize={9} textAlign={'center'} fontWeight={600}>{firsttext}</Typography>
                    <Divider color='goldenrod' style={{ height: '1px' }} />
                    <Typography component={'span'} fontSize={9} ml={0.1} fontWeight={600}>{secondtext}</Typography>
                </Stack>
            </Button>
        </>
    )
}


const Header = () => {
    const [isUserLogIn, setIsUserLogIn] = useState(false);    //Check user is login or not states

    const [mob, setMob] = useState(false);
    const handleDrawerToggle = () => {
        setMob(!mob);
    }

    // Nabar List
    let navlist = [
        { listname: "Home", path: "/", icon: <HomeIcon /> },
        { listname: "Menu", path: "/menu", icon: <RestaurantMenuIcon /> },
        { listname: "Cart", path: "/cart", icon: <AddShoppingCartIcon /> },
        { listname: "About", path: "/about", icon: <InfoIcon /> },
    ];

    // LogIn or Sign Button
    const [open, setOpen] = useState(false);
    const [myLogInDialogOpen, setMyLogInDialogOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);     // for after logIn successful show small box for redirect my account and logout

    useEffect(()=>{
        if(sessionStorage.getItem('UserData') !== null){
            console.log("LogIn Done")
            setIsUserLogIn(true)
        }else{
            console.log('Not LogIn')
            setIsUserLogIn(false)
        }
    },[isUserLogIn])

    const logIn_SignIn_btn = (e) => {
        // userLogIn ? setAnchorEl(e.currentTarget) : setMyLogInDialogOpen(true)
        if(isUserLogIn){
            setAnchorEl(e.currentTarget)
            setOpen(true)
        }else{
            setMyLogInDialogOpen(true)
            setOpen(false)
        }

    }

    const mySetAnchorEl = (val) => {
        setAnchorEl(val)
    }

    // Close btn for dialog box
    const myclosefun = () => {
        setMyLogInDialogOpen(false)
    }

    // Drower
    const drawer = (
        <Box>
            {/* Drawer Logo */}
            <Toolbar>
                <Typography variant='h6' fontWeight={'bold'} position={'relative'} component={'span'} color={'white '}  >
                    <FastfoodIcon sx={{ fontSize: '1.5 rem', color: 'goldenrod' }} />
                    Our <Box component={'span'} id='dra-res-compo'><span style={{ fontSize: '1.5rem', color: 'goldenrod' }}>R</span>estaurant</Box>
                </Typography>
            </Toolbar>

            {/* Divider */}
            <Divider color={'goldenrod'} sx={{ color: 'white' }} />

            {/* Menu List Nav */}
            <MenuList className='side-navbar'>
                {
                    navlist.map((list) => (
                        list.listname === 'Cart'
                            ? <NavLink to={list.path} key={list.listname} onClick={() => setMob(false)}><MenuItem disableGutters sx={{ color: 'white', padding: '5px 13px', display: 'flex', justifyContent: 'center', '@media (min-width: 750px )': { minHeight: '100%' } }}>{list.icon} <StyledBadge badgeContent={2} color='primary'>{list.listname}</StyledBadge></MenuItem></NavLink>
                            : <NavLink to={list.path} key={list.listname} onClick={() => setMob(false)}><MenuItem disableGutters sx={{ color: 'white', padding: '5px 13px', display: 'flex', justifyContent: 'center', '@media (min-width: 750px )': { minHeight: '100%' } }}>{list.icon} {list.listname}</MenuItem></NavLink>
                    ))
                }

                <MenuItem>
                    <Button sx={{ color: 'white', display: 'flex', border: '0.5px solid skyblue', padding: '5px 8px' }} fullWidth onClick={logIn_SignIn_btn}>
                        <Avatar alt="" src="/static/images/avatar/1.jpg" sx={{ width: '35px', height: '35px' }} />
                        <Stack>
                            <Typography fontSize={10} textAlign={'center'}>Log In </Typography>
                            <Divider color='goldenrod' style={{ height: '1px' }} />
                            <Typography fontSize={10}>Sign up</Typography>
                        </Stack>
                    </Button>
                </MenuItem>
                {/* {
                    userLogIn
                        ? <LogInButton userdata={{ firsttext: 'Sachin', secondtext: 'Mishra', funcCall: logIn_SignIn_btn }} />
                        : <LogInButton userdata={{ firsttext: 'Log In', secondtext: 'Sign In', funcCall: logIn_SignIn_btn }} />
                } */}
            </MenuList>
            {/* Name */}
            <Box sx={{ width: '100%', backgroundColor: 'rgba(218, 165, 32, 0.2)', fontWeight: '600', color: 'white', position: 'absolute', bottom: '2px', textAlign: 'center' }}>
                <Typography variant='caption'>CopyRight@Sam</Typography>
            </Box>

        </Box>
    );

    return (
        <>
            <AppBar className='header-nav' sx={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', color: 'white', position: 'sticky', padding: '0 !important' }}>
                <Toolbar
                    disableGutters
                    sx={{
                        padding: '0 10px',
                        position: 'relative',
                        '@media (min-width: 600px )': { minHeight: '50px' },
                    }}
                >
                    <Box sx={{ flexGrow: '1', display: 'none', '@media (max-width: 750px )': { display: 'block' } }}>
                        <IconButton color='inherit' onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Logo */}
                    <Box flexGrow={1}>
                        <Typography variant='h5' fontWeight={'bold'} position={'relative'} component={'span'}>
                            <FastfoodIcon sx={{ fontSize: '1.8rem', color: 'goldenrod' }} />
                            Our <Box component={'span'} id='res-compo'><span style={{ fontSize: '1.7rem', color: 'goldenrod' }}>R</span>estaurant</Box>
                        </Typography>
                    </Box>

                    {/* Menu List Navigation */}
                    <MenuList className='navbar' sx={{ display: 'flex', '@media (max-width: 750px )': { display: 'none' } }}>
                        {
                            navlist.map((list) => (
                                list.listname === 'Cart'
                                    ? <NavLink to={list.path} key={list.listname}><MenuItem disableGutters sx={{ color: 'white', padding: '5px 13px', display: 'flex', justifyContent: 'center', '@media (min-width: 750px )': { minHeight: '100%' } }}>{list.icon} <StyledBadge badgeContent={2} color='primary'>{list.listname}</StyledBadge></MenuItem></NavLink>

                                    : <NavLink to={list.path} key={list.listname}><MenuItem disableGutters sx={{ color: 'white', padding: '5px 13px', display: 'flex', justifyContent: 'center', '@media (min-width: 750px )': { minHeight: '100%' } }}>{list.icon} {list.listname}</MenuItem></NavLink>
                            ))
                        }

                        {/* LogIn or SignIn Button for user*/}
                        <Divider color={'white'} orientation='vertical' flexItem sx={{ margin: '0 5px' }} />
                        {
                            isUserLogIn
                                ? <LogInButton userdata={{ firsttext: 'Sachin', secondtext: 'Mishra', funcCall: logIn_SignIn_btn }} />
                                : <LogInButton userdata={{ firsttext: 'Log In', secondtext: 'Sign In', funcCall: logIn_SignIn_btn }} />
                        }

                    </MenuList>
                </Toolbar>
                <Divider color='white' style={{ height: '1px' }} />
            </AppBar>

            {/* Drawer for Mobile*/}
            <Drawer
                anchor='left'
                open={mob}
                onClose={handleDrawerToggle}
                sx={{ display: 'none', '@media (max-width: 750px )': { display: 'block' } }}
                PaperProps={{
                    sx: {
                        backgroundColor: "black",
                        borderRadius: "0 10px 10px 0"
                    }
                }}>
                {drawer}
            </Drawer>

            {/* Dialog or PopUp for User LogIn*/}
            {
                open
                ? <AfterLogInRedirectBox anchorEl={anchorEl} mySetAnchorEl={mySetAnchorEl} isUserLogIn={setIsUserLogIn}/>    // After Login small box
                : <UserLogInPage dialogOpen={myLogInDialogOpen} dialogCloseFunc={myclosefun} isUserLogIn={setIsUserLogIn}/>  
            }
        </>
    )
}

export default Header;