import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'

const CategCard = () => {
    return (
        <>
            <Stack justifyContent={'center'} alignItems={'center'}>
                <Avatar alt='Image' src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg' sx={{ width: {xs:75, sm:100,}, height: {xs:75, sm:100,} }}/>
                <Typography sx={{marginTop:'5px'}}>Pizza</Typography>
            </Stack>
        </>
    )
}

export default CategCard