import React from 'react'
import Layout from '../LayoutWraper/Layout'
import { Box, Container } from '@mui/material'
import Carou from '../../GlobalComponents/Carousel/Carou'
import MultiCarouselCont from '../../GlobalComponents/Carousel/MultiCarouselCont'
import Heading from './HomeSiblings/Heading'
import Categories from './HomeSiblings/Categories'
import VegItem from '../../../Data/VegItem.json'

const Home = () => {
  // Random Items Create 
  // first argument is passing array for random items like given below:
  // randomitem = ['Farmhouse Pizza', 'Veggie Paradise Pizza', 'Pizza Burger Bowel', 'Whole Wheat Vegetable', 'Vegetable Burger'];
  // second argument is passing actual arrar for searching
  function randomItemsCreate(randomitem, arr) {
    let randomItemArr = [];
    randomitem.map((randomSingleItem) => arr.map((items) => items.varieties.filter((findItems) => findItems.name === randomSingleItem && (randomItemArr.push(findItems)))));
    return randomItemArr;
  }
  // Most Popular
  const randomitem = ['Farmhouse Pizza', 'Veggie Paradise Pizza', 'Pizza Burger Bowel', 'Whole Wheat Vegetable', 'Vegetable Burger'];
  const mostpopularitem = randomItemsCreate(randomitem, VegItem);

  // Recommended
  const randomitem_recomm = ['Double Cheese Margherita Pizza', 'Nutritious Burger', 'Chawli Beans and Mint', 'Mexican Green Wave Pizza', 'Whole Wheat Vegetable', 'Farmhouse Pizza'];
  const recommendeditem = randomItemsCreate(randomitem_recomm, VegItem);

  return (
    <>
      <Layout>
        <Box sx={{backgroundColor:'goldenrod'}}>
          {/* Carousel first part */}
          <Carou />
        <Box sx={{ backgroundColor: 'black', borderRadius:'50px 50px 0 0'}} className='main-container'>
          
          <Container disableGutters>
            {/* Categories Section */}
            <Box className={'categories-sec'}>
              <Heading headingName={"Categories"} />
              <Categories />
            </Box>
            {/* Most Popular Section */}
            <Box className={'mostpopular-sec'} padding={'0 15px'}> 
              <Heading headingName={"Most Popular"} />
              <MultiCarouselCont myItem={mostpopularitem} />
            </Box>

            {/* Recommended Section */}
            <Box className={'recommended-sec'} padding={'0 15px'}>
              <Heading headingName={"Recommended"} />
              <MultiCarouselCont myItem={recommendeditem} />
            </Box>
          </Container>

          {/* <Box sx={{ backgroundColor: 'black', color: 'goldenrod', padding: '5px 15px' }}>
        </Box> */}
        </Box>
        </Box>
      </Layout>
    </>

  )
}

export default Home;