import React from 'react'
import { Avatar, Box, Divider, Paper, Stack, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const FeedbackCard = () => {
    return (
        <>
            <Box>
                <Paper sx={{ padding: '10px', maxWidth: '400px', minheight: '135px', maxHeight: '250px' }}>
                    <Stack direction={'row'} position={'relative'}>
                        <Stack justifyContent={'center'}>
                            <Avatar alt="Sachin Mishra" src="/static/images/avatar/1.jpg" />
                        </Stack>
                        <Stack justifyContent={'center'} position={'relative'} ml={1}>
                            <Typography component={'div'} variant='body1' fontWeight={600} ml={0.5}>Sachin Mishra</Typography>
                            <Typography variant='caption' fontWeight={600} color={'grey'} sx={{ display: 'flex' }} ><LocationOnIcon sx={{ fontSize: '20px' }} />Karol Bagh</Typography>
                        </Stack>
                        <Box component={'span'} sx={{ height: '20px', backgroundColor: 'green', color: 'white', borderRadius: '3px', position: 'absolute', right: '0', top:'3px' }}>
                            <Typography variant='body2' sx={{ display: 'flex', paddingLeft: '3px' }}>4.5<StarIcon sx={{ fontSize: '15px' }} /></Typography>
                        </Box>
                    </Stack>
                    <Divider sx={{ marginTop: '2px' }} />
                    <Box component={'div'} sx={{ overflowY: 'auto' }}>
                        <Typography pt={1} variant='caption' component={'div'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, commodi quas. Facilis doloremque laborum ipsum, obcaecati repudiandae aut molestias sequi?</Typography>
                    </Box>
                </Paper>
            </Box>
        </>
    )
}

export default FeedbackCard