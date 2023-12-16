import React from 'react'
import Layout from './LayoutWraper/Layout'
import { Box, Button, Paper } from '@mui/material';
import PageNotFoundImg from '../../Image/pagenotfound.jpg'
import { useNavigate } from 'react-router-dom';

const Pagenotfound = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Box className='pagenotfound' sx={{ height: '92vh', backgroundColor: 'white', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', }} >
        <Paper sx={{ width: { xs: '300px', sm: '350px' }, height: { xs: '175px', sm: '200px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position:'relative' }}>
          {/* <Typography variant='h2' fontWeight={'bold'} lineHeight={'50px'}>404</Typography>
          <Typography variant='h5'>Page Not Found</Typography> */}
          <Box
            component={'img'}
            src={PageNotFoundImg}
            height={200}
            sx={{overflow:'hidden'}}
          />
         
        </Paper>
        <Box mt={2}>
            <Button variant='outlined' size='small' onClick={() => navigate('/')}>Go to Home</Button>
          </Box>
      </Box>
    </Layout>
  )
}
export default Pagenotfound;
