import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@mui/material'

const MenuImgCard = ({ data }) => {
    return (
        <>
            <a href={`#${data.name}`}>
                <Paper>
                    <Card
                        sx={{
                            position: 'relative',
                            boxShadow: '1px 1px 3px rgba(255, 255, 255, 0.5), -1px -1px 3px rgba(255, 255, 255, 0.5)',
                            transition: 'all 0.2s ease-in',
                            '&:hover': {
                                transform: 'scale(1.02)',
                                transition: 'all 0.2s ease-in'
                            }
                        }}
                    >
                        <CardActionArea>
                            {/* https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
                            <Box className='menuimg'>
                                <CardMedia
                                    component={'img'}
                                    height={165}
                                    image={`${data.url}`}
                                    alt="Food Img"
                                />
                            </Box>
                            <CardContent sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <Typography variant='h4' fontWeight={600} color={'gold'}>{data.name}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Paper>
            </a>
        </>
    )
}

export default MenuImgCard;