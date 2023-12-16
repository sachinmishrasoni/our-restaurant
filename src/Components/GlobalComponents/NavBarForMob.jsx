import React from 'react'
import { Box, Button, Grid, Tooltip, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBarForMob = ({logInDialog}) => {
    // Button data
    const gridItemData = [
        { btnname: "Home", btnicon: HomeIcon, path: "/" },
        { btnname: "Menu", btnicon: RestaurantMenuIcon, path: "/menu" },
        { btnname: "Cart", btnicon: AddShoppingCartIcon, path: "/cart" },
        { btnname: "Account", btnicon: AccountCircleIcon, path: "/myaccount" },
    ]
    // Account Button
    const accountBtnFunc = () =>  {
        if(logInDialog !== undefined) logInDialog(true)
    }
    // Grid Item Button component
    const GridItem = ({ data }) => {

        return (
            <>
                <Grid item xs={3} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <NavLink to={data.path} style={{ textDecoration: 'none' }}>
                        <Tooltip title={data.btnname}>
                            <Button
                                sx={{
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '2px 0',
                                    borderRadius: '100px'
                                }}
                                onClick={data.btnname === 'Account'? accountBtnFunc : null}
                            >
                                <data.btnicon />
                                <Typography fontSize={10}>{data.btnname}</Typography>
                            </Button>
                        </Tooltip>
                    </NavLink>
                </Grid>
            </>
        );
    }
    return (
        <>
            <Box sx={{ position: 'relative', zIndex: '1', display: 'none', '@media (max-width: 750px)': { display: 'block' } }}>
                <Grid container id='small-navbar'>
                    {
                        gridItemData.map((items, ind) => <GridItem key={ind} data={items} />)
                    }

                    {/* <Grid item xs={3} sm={3} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <NavLink style={{ textDecoration: 'none' }}>
                        <Tooltip title={'Account'}>
                            <Button sx={{ color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2px 0', borderRadius: '100px' }}>
                                <AccountCircleIcon />
                                <Typography fontSize={10}>{'Account'}</Typography>
                            </Button>
                        </Tooltip>
                        </NavLink>
                    </Grid> */}
                </Grid>
            </Box>
        </>
    )
}

export default NavBarForMob;