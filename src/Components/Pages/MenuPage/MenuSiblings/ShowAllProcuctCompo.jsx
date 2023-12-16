import React from 'react'
import Layout from '../../LayoutWraper/Layout'
import { Box, Container, Stack, Typography } from '@mui/material';
import Heading from '../../HomePage/HomeSiblings/Heading';
import MyCard from '../../HomePage/HomeSiblings/MyCard';

const ViewAllCompo = ({ showproductdata }) => {
  return (
    <>
      <Layout>
        <Box
          className={'ShowProCompBox'}
          sx={{
            // https://rs-menus-api.roocdn.com/images/fe8405cb-a77a-43b8-8b10-fbba774caeff/image.jpeg
            backgroundImage: `url(${showproductdata[0].url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            zIndex: '1',
            minHeight: '90vh'
          }}
        >
          <Container disableGutters sx={{padding:'0px 10px'}} className='showproduct-cont'>
            <Heading headingName={showproductdata[0].dishname} />
            <Typography variant='h4' color={'white'} mb={3} fontWeight={600}>All {showproductdata[0].dishname} Varients : </Typography>
            <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} gap={5}>
              {
                showproductdata[0].varieties.map((item, ind) => <MyCard key={ind} data={item}  data1={showproductdata[0].dishname}/>)
              }
            </Stack>
          </Container>
        </Box>
      </Layout>
    </>
  )
}

export default ViewAllCompo