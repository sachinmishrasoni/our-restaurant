import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const EmptyCartBox = ({emtycrtdata}) => {
    return (
        <>
            <Box sx={{
                height: 'calc(100vh - 56px - 72px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {/* img copmonet */}
                <Box
                    component={'img'}
                    src={`${emtycrtdata.img}`}
                    height={{ xs: 150, sm: 150, md: 200, lg: 250 }}
                    sx={{
                        '@media (max-width: 300px)': {
                            height: '100px'
                        }
                    }}
                />
                <Typography variant='body2' textAlign={'center'}>{emtycrtdata.suggtext}</Typography>
                <Button>{emtycrtdata.btntext}</Button>
            </Box>
        </>
    )
}

export default EmptyCartBox