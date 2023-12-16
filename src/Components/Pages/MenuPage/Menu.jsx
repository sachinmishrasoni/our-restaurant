import React, { useState } from 'react'
import Layout from '../LayoutWraper/Layout'
import { Box, } from '@mui/material';
import Heading from '../HomePage/HomeSiblings/Heading';
import MenuImgCard from './MenuSiblings/MenuImgCard';
import MenuTabs from '../HomePage/HomeSiblings/MenuTabs';
import MenuAccordion from './MenuSiblings/MenuAccordion';
import VegItem from '../../../Data/VegItem.json'
import Item from '../../../Data/Item.json';
import SwiperCompo from '../../GlobalComponents/SwiperCompo';


const Menu = () => {
  const [value, setValue] = useState(0);

  // Breakpoints for Swiper Components
  const breakpoints = {
    0: {
      spaceBetween: 15,
      slidesPerView: 1
    },
    400: {
      spaceBetween: 15,
      slidesPerView: 2
    },
    700: {
      spaceBetween: 15,
      slidesPerView: 3
    },
    1000: {
      spaceBetween: 15,
      slidesPerView: 4
    },
  }

  const tabHandler = (e, val) => {
    setValue(val)
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
    <Layout>
      <Box p={1} sx={{ backgroundColor: 'black', minHeight: '90vh' }} className='menu-container'>
        <Heading headingName={'Our Menu'} />
        <SwiperCompo ComponentData={Item} Component={MenuImgCard} swiperBreakpoints={breakpoints} freeModeBool={true} loopBool={true}/>

        {/* Tabs */}
        <Box>
          {/* Veg or Non-Veg Tab Button */}
          <MenuTabs val={value} func={tabHandler} />

          {/*Vegetarian tabpanel */}
          <TabPanel value={value} index={0}>
            {VegItem.map((item, index) => <MenuAccordion key={index} VegItem={item} id={item.dishname} className='samthkdk' />)}
          </TabPanel>
          {/*Non-Vegetarian tabpanel */}
          <TabPanel value={value} index={1}>Non-Veg</TabPanel>
        </Box>

      </Box>
    </Layout>

  )
}
export default Menu;
