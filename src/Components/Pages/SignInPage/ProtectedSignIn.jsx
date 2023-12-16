import React, { useState, useEffect } from 'react';
import UserLogInPage from './UserLogInPage'
import Layout from '../LayoutWraper/Layout';
import { Box, Button, Paper, Typography } from '@mui/material';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

const ProtectedSignIn = ({ UserPage }) => {
    const [isUserLogIn, setIsUserLogIn] = useState(false);
    const [signInDialogOpen, setSignDialogOpen] = useState(false);
    useEffect(() => {
        if (sessionStorage.getItem('UserData') !== null) {
            // console.log("LogIn Done")
            setIsUserLogIn(true)
            setSignDialogOpen(false)
        } else {
            // console.log('Not LogIn')
            setIsUserLogIn(false)
            setSignDialogOpen(true)
        }
    }, [isUserLogIn]);


    const myclosefun = () => {
        setSignDialogOpen(false)
    }

    return (
        <>
            {
                isUserLogIn
                    ? <UserPage />
                    : <UserLogInPage dialogOpen={signInDialogOpen} dialogCloseFunc={myclosefun} isUserLogIn={setIsUserLogIn} />

            }
            {
                isUserLogIn
                    ? null
                    : (
                        <Layout logInDialog={setSignDialogOpen}>
                            <Box sx={{width:'100%', height:'90vh', backgroundColor:'#202124', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Paper component={'span'}  sx={{ backgroundColor:'white', padding:'15px 50px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                    <NoAccountsIcon sx={{fontSize:'5rem'}}/>
                                    <Typography textAlign={'center'}>Your Account is not Created.</Typography>
                                    <Typography textAlign={'center'}>Please! Click to Sign In/ Log In</Typography>
                                    <Button variant='contained' onClick={() =>  setSignDialogOpen(true)}>Click me</Button>
                                </Paper>
                            </Box>
                        </Layout>
                    )

            }
        </>
    )
}

export default ProtectedSignIn;