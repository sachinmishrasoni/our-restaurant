import React, { useState } from 'react'
import { Alert, Button, Snackbar } from '@mui/material';
import { useEffect } from 'react';

const SnackBarMiddle = ({ notiOpn, hideDuration, severity, message, vert = 'top', hori = 'center', name, anChorEle }) => {

    const [succSnack, setSuccSnack] = useState({
        open: false,
        vertical: vert,
        horizontal: hori
    });
    const { vertical, horizontal, open } = succSnack;

    let SnaccOpenHandle = () => {
        setSuccSnack({ ...succSnack, open: true })
    }

    const SnacCloseHandl = () => {
        setSuccSnack({ ...succSnack, open: false })
    }

    useEffect(() => {
        // let v = name(SnaccOpenHandle)
        console.log("UseEffect")
    }, [anChorEle])

    console.log(notiOpn, open, "Notification")
    return (
        <>
            <Snackbar
                open={open}
                onClose={SnacCloseHandl}
                autoHideDuration={hideDuration}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
                sx={{
                    '&.MuiSnackbar-root': {
                        // top: '5px'
                    }
                }}
            >
                <Alert 
                    severity={severity}
                    sx={{
                        '&.MuiAlert-standardSuccess': {
                            padding: '5px 10px'
                        },
                        '.MuiAlert-icon': {
                            fontSize: '18px',
                            marginRight: '5px',
                            padding: '3px 0'
                        },
                        '.MuiAlert-message': {
                            fontSize: '0.8rem',
                            padding: '3px 0'
                        }
                    }}

                >
                    {message}
                </Alert>
            </Snackbar>
            <Button onClick={SnaccOpenHandle}>click me</Button>

        </>
    )
}

export default SnackBarMiddle;