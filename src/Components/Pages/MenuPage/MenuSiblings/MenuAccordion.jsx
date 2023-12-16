import React, { forwardRef, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MultiCarouCompo from '../../../GlobalComponents/Carousel/MultiCarouCompo';
import { useNavigate } from 'react-router-dom';


const MenuAccordion = (props, ref) => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(props.VegItem.dishname)
    const AccorHandler = (panel) => (e, newEx) => {
        console.log(panel, newEx)
        setExpanded(newEx ? panel : false)
    }

    const handlerViewProcut = (productname) => {
        let val = productname
        navigate(`/menu/${val}`)
    }
    return (
        <>
            <Accordion
                id={`${props.VegItem.dishname}`}
                expanded={expanded === props.VegItem.dishname}
                onChange={AccorHandler(props.VegItem.dishname)}
                ref={ref}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant='body1' fontWeight={600}>{props.VegItem.dishname} ({props.VegItem.varieties.length} Items)</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={{ padding: '0px' }}>
                    <Box>
                        {/* <MultiCarouselCont/> */}
                        {/* {props.compo} */}
                        {/* {props.VegItem.map((item, index) => <MultiCarouCompo key={index} data={item}/>)} */}
                        <MultiCarouCompo data={props.VegItem} />
                    </Box>
                    <Divider />
                    {/* View all button */}
                    <Stack component={'div'} ><Button fullWidth variant='outlined' sx={{ mx: 'auto' }} onClick={() => handlerViewProcut(props.VegItem.dishname)}>View All</Button></Stack>
                </AccordionDetails>
            </Accordion>
        </>
    )
}


export default forwardRef(MenuAccordion);