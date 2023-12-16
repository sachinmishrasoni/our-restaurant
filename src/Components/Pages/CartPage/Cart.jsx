import React, { useState } from 'react';
import Layout from '../LayoutWraper/Layout';
import { AppBar, Tabs, Tab, Box, Container,} from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import emptycartpng from '../../../Image/emptycart.png';
import nofavpng from '../../../Image/noFav.png'
import EmptyCartBox from './CartSiblings/EmptyCartBox';


const Cart = () => {
    const [value, setValue] = useState(0);

    const tabHandler = (e, val) => {
        setValue(val)
    }
    function TabPanel(props) {
        const { children, value, index } = props;
        return (
            <>
                {
                    value === index && (
                        <Box
                            sx={{ minHeight: 'calc(100vh - 56px - 72px)', padding: '20px 10px' }}
                        >{children}</Box>
                    )
                }
            </>
        );
    }
    return (
        <Layout>
            <Box 
            className={'Cart-cont'}
            sx={{
                backgroundColor: '#2C3333',
                color: 'white',
            }}>
                <AppBar
                    className='menu-appbar'
                    component={'div'}
                    position='relative'
                    sx={{
                        backgroundColor: '#2C3333',
                        position:'sticky',
                        top :'0'
                    }}
                    
                >
                    <Tabs
                        value={value}
                        onChange={tabHandler}
                        variant='fullWidth'
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "goldenrod",
                                height: '3px',
                                borderRadius: '15px'
                            }
                        }}
                        sx={{
                            '& .MuiTab-root': {
                                color: 'white',
                                fontWeight: '600',
                                minHeight: '65px',
                                '&:hover': {
                                    color: 'goldenrod'
                                },
                                '&.Mui-selected': {
                                    color: 'goldenrod',
                                    textShadow: '1px 1px 20px white'
                                },
                                '& .MuiIcon-root': {
                                    // margin: '5px'
                                }
                            }
                        }}

                    >
                        <Tab icon={<AddShoppingCartIcon />} label="Cart" />
                        <Tab icon={<FavoriteIcon />} label="Favriote" />
                    </Tabs>
                </AppBar>

                {/* TabPanel define in upper */}
                <TabPanel value={value} index={0}>
                    <Container disableGutters>
                    <EmptyCartBox emtycrtdata={{img : emptycartpng, suggtext : 'OOPs! Your Cart is Empty.', btntext : 'Order Now'}} />
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Container disableGutters>
                        <EmptyCartBox emtycrtdata={{img : nofavpng, suggtext : 'There is no added your Favorite Dish.', btntext : 'Add Favorite'}} />
                        
                    </Container>
                </TabPanel>
            </Box>
        </Layout>
    )
}

export default Cart