import React from 'react'
import { Box, Container, Typography, } from '@mui/material'

const Heading = ({headingName}) => {
  return (
    <>
        <Box sx={{padding:'30px 15px'}} className="headingName">
            <Container component={'div'}>
                <Typography variant='h4' color={'goldenrod'} textAlign={'center'}>{headingName}</Typography>
            </Container>
        </Box>
    </>
  )
}

export default Heading