import React from 'react'
import { Tab, Tabs } from '@mui/material'
import VegNonVegIco from './VegNonVegIco'

const MenuTabs = (props) => {
    return (
        <>
            <Tabs
                variant='fullWidth'
                value={props.val}
                onChange={props.func}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "goldenrod",
                        height:'3px',
                    }
                }}
                sx={{
                    '& .MuiTab-root': {
                        color: 'white',
                        fontWeight: '600',
                        '&:hover': {
                            color: 'goldenrod'
                        },
                        '&.Mui-selected': {
                            color: 'goldenrod',
                            textShadow: '1px 1px 20px white'
                        },
                        '& .MuiIcon-root': {
                            margin: '5px'
                        }
                    }
                }}

            >
                <Tab icon={<VegNonVegIco bdCol='green' bgCol='green' />} label="Vegetarian" />
                <Tab icon={<VegNonVegIco bdCol='red' bgCol='red' />} label="Non-Vegetarian" />
            </Tabs>
        </>
    )
}

export default MenuTabs