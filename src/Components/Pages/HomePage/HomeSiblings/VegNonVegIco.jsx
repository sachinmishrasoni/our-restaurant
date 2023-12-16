import { Box, Icon } from '@mui/material'
import React from 'react'

const VegNonVegIco = (props) => {
    return (
        <>
            <Icon>
                <Box sx={{ width: '25px', height: '25px', border: `3px solid ${props.bdCol}`, borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '15px', height: '15px', backgroundColor: `${props.bgCol}`, borderRadius: '100%' }}></Box>
                </Box>
            </Icon>
        </>
    )
}

export default VegNonVegIco