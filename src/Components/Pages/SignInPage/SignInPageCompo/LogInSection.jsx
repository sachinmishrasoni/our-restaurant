import React from 'react'
import { Alert, Box, Button, Checkbox, Grid, InputAdornment, Link, Paper, Snackbar, Stack, TextField, Typography, styled } from '@mui/material'
import { useState } from 'react';
import DiscountIcon from '@mui/icons-material/Discount';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import SwiperCompo from '../../../GlobalComponents/SwiperCompo';

// Feature Grid Items Small Card
const FeatureGridItem = ({data}) => {
    // const { text1, text2 } = props.featdata;
    return (
        <>
            <Grid item 
            // xs={6} sm={3}
            >
                <Paper sx={{ minWidth:'100%', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <data.icon sx={{ fontSize: '2rem' }} />
                    <Box>
                        <Typography variant='body2' textAlign={'center'}>{data.text1}</Typography>
                        <Typography variant='body2' textAlign={'center'}>{data.text2}</Typography>
                    </Box>
                </Paper>
            </Grid>
        </>
    );
}

// Custom Text Feild Style
const CustomTextFeild = styled(TextField)({
    '& .MuiInputLabel-root': {
        color: 'goldenrod'
    },
    '& label.Mui-focused': {
        color: 'skyblue',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'skyblue',
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
        '& fieldset': {
            borderColor: 'goldenrod',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'skyblue',
        },
    },
});

// For Check name or mobile regX
let namepattern = /^[a-zA-Z]{2,15}$/
let mobilepattern = /^[6-9][0-9]{9}$/;

const LogInSection = ({ activediv, generateOtp }) => {
    const [snackBarOpen, setSnackBarOpen] = useState(false);  //Snack Bar Open Close State
    const [divActive, setDivActive] = useState(false);  // for Div Display none or block

    // New Feature Cart Array
    const newFtCrdArr = [
        { text1: "Special", text2: "Offers", icon: DiscountIcon },
        { text1: "Special", text2: "Offers", icon: DiscountIcon },
        { text1: "Special", text2: "Offers", icon: DiscountIcon },
        { text1: "Special", text2: "Offers", icon: DiscountIcon }
    ];
    // Swiper Breakpoints
    const breakpoints = {
        0: {
            spaceBetween: 5,
            slidesPerView: 2
        },
        400: {
            spaceBetween: 5,
            slidesPerView: 3
        },
        700: {
            spaceBetween: 5,
            slidesPerView: 4
        },
        1000: {
            spaceBetween: 5,
            slidesPerView: 4
        },
    }

    // User Input Data from Log In form 
    const [userData, setUserData] = useState({
        userFirstName: '',
        userLastName: '',
        userNumber: ''
    });
    // Throught error if user wrong input
    const [showError, setShowError] = useState({
        userFNameError: false,
        userLNameError: false,
        userMobError: false
    });
    // This is use for if all field are true then redirect to otp section
    const [checkCondi, setCheckCondi] = useState({
        fName: false,
        lName: false,
        mob: false
    })

    // user Input Handler
    const userInputHandl = (e) => {
        const { name, value } = e.target;
        if (name === 'userFirstName') {
            if (namepattern.test(value)) {
                // setUserData((preVal) => {
                //     return ({...preVal,[name]: value,})
                // });
                setUserData({ ...userData, [name]: value })
                setShowError({ ...showError, userFNameError: false })
                setCheckCondi({ ...checkCondi, fName: true })
            } else {
                setUserData({ ...userData, [name]: value })
                setShowError({ ...showError, userFNameError: true })
                setCheckCondi({ ...checkCondi, fName: false })
            }
        }
        else if (name === 'userLastName') {
            if (namepattern.test(value)) {
                setUserData({ ...userData, [name]: value })
                setShowError({ ...showError, userLNameError: false })
                setCheckCondi({ ...checkCondi, lName: true })
            } else {
                setUserData({ ...userData, [name]: value })
                setShowError({ ...showError, userLNameError: true })
                setCheckCondi({ ...checkCondi, lName: false })
            }
        }
        else {
            if (mobilepattern.test(value)) {
                setUserData({ ...userData, [name]: value })
                setShowError({ ...showError, userMobError: false })
                setCheckCondi({ ...checkCondi, mob: true })
            } else {
                setUserData({ ...userData, [name]: value })
                setShowError({ ...showError, userMobError: true })
                setCheckCondi({ ...checkCondi, mob: false })
            }
        }
    }

    // Continue Button
    const continueBtn = () => {
        if (checkCondi.fName === true && checkCondi.lName === true && checkCondi.mob === true) {
            console.log(userData)
            setDivActive(true)
            // OTP
            generateOtp()
            activediv('otpSection', userData)

        } else {
            setSnackBarOpen(true)
            setShowError({ ...showError, userFNameError: true, userLNameError: true, userMobError: true })
        }
    }

    // for snackbar or alert
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };

    return (
        <>
            {/* Dialog Log-in Div Wraper */}
            <Box component={'div'} className='dialog-logIn-wraper' sx={{ display: divActive && 'none' }}>

                {/* new feature card */}
                <Paper sx={{ backgroundColor: "rgba(39, 55, 77, 0.5)", color: 'white', padding: '5px 10px', marginTop: '10px' }}>
                    <Typography sx={{ typography: { xs: 'body2', sm: 'body1' } }} color={'white'}><Typography component={'span'} color={'goldenrod'} fontWeight={600}>LogIn</Typography> to awsome new features.:</Typography>

                    <Grid container >
                        {/* {newFtCrdArr.map((ite, ind) => <FeatureGridItem key={ind} featdata={ite} />)} */}
                        <SwiperCompo ComponentData={newFtCrdArr} Component={FeatureGridItem} freeModeBool={true} loopBool={true} swiperBreakpoints={breakpoints}/>
                    </Grid>
                </Paper>

                {/* login section */}
                <Paper sx={{ backgroundColor: "rgba(39, 55, 77, 0.5)", color: 'white', padding: '5px 10px', marginTop: '10px' }}>
                    <Typography variant='body2' mb={1}>LogIn with Number :</Typography>
                    <form>
                        <Box>
                            {/*User Name Input */}
                            <Stack direction={'row'} spacing={1} mb={2}>
                                <CustomTextFeild
                                    name='userFirstName'
                                    label='First Name'
                                    required
                                    size='small'
                                    autoComplete='nope'
                                    error={showError.userFNameError}
                                    helperText={showError.userFNameError ? 'Invalid First Name' : null}
                                    onChange={userInputHandl}
                                    value={userData.userFirstName}
                                />
                                <CustomTextFeild
                                    name='userLastName'
                                    label='Last Name'
                                    required
                                    size='small'
                                    autoComplete='nope'
                                    error={showError.userLNameError}
                                    helperText={showError.userLNameError ? 'Invalid Last Name' : null}
                                    onChange={userInputHandl}
                                    value={userData.userLastName}
                                />
                            </Stack>

                            {/*User Number Input */}
                            <CustomTextFeild
                                name='userNumber'
                                label="Mobile Number"
                                value={userData.userNumber}
                                error={showError.userMobError}
                                helperText={showError.userMobError ? 'Invalid Number' : null}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneAndroidIcon sx={{ color: 'goldenrod' }} />
                                            <Typography color={'white'}>+91 -</Typography>
                                        </InputAdornment>
                                    ),
                                }}
                                inputProps={{ maxLength: 10 }}
                                required
                                fullWidth
                                autoComplete='nope'
                                onChange={userInputHandl}

                            />
                        </Box>

                        <Stack>
                            <Typography variant='caption' mt={0} textAlign={'right'}>
                                <Checkbox size='small' sx={{ '&.MuiCheckbox-root': { color: '#1976d2', padding: '3px' } }} />
                                <Link href='#123456' sx={{ color: "white" }} onClick={() => console.log()}>Terms and Conditons</Link>
                            </Typography>

                            <Button variant='contained' sx={{ borderRadius: '50px' }} onClick={continueBtn}>Continue...</Button>
                        </Stack>
                    </form>
                </Paper>
                {/* other login section */}
                <Paper sx={{ backgroundColor: "rgba(39, 55, 77, 0.5)", color: 'white', padding: '5px 10px', marginTop: '10px' }}>
                    <Typography variant='body2' fontWeight={500}>LogIn with Social Accounts :</Typography>
                    <Grid container spacing={1} sx={{ '@media(max-width: 300px)': { flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }}>
                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', '@media(max-width: 300px)': { justifyContent: 'center' } }}>
                            <Paper sx={{ backgroundColor: '#009FBD', color: 'white', width: '125px', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3px', '@media(max-width: 300px)': { flexShrink: '0' } }}>
                                <FacebookIcon />
                                <Typography>Facebook</Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start', '@media(max-width: 300px)': { justifyContent: 'center' } }}>
                            <Paper sx={{ backgroundColor: '#F45050', color: 'white', width: '125px', padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3px', '@media(max-width: 300px)': { flexShrink: '0' } }}>
                                <GoogleIcon />
                                <Typography>Google</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Alert Box wit Sneak bar*/}
                <Snackbar
                    open={snackBarOpen}
                    onClose={handleClose}
                    autoHideDuration={3000}
                >
                    <Alert severity="error" onClose={handleClose} sx={{ width: '100%' }}>Please! Enter Valid Details.</Alert>
                </Snackbar>
            </Box>
        </>
    )
}

export default LogInSection