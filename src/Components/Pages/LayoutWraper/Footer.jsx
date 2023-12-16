import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <>
            <Box component={'footer'} sx={{ width: '100%', backgroundColor: 'black', color: 'white', textAlign: 'center', paddingBottom:'50px' }}>
                <Typography variant='h6'>CopyRight@Sam</Typography>
            </Box>
        </>
    )
}

export default Footer