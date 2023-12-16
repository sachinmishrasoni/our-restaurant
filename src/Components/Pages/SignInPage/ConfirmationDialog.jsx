import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, Stack, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const SuccessFullDialog = ({isUserLogIn}) => {
    console.log('Successful');
    const [confDiaSuccOpen, setConfDialSuccOpen] = useState(true);
    const confirmHandl = () => {
        setConfDialSuccOpen(false);
        isUserLogIn(true)
    }
    return (
        <>
            <Dialog
                open={confDiaSuccOpen}
                sx={{ '& .MuiPaper-root': { backgroundColor: '#100F0F' }, '& .MuiBackdrop-root':{backdropFilter:'blur(10px)'} }}
            >
                <DialogContent>
                    <Box>
                        <Stack alignItems={'center'}>
                            <Box component={'div'} sx={{
                                width: '50px',
                                height: '50px',
                                border: '3px solid #72D82D',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <DoneIcon sx={{ color: '#72D82D', fontSize: '2.5rem', }} />
                            </Box>
                        </Stack>
                        <Box my={1}>
                            <Typography variant='h6' sx={{ color: '#72D82D', fontWeight: '600', textAlign: 'center' }} >Welcome to Our Resturent</Typography>
                            <Typography sx={{ color: '#72D82D', fontWeight: '600', textAlign: 'center' }} >Log In Successfully</Typography>
                        </Box>

                        <Stack direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
                            <Button variant='contained' fullWidth sx={{ borderRadius: '50px' }} onClick={confirmHandl}>Ok</Button>
                        </Stack>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SuccessFullDialog