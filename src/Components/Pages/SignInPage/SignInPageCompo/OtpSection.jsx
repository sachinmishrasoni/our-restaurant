import React, { useState, useRef, useEffect } from 'react'
import { Box, Button, Link, Stack, TextField, Typography, styled } from '@mui/material';
import AppNotification from '../../../GlobalComponents/AppNotification';
import useTimerFunc from '../../../CustomHook/useTimerFunc';

// OTP Custom Text feild style
const OtpTextFeild = styled(TextField)({
    '& .MuiOutlinedInput-input': {
        width: '35px',
        height: '35px',
        padding: '5px',
        fontSize: '1.7rem',
        fontWeight: 'bold',
        textAlign: 'center'
    },
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
let currentOptIndex = 0;

const OtpSection = ({ checkdiv, systemdOtp, regenOtp, userData, dialogCloseFunc, isUserLogIn }) => {

    const otpPattern = /^[0-9\s]*$/;    // number with space
    const otpboxitr = [0, 1, 2, 3, 4, 5];
    const otpinputref = useRef(null);
    const [userOtp, setUserOtp] = useState(new Array(6).fill(''));
    const [activeOtpIndex, setActiveOtpIndex] = useState(0);
    const [otpError, setOtpError] = useState(false);
    const SuccessNotiRef = useRef();
    const RegenOtpRef = useRef();
    const { secondsLeft, minutesLeft, startCountDown, countDownBool } = useTimerFunc();  //for CountDown

    useEffect(() => {
        otpinputref.current?.focus()
    }, [userOtp])

    const onchangeOtpInputBox = (e) => {
        const newOtp = [...userOtp];
        if (otpPattern.test(e.target.value)) {
            newOtp[currentOptIndex] = e.target.value;
            setUserOtp(newOtp);
            if (!e.target.value) {
                setActiveOtpIndex(currentOptIndex - 1)
            } else {
                setActiveOtpIndex(currentOptIndex + 1)
            }
        } else {
            console.log('Otp error only digits acceptable')
        }


    }
    const handlOnKeyDownOtpBox = (e, index) => {
        currentOptIndex = index
        if (e.key === 'Backspace') {
            setActiveOtpIndex(currentOptIndex - 1)
        }
    }


    // Verify Button
    const verifyOtpBtn = () => {
        if (systemdOtp === Number(userOtp.join(''))) {
            checkdiv('confirmDialog')
            sessionStorage.setItem('UserData', JSON.stringify(userData))
            dialogCloseFunc(false)
            // isUserLogIn(true)
        } else {
            console.log('Oops! OTP not Match')
            setOtpError(true)
        }

    }

    // Resend Otp 
    const resendOtp = () => {
        console.log(regenOtp())
        RegenOtpRef.current.openNotification()
        SuccessNotiRef.current.openNotification()
        userOtp.map((itm, ind) => userOtp[ind] = '')    // Empty all Otp boxes
        setOtpError(false)
        startCountDown(30, true)     //CountDown Custom Hook Call
        // setResendActive(true)
    }


    return (
        <>
            <Box component={'div'} className='dialog-otp-wraper' mt={1} >   {/* sx={{ display: otpBoxActive ? 'block' : 'none' }} */}
                <form>
                    <Typography variant='h5' textAlign={'center'} sx={{ fontVariant: 'small-caps' }}>Otp Varification</Typography>
                    <Typography variant='caption' textAlign={'center'} component={'div'}>
                        Enter OTP Sent to your mobile number <br />
                        <span>XXXXXX{userData.userNumber.slice(6)}</span>
                    </Typography>
                    <Stack direction={'row'} spacing={1} justifyContent={'center'} mt={1}>
                        {
                            otpboxitr.map((itm, index) =>
                                <OtpTextFeild
                                    key={index}
                                    value={userOtp[index]}
                                    inputRef={index === activeOtpIndex ? otpinputref : null}
                                    inputProps={{ maxLength: 1 }}
                                    onChange={onchangeOtpInputBox}
                                    onKeyDown={(e) => handlOnKeyDownOtpBox(e, index)}
                                    autoComplete='nope'
                                />)
                        }
                    </Stack>
                    <Box mt={0.5} display={otpError ? 'block' : 'none'}>
                        <Typography component={'div'} sx={{ color: '#FE0000', fontWeight: '600' }} textAlign={'center'}>Invalid OTP</Typography>
                    </Box>

                    {/* Resend Otp btn */}
                    <Stack mt={0.5} px={0.3} direction={'row'} justifyContent={'space-between'} >
                        <Typography variant='body2' display={countDownBool ? 'block' : 'none'}>Time Remaining {minutesLeft <= 9 ? '0' + minutesLeft : minutesLeft}:{secondsLeft <= 9 ? '0' + secondsLeft : secondsLeft}</Typography>
                        <Typography variant='body2' display={countDownBool ? 'none' : 'block'}>Don't received OTP</Typography>
                        <Typography variant='body2' ><Link href='#123' sx={{ textDecoration: 'none', color: 'tomato', pointerEvents: countDownBool ? 'none' : 'visible' }} onClick={resendOtp} >Resend OTP</Link></Typography>
                    </Stack>

                    {/* Verify Button */}
                    <Stack>
                        <Button variant='contained' fullWidth onClick={verifyOtpBtn} disabled={userOtp[5] !== '' ? false : true} sx={{ '&.Mui-disabled': { backgroundColor: '#1976d285', color: 'rgba(255, 255, 255, 0.5)' } }}>Verify</Button>
                    </Stack>
                    <Typography variant='caption' component={'div'} textAlign={'center'} mt={0.5}>This is not a real time application.</Typography>
                </form>

                {/* Notification for OTP */}
                <AppNotification ref={SuccessNotiRef} transition={'down'} hideDuration={3000} severity={"success"} message={'Successfully OTP Generated'} vert='top' hori='center' />

                <AppNotification ref={RegenOtpRef} transition={'up'} hideDuration={36000} severity={"info"} message={`Your OTP : ${systemdOtp}`} vert='bottom' hori='left' closebtn={true} />

            </Box>
        </>
    )
}

export default OtpSection