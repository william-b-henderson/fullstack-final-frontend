import React, { useState } from 'react';
import { useEffect } from 'react';
import { 
    Box,
    Flex,
    Heading
    } from "@chakra-ui/react";
import FavoritesListItem from './FavoritesListItem';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

function FavoritesList() {

    const defaultfavoritesList = [
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

    let userid = "123";
    let [favoritesList, setFavoritesList] = useState(defaultfavoritesList);
    let [user, setUser] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/user/me", { id: userid })
            .then((res) => {
                setUser(res);
            })
            .catch((error) => {
                console.error(error);
            })
        axios.get("http://localhost:8080/occasion/getFavoritesList", { user })
            .then((res) => {
                setFavoritesList(res);
            })
    },[user, userid]);


    

    let [searchParams] = useSearchParams();
    const navigate = useNavigate();
   

    useEffect(() => {
        const restaurantId = searchParams.get("restaurantid" || "");
        if (restaurantId === null) {
            const firstFavoriteId = favoritesList[0].restaurantid;
            navigate(`?restaurantid=${firstFavoriteId}`);
        }
        return;
    })

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