import React from 'react'
import { Stack, Typography } from '@mui/material'

const MyCardSelectMenuItem = (props) => {
    return (
        <>
            <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
                <Stack>
                    <Typography variant='body2'>{props.menuList.size}</Typography>
                    <Typography variant='caption' color={'slategray'}>{props.menuList.serve}</Typography>
                </Stack>
                <Stack justifyContent={'center'}>
                    <Typography variant='caption' color={'green'}>${props.menuList.price}</Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default MyCardSelectMenuItem;