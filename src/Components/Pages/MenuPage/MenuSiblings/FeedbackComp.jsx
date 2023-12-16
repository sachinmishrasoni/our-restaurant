import React from 'react'
import { Box, Rating, Stack, Typography } from '@mui/material'
import FeedbackCard from './FeedbackCard'
import SwiperCompo from '../../../GlobalComponents/SwiperCompo';

const FeedbackComp = () => {
    const arr = [{ id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 },];
    const breakpoints = {
        0: {
            spaceBetween: 10,
            slidesPerView: 1
        },
        500: {
            spaceBetween: 10,
            slidesPerView: 2
        },
        900: {
            spaceBetween: 10,
            slidesPerView: 3
        },
    }
    return (
        <>
            <Box py={3}>
                <Typography variant='h4'>Feedback</Typography>
                <Stack
                    direction={'row'}
                    sx={{
                        backgroundColor: 'rgba(218, 165, 32, 0.1)',
                        borderRadius: '5px',
                        '&:hover': {
                            backgroundColor: 'rgba(218, 165, 32, 0.2)',
                            cursor: 'pointer'
                        },
                        '@media(max-width:285px)': {
                            flexDirection: 'column'
                        }
                    }}>
                    <Stack flexGrow={1} justifyContent={'center'} alignItems={'center'} p={2}>
                        <Typography>Rating</Typography>
                        <Rating
                            name="simple-controlled"
                            value={4.5}
                            precision={0.5}
                            size='large'
                            readOnly
                            sx={{
                                '& .MuiRating-icon': {
                                    color: 'gold',
                                    '@media(max-width:600px)': {
                                        fontSize: '1.8rem'
                                    },
                                    '@media(max-width:350px)': {
                                        fontSize: '1.5rem'
                                    }
                                }
                            }}
                        />
                    </Stack>
                    <Stack flexGrow={1} justifyContent={'center'} alignItems={'center'} p={1}>
                        <Typography
                            variant='h3'
                            sx={{
                                '@media(max-width:600px)': { fontSize: '2.5rem' },
                                '@media(max-width:350px)': { fontSize: '1.8rem' }
                            }}>4.5</Typography>
                        <Typography sx={{ '@media(max-width:350px)': { fontSize: '0.8rem' } }}>Good</Typography>
                    </Stack>
                </Stack>

                {/* Review Card */}
                <Box mt={3} className='Feedbck-Swiper' position={'relative'}>
                    {/* Swiper for user feedback */}
                    <SwiperCompo ComponentData={arr} Component={FeedbackCard} swiperBreakpoints={breakpoints} freeModeBool={true} loopBool={true} />
                </Box>
            </Box>
        </>
    )
}

export default FeedbackComp