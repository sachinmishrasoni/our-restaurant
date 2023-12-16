import React, { useState } from 'react'
import { Box, Button, Dialog, DialogContent, ListItemIcon, Menu, MenuItem, Stack, Typography } from '@mui/material'
import Logout from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Link, useNavigate } from 'react-router-dom';

const AfterLogInRedirectBox = ({ anchorEl, mySetAnchorEl, isUserLogIn }) => {
    const open = Boolean(anchorEl);
    const [isConfDia, setIsConfDia] = useState(false);
    const navigate = useNavigate();

    const handleMenuClose = () => {
        mySetAnchorEl(false)
    }
    const LogOutHandler = () => {
        setIsConfDia(true)
        mySetAnchorEl(false)
    }
    // Confirm Dialog
    const confirmYesHandl = () => {
        sessionStorage.removeItem('UserData');
        setIsConfDia(false)
        isUserLogIn(false)
        navigate('/');
    }
    const confirmNoHandl = () => {
        setIsConfDia(false)
    }
    return (
        <>
            <Menu
                sx={{ mt: '40px', ml: '10px' }}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={'menuId'}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleMenuClose}
            >
                <Link to={'/myaccount'} style={{textDecoration:'none', color:'rgba(0, 0, 0, 0.87)'}}>
                    <MenuItem sx={{ padding: '5px 15px' }}>
                        <ListItemIcon sx={{ maxWidth: '30px' }}>
                            <PersonIcon fontSize='small' />
                        </ListItemIcon>
                        My Account
                    </MenuItem>
                </Link>
                <MenuItem sx={{ padding: '5px 15px' }} onClick={LogOutHandler}>
                    <ListItemIcon sx={{ maxWidth: '30px' }}>
                        <Logout fontSize='small' />
                    </ListItemIcon>
                    Log Out
                </MenuItem>
            </Menu>

            {/* Confirm Dialog */}
            <Dialog
                open={isConfDia}
                sx={{ '& .MuiPaper-root': { backgroundColor: '#100F0F', backdropFilter: 'blur(20px)' } }}
            >
                <DialogContent>
                    <Box>
                        <Stack alignItems={'center'}>
                            <Box component={'div'} sx={{
                                width: '50px',
                                height: '50px',
                                border: '3px solid #FE0000',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <QuestionMarkIcon sx={{ color: '#FE0000', fontSize: '2.5rem', }} />
                            </Box>
                        </Stack>
                        <Typography sx={{ color: '#FE0000', fontWeight: '600', textAlign: 'center' }} my={1}>Are you sure want to Log Out?</Typography>
                        <Stack direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
                            <Button variant='contained' sx={{ borderRadius: '50px' }} onClick={confirmYesHandl}>Yes</Button>
                            <Button variant='contained' sx={{ borderRadius: '50px' }} onClick={confirmNoHandl}>no</Button>
                        </Stack>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AfterLogInRedirectBox