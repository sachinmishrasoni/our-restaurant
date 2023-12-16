import React, { useEffect, useRef, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CardActionArea, Container, IconButton, Paper, Stack, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MultiCarouselCont from '../../../GlobalComponents/Carousel/MultiCarouselCont';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeedbackComp from '../../MenuPage/MenuSiblings/FeedbackComp';
import { useNavigate } from 'react-router-dom';
import VegItem from '../../../../Data/VegItem.json';

const MyCardDetail = ({ singledata }) => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      },[]);

    let recommendedItem = [];
    const randomitem = ['Farmhouse Pizza', 'Veggie Paradise Pizza', 'Pizza Burger Bowel', 'Whole Wheat Vegetable', 'Vegetable Burger'];
    randomitem.map((randomSingleItem) => {
        const recoItm = VegItem.map((items) => items.varieties.filter((findItems) => findItems.name === randomSingleItem && (recommendedItem.push(findItems))))
        return recoItm;
    });

    // Random Items Create 
    // first argument is passing array for random items like given below:
    // randomitem = ['Farmhouse Pizza', 'Veggie Paradise Pizza', 'Pizza Burger Bowel', 'Whole Wheat Vegetable', 'Vegetable Burger'];
    // second argument is passing actual arrar for searching
    function randomItemsCreate(randomitem, arr){
        let randomItemArr = [];
        randomitem.map((randomSingleItem) => arr.map((items) => items.varieties.filter((findItems) => findItems.name === randomSingleItem && (randomItemArr.push(findItems)))));
        return randomItemArr;
    }

    let b = randomItemsCreate(['Farmhouse Pizza', 'Veggie Paradise Pizza', 'Pizza Burger Bowel', 'Whole Wheat Vegetable', 'Vegetable Burger'], VegItem)
    console.log(b)


    const navigate = useNavigate();
    // Accordion Expend true or false
    const [accbool, setAccbool] = useState(false);
    const accRefVal = useRef();
    useEffect(() => {
        document.querySelector('.myCardDetail-Box').addEventListener('click', (e) => {
            if (!accRefVal.current.contains(e.target)) {
                setAccbool(false)
            }
        })
    }, []);

    // CardActionArea data
    const selectSizeItem = [
        { id: 0, size: "Small", serve: "Serve 1", icon: PersonIcon, price: 250 },
        { id: 1, size: "Medium", serve: "Serve 2", icon: PeopleIcon, price: 300 },
        { id: 2, size: "Large", serve: "Serve 3", icon: GroupsIcon, price: 400 },
    ]
    const [selSizeAct, setSelSizeAct] = useState(0);
    function handlerSize(val) {
        setSelSizeAct(val)
    }
    // CardActionArea Compoponent  Select Size card
    const SelSizeCard = (props) => {
        return (
            <>
                <CardActionArea onClick={() => handlerSize(props.data.id)}>
                    <Paper
                        sx={{
                            backgroundColor: 'black',
                            border: '1px solid #1976d2',
                            color: '#1976d2',
                            position: 'relative',
                            transition: 'all 0.3s ease-in',
                            '&.active': { backgroundColor: 'rgba(25, 118, 210, 0.2)', color: 'white', border: '1px solid #16FF00', transition: 'all 0.3s ease-in', }
                        }}
                        className={selSizeAct === props.data.id ? 'active' : ''}  // condition for select
                    >
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={1}>
                            <Box><props.data.icon sx={{ fontSize: { xs: '45px', sm: '55px' } }} /></Box>
                            <Box>
                                <Typography variant='body2'>{props.data.size}</Typography>
                                <Typography variant='caption'>{props.data.serve}</Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </CardActionArea>
            </>
        );
    }

    return (
        <>
            <Box component={'div'} className='myCardDetail-Box active' sx={{ backgroundColor: 'black' }}>
                {/* this is Image show box */}
                <Box
                    className='myCardDetail-img-back'
                    sx={{
                        width: '100%',
                        height: { xs: '175px', sm: '200px', md: '250px', lg: '300px' },
                        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${singledata.url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                   
                    <Container disableGutters id={'mycarddetail-cont'}>
                        <Box
                            className='myCardDetail-img'
                            sx={{
                                width: '100%',
                                height: { xs: '175px', sm: '200px', md: '250px', lg: '300px' },
                                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7)),url(${singledata.url})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative',
                                '&:hover': {
                                    cursor: "pointer",
                                    backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7)),url(${singledata.url})`,

                                }
                            }}
                        >
                            <Box className='facIcon'>
                                <Tooltip title='Favorite' sx={{ position: 'absolute', right: '0px', top: '0px' }}>
                                    <IconButton size='large'>
                                        <FavoriteIcon sx={{ color: 'white' }} fontSize="inherit" />
                                    </IconButton>
                                </Tooltip>
                                {/* Back button */}
                                <Tooltip title='Back' sx={{ position: 'absolute', left: '0px', top: '0px' }}>
                                    <IconButton size='large' onClick={() => navigate(-1)}>
                                        <ArrowBackIcon sx={{ color: 'white' }} fontSize="inherit" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Box sx={{ position: 'absolute', left: '15px', bottom: '5px' }}>
                                <Typography variant='h4' color={'white'} fontWeight={600}>{singledata.name}</Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                {/* Detail */}
                <Container disableGutters>
                    <Paper sx={{ padding: '10px 15px', backgroundColor: 'black', color: 'white' }}>
                        {/* Description */}
                        <Box>
                            {/* Descriptions hide show */}
                            {
                                accbool ? null : <Typography variant='h6' fontWeight={600}>Descriptions :</Typography>
                            }
                            <Accordion id='myCrdDetAcc' expanded={accbool} onChange={() => setAccbool(!accbool)} ref={accRefVal}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ '&.MuiAccordionSummary-root': { minHeight: '25px', } }}
                                >

                                    {
                                        accbool
                                            ?
                                            <Typography variant='h6' fontWeight={600} sx={{ width: '200px', whiteSpace: 'nowrap', overflowX: 'hidden', textOverflow: 'ellipsis', flexShrink: 0, '@media(max-width: 275px)': { width: '125px' } }}>Descriptions</Typography>
                                            :
                                            <Typography variant='caption' sx={{ width: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flexShrink: 0, '@media(max-width: 275px)': { width: '100px' } }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem quas recusandae voluptate eveniet obcaecati eligendi</Typography>
                                    }
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography component={'div'} variant='caption' align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatem quas recusandae voluptate eveniet obcaecati eligendi, quibusdam saepe sapiente ducimus ratione nam dolores tempora iusto veritatis quos rerum iure alias id. Quasi porro voluptates enim tenetur. Sunt dolorum harum saepe voluptates tempora ab exercitationem. Voluptatem voluptatibus cum nisi? Facere, numquam.</Typography>
                                </AccordionDetails>
                            </Accordion>

                        </Box>

                        {/* Price and add Button */}
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={1} sx={{ backgroundColor: 'rgba(218, 165, 32, 0.1)', borderRadius: '5px', padding: '0 5px', '@media(max-width: 300px)': { flexDirection: 'column' } }}>
                            <Box>
                                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Price :</Typography>
                                <Typography variant='h6'>$ {singledata.price}</Typography>
                            </Box>
                            <Box>
                                <Tooltip title='Add to Cart'>
                                    <Button variant='contained'><AddIcon />Add Item</Button>
                                </Tooltip>
                            </Box>
                        </Stack>

                        {/* Select size */}
                        <Stack mt={1}>
                            <Typography variant='h5' sx={{ fontWeight: '600' }}>Select Size :</Typography>
                            <Stack direction={'row'} sx={{ gap: '5px', '@media(max-width : 350px)': { flexDirection: 'column' } }}>
                                {/* Small size card using cardactionarea fetch from array */}
                                {
                                    selectSizeItem.map((selItem, ind) => <SelSizeCard key={ind} data={selItem} />)
                                }
                            </Stack>
                        </Stack>

                        {/* Recommended */}
                        <Box mt={5}>
                            <Typography variant='h5' fontWeight={600} mb={2}>Recommended :</Typography>
                            <MultiCarouselCont myItem={recommendedItem}/>
                        </Box>

                        {/* Feedback */}
                        <FeedbackComp />
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default MyCardDetail