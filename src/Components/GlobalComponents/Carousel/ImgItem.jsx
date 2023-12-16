import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'

const ImgItem = (props) => {
    return (
        <>
            <Paper>
                <Box
                    component={'div'}
                    sx={{
                        height: { xs: '250px', sm: '300px', md: '400px', lg: '500px' },
                        backgroundImage: `url(${props.data.url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom'
                    }}>
                    {/* Image Box */}
                    {props.data.id === 1 | 2 | 3 | 4 | 5
                        ? <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right', padding: '15px' }}>
                            <Box
                                component={'div'}
                                className='car-ord-box'
                                sx={{
                                    textAlign: 'right',
                                    padding: { xs: '15px 8px', sm: '15px', md: '25px' },
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    "&:hover": {
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        cursor: 'pointer'
                                    }

                                }}>
                                <Typography component={'h2'} fontWeight={'bold'} color={'white'} sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' }, '&.MuiTypography-h2':{fontWeight:'bold'}}}>Our Resturant</Typography>
                                <Typography color={'white'} sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h4'} }}>Best Food In India</Typography>
                                <Button variant='contained' size='samll' >Order Now</Button>
                            </Box>
                        </Box>
                        : null}
                </Box>
            </Paper>
        </>
    )
}

export default ImgItem