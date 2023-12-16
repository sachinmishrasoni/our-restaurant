import React, { useState } from 'react'
import { Box, Dialog, Divider, IconButton, Slide,  Tooltip, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CloseIcon from '@mui/icons-material/Close';
import { forwardRef } from 'react';
import LogInSection from './SignInPageCompo/LogInSection';
import OtpSection from './SignInPageCompo/OtpSection';
import ConfirmationDialog from '../SignInPage/ConfirmationDialog'


// For Dialog Transition 
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const SignInPage = ({ dialogOpen, dialogCloseFunc, isUserLogIn }) => {
    const [userData, setUserData] = useState(null);
    const [activeDiv, setActiveDiv] = useState('logInSection');
    const [systemdOtp, setSystemOtp] = useState(null);
    function checkactivediv(val, userData) {
        console.log(val)
        setActiveDiv(val)
        setUserData(userData)
    }

    // OTP Generate
    function otpGenerate() {
        // Math.floor(Math.random() * (max - min + 1) + min)    // formula
        let otpValue = Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
        setSystemOtp(otpValue);
        return otpValue;

    }


    return (
        <>
            <Dialog
                className='dialog-box'
                open={dialogOpen}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    backdropFilter: 'blur(10px)',
                    '& .MuiDialog-paper': {
                        minWidth: { xs: 'auto', sm: '375px', md: '400px' },
                        maxWidth:'500px',
                        backgroundColor: 'rgba(25, 25, 25, 1)',
                        margin: '15px'
                    },
                }}


            >
                <Box sx={{ color: 'white', padding: '15px 20px' }}>
                    {/* Header */}
                    <Box component={'div'} className='dialog-header'>
                        {/* Heading */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '0px 0 10px 0' }}>
                            <Typography variant='h5' fontWeight={'bold'} position={'relative'} component={'span'} color={'white '} >
                                <FastfoodIcon sx={{ fontSize: '1.8rem', color: 'goldenrod' }} />
                                Our <Box component={'span'} id='Dia-res-compo'><span style={{ fontSize: '1.8rem', color: 'goldenrod' }}>R</span>estaurant</Box>
                            </Typography>
                        </Box>
                        {/* Close btn */}
                        <Box sx={{ position: 'absolute', right: '0px', top: '0px' }}>
                            <Tooltip title='Close'>
                                {/* pass close btn to header.jsx */}
                                <IconButton sx={{ color: 'white' }} onClick={() => dialogCloseFunc(false, setActiveDiv('logInSection'))}>
                                    <CloseIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Divider color='goldenrod' />
                    </Box>

                    {
                        activeDiv === 'logInSection'
                            ? <LogInSection activediv={checkactivediv} generateOtp={otpGenerate} isUserLogIn={isUserLogIn} />
                            : activeDiv === 'otpSection'
                                ? <OtpSection checkdiv={checkactivediv} regenOtp={otpGenerate} systemdOtp={systemdOtp} userData={userData} dialogCloseFunc={dialogCloseFunc} isUserLogIn={isUserLogIn} />
                                : <ConfirmationDialog isUserLogIn={isUserLogIn}/>
                    }

                </Box>

            </Dialog>
        </>
    )
}

export default SignInPage