import React from 'react';
import { Box,
    Flex,
    Heading,
    Text,
    FormControl,
    Input,
    Button,
     } from "@chakra-ui/react";
import { Link, useLocation } from 'react-router-dom';
import FavoritesListItem from './FavoritesListItem';

function FavoritesList(props) {

    const favoritesList = [
        {
            name: "Abe's Pizza",
            restaurantid: 1,
        },
        {
            name: "Panda Express",
            restaurantid: 2,
        },
        {  
            name: "Thai Basil",
            restaurantid: 3
        },
        {
            name: "Dumpling Express",
            restaurantid: 4,
        },
        {
            name: "Cafe Durant",
            restaurantid: 5,
        },
        {  
            name: "Momo's Kitchen",
            restaurantid: 6,
        },
        {
            name: "Foreign Cinema",
            restaurantid: 7,
        },
        {
            name: "McDonald's",
            restaurantid: 8,
        },
        {  
            name: "Jupiter's Pizza",
            restaurantid: 9,
        },
        {
            name: "Luna Grill",
            restaurantid: 10,
        },
        {
            name: "A5 Steakhouse",
            restaurantid: 11,
        },
        {  
            name: "Tako Sushi",
            restaurantid: 12,
        },
        {
            name: "Taco Bell",
            restaurantid: 13,
        },
        {
            name: "Delhi Diner",
            restaurantid: 14,
        },
        {  
            name: "Punjabi Dhaba",
            restaurantid: 15,
        },
        {
            name: "Blaze Pizza",
            restaurantid: 16,
        },
        {  
            name: "Chick-fil-A",
            restaurantid: 17,
        },
        {
            name: "Super Duper",
            restaurantid: 18,
        },
        {
            name: "Shalimar",
            restaurantid: 19,
        },
        {
            name: "Waterbar",
            restaurantid: 20,
        },
        
    ]

    return (
        <Box 
            position="fixed" 
            left="5vw" 
            w="15vw" 
            h="80vh" 
            overflowY="scroll" 
            borderRadius="xl"
            boxShadow="2xl"
            >
            <Flex 
                direction="column" 
                align="flex-start" 
                w="100%" 
                h="100%" 
                bgColor="gray.400"
                >
                <Flex 
                    w="15vw" 
                    h="2.5rem" 
                    justify="center" 
                    align="center"
                    bgColor="red"
                    color="white"
                    >   
                     <Heading as='h3' size='lg'>
                        Favorites List
                    </Heading>
                </Flex>
                {favoritesList.map((a) => (
                    <FavoritesListItem {...a} />
                ))}
            </Flex>
        </Box>
    )
}

export default FavoritesList;