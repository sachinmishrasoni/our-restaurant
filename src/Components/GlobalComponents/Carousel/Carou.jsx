import React from 'react';
import Carousel from 'react-material-ui-carousel'
import ImgItem from './ImgItem';

const Carou = () => {

    const data = [
                    {id:1 , title: "Title 3", url : "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},
                    {id:2 , title: "Title 1", url : "https://images.unsplash.com/photo-1628294896516-344152572ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},
                    {id:3 , title: "Title 2", url : "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=745&q=80"},
                    {id:4 , title: "Title 4", url : "https://images.unsplash.com/photo-1569494315581-abddb8d41cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"},
                    {id:5 , title: "Title 5", url : "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80"},
    ];
    return (
        <>
            <Carousel 
            autoPlay={true} 
            animation='slide' 
            indicatorContainerProps={{
                style:{
                zIndex:'1',
                marginTop:'-50px', 
                position:'relative',
                padding:'0 20px',
            }}}
            
            >
                {data.map((item, i) => <ImgItem key={i} data={item}/>)}
            </Carousel>
        </>
    )
}

export default Carou