import React, { useEffect, useState } from "react";
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Increment and Decrement Button
const IncDecBtn = (props) => {
    const [count, setCount] = useState(1)

    useEffect(()=>{
        const itemData = {...props.addBtnVal, quantity : count}
        console.log(itemData)
    })

    // Increment btn function
    const IncreBtn = () => {
        setCount(count + 1)
    }

    // Decrement btn function
    const DecreBtn = () => {
        if (count >= 1) {
            setCount(count - 1)
            if (count === 1) {
                props.setAddBtnVal({...props.addBtnVal, boolVal : false})
            }

        }
    }

    return (
        <>
            <Tooltip title="Add Quantity">
                <Box component={'div'} sx={{border:'2px solid skyblue', borderRadius:'5px', width:'112.6px', height:'31.6px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <IconButton size='small' color="primary" onClick={DecreBtn}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography variant='h6' component={'span'} sx={{ padding: '0 2px' }} id="countVal">{count}</Typography>
                    <IconButton size='small' color="primary" onClick={IncreBtn}>
                        <AddIcon />
                    </IconButton>
                </Box>
            </Tooltip>

        </>
    );
}

export default IncDecBtn;