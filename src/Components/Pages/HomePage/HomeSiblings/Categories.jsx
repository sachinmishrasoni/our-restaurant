import React, { useState } from 'react'
import { Box, } from '@mui/material'
import CategCard from './CategCard';
import MenuTabs from './MenuTabs';
import SwiperCompo from '../../../GlobalComponents/SwiperCompo';

const Categories = () => {
    const [value, setValue] = useState(0);
    const tabHandler = (e, val) => {
        setValue(val)
    }
    const categecardData = [
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
        {
            id: 0,
            name: 'Pizza'
        },
    ]

    // Breakpoints for Swiper
    const breakpoints = {
        0: {
            spaceBetween: 10,
            slidesPerView: 2
        },
        300: {
            spaceBetween: 20,
            slidesPerView: 3
        },
        600: {
            spaceBetween: 10,
            slidesPerView: 5
        },
        900: {
            spaceBetween: 10,
            slidesPerView: 7
        },
        1200: {
            spaceBetween: 10,
            slidesPerView: 8
        }
    }

    //For Tab Panel
    function TabPanel(props) {
        const { children, value, index } = props;
        return (
            <>
                {
                    value === index && (
                        <Box sx={{ color: 'white' }}>{children}</Box>
                    )
                }
            </>
        );
    }

    return (
        <>
            <Box>
                {/* Tab */}
                <MenuTabs val={value} func={tabHandler} />
                {/* Vegetarian tabpanel */}
                <TabPanel value={value} index={0} className='Veg-Tab-Panel'>
                    <Box className='Swiper-Outer-Container'>
                        <SwiperCompo ComponentData={categecardData} Component={CategCard} swiperBreakpoints={breakpoints} freeModeBool={true} loopBool={true} />
                    </Box>
                </TabPanel>
                {/*Non-Vegetarian tabpanel */}
                <TabPanel value={value} index={1}>
                    <Box className='Swiper-Outer-Container'>
                        <SwiperCompo ComponentData={categecardData} Component={CategCard} swiperBreakpoints={breakpoints} freeModeBool={true} loopBool={true} />
                    </Box>
                </TabPanel>
            </Box>
        </>
    )
}

export default Categories