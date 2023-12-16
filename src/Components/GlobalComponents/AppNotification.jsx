import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { Alert, Slide, Snackbar } from '@mui/material'

function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}

const AppNotification = ({ transition, hideDuration = 3000, severity, message, vert = 'top', hori = 'center', closebtn = false }, ref) => {

    const [notification, setNotification] = useState({
        open: true,
        vertical: vert,
        horizontal: hori
    });
    const { vertical, horizontal, open } = notification;

    useImperativeHandle(ref, () => {
        return ({
            openNotification: () => notificationOpen(),
            closeNotification: () => notificationClose(),
        })
    })

    const notificationOpen = () => {
        setNotification({ ...notification, open: true })
        // console.log("This is app notificaton")
    }

    const notificationClose = () => {
        setNotification({ ...notification, open: false })
    }

    const alertnotifiClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification({ ...notification, open: false })
    }


    return (
        <>
            <Snackbar
                open={open}
                TransitionComponent={transition === 'down' ? TransitionDown : TransitionUp}
                onClose={closebtn ? null : notificationClose}
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
                    onClose={closebtn ? alertnotifiClose : null}
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
                        },
                        '.css-ki1hdl-MuiAlert-action': {
                            padding: '0 0 0 5px'
                        },
                        '.css-ptiqhd-MuiSvgIcon-root': {
                            width:'0.8em',
                            height:'0.8em'
                        }
                    }}

                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default forwardRef(AppNotification);