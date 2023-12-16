import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Tooltip, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import IncDecBtn from './IncDecBtn';
import MyCardSelectMenuItem from './MyCardSelectMenuItem';
import { useNavigate } from 'react-router-dom';
import VegItem from '../../../../Data/VegItem.json';

const MyCard = (props) => {
    const navigate = useNavigate();
    const [favico, setFavico] = useState(false);
    const [size, setSize] = useState('Small');

    // for add to cart btn
    const [addbtn, setAddbtn] = useState({
        ...props.data,
        boolVal: false,
        quantity: 1
    });


    const favroitehandl = () => {
        setFavico(!favico)
    }

    const addToCart = () => {
        setAddbtn({ ...addbtn, boolVal: true });
        if (addbtn.boolVal === false) {
            console.log({ ...props.data, ...addbtn })

        }
    }

    const selectMenuItem = [
        {
            size: 'Small',
            serve: 'Serve 1',
            price: 258
        },
        {
            size: 'Medium',
            serve: 'Serve 2',
            price: 300
        },
        {
            size: 'Large',
            serve: 'Serve 3',
            price: 350
        }
    ]

    // Select box function
    function handleChangeForSelect(e) {
        setSize(e.target.value)
    }

    // Check Item Preset or not and retrun there dishname
    function CheckItem(arr, itemname) {
        let find = [];
        arr.map((items) => items.varieties.filter((srhitm) => srhitm.name === itemname && (find.push(items))));
        let finddishname = find.map((dish) => dish.dishname);
        return finddishname[0];
    }

    // mycarddetailhandler
    const mycarddetailhandler = (data) => {
        let pk = CheckItem(VegItem, data.name)
        navigate(`/menu/${pk}/${data.name}`)
        // console.log(data)
    }
    return (
        <>
            <Card className='mycard' sx={{ maxWidth: '270px', overflow: 'hidden', borderRadius: '10px', margin: '0', display: 'inline-block' }}>
                <Box sx={{ position: 'relative' }} className='card-media-box'>
                    <CardActionArea onClick={() => mycarddetailhandler(props.data)}>
                        <Box className='card-img'>
                            <CardMedia
                                component={'img'}
                                alt='image'
                                height={'175px'}
                                image={props.data.url}
                            />
                        </Box>
                    </CardActionArea>
                    <Box sx={{ position: 'absolute', right: '0px', top: '0px', zIndex: '1' }} className='crdMd-facico'>
                        <Tooltip title='Add to Favourite'>
                            <IconButton onClick={favroitehandl} size='large'>
                                {/* <FavoriteBorderIcon /> */}
                                {favico ? <FavoriteIcon sx={{ color: 'red' }} fontSize="inherit" /> : <FavoriteBorderIcon sx={{ color: 'white' }} fontSize="inherit" />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: '5px', left: '10px', zIndex: '1' }}>
                        <Typography variant='h6' color={'white'} fontWeight={600}>${props.data.price}</Typography>
                    </Box>
                </Box>

                <CardContent sx={{ padding: '10px', }}>
                    <Typography variant='h5' sx={{ fontWeight: '600', width: '100%', whiteSpace: 'nowrap', overflowX: 'hidden', textOverflow: 'ellipsis', }}>{props.data.name}</Typography>
                    <Typography variant='caption' sx={{ wordBreak: 'break-all' }} component={'div'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    <Divider sx={{ mt: '3px' }} />

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems='flex-end'
                    >
                        {/* Select box */}
                        <Box>
                            <FormControl variant="standard" size="small" sx={{ m: 1, minWidth: 120, margin: '0' }}>
                                <InputLabel id="sizeSelect">Size</InputLabel>
                                <Select
                                    labelId="sizeSelect"
                                    id="demo-simple-select-standard"
                                    value={size}
                                    onChange={handleChangeForSelect}
                                    label="Age"
                                    size='small'
                                    renderValue={(value) => `${value}`}
                                    sx={{fontSize:'15px'}}
                                >
                                    {/* Add MenuItem */}
                                    {
                                        selectMenuItem.map((item, index) => <MenuItem key={index} value={item.size} sx={{ padding: '3px 7px' }} ><MyCardSelectMenuItem menuList={item} /></MenuItem>)
                                    }
                                </Select>
                                {/* <FormHelperText>Without label</FormHelperText> */}
                            </FormControl>
                        </Box>

                        {/* Button Add to Cart */}
                        <Box className='btnbox'>
                            {addbtn.boolVal ? <IncDecBtn addBtnVal={addbtn} setAddBtnVal={setAddbtn} /> : <Tooltip title='Add to Cart'><Button onClick={addToCart} variant="outlined" size='small'><AddIcon />Add Cart</Button></Tooltip>}
                        </Box>
                    </Stack>
                </CardContent>
                <p></p>
            </Card>
        </>
    )
}

export default MyCard;