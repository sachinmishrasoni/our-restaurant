import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MyCard from '../../Pages/HomePage/HomeSiblings/MyCard'

const MultiCarouCompo = ({data, data1}) => {
  // console.log(data)
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 4
        },
        smdesk: {
          breakpoint: { max: 1200, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 865 },
          items: 3
        },
        smtablet: {
          breakpoint: { max: 865, min: 600 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 464 },
          items: 1
        },
        smmobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      return (
        <>
          <Carousel
            className='multi-carousel'
            responsive={responsive}
          >
            {data.varieties.map((item, index) => <MyCard key={index} data={item}/>)}
          </Carousel>
        </>
      )
    }

export default MultiCarouCompo