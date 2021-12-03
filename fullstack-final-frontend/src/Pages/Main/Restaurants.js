import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    Box,
    Flex,
    Button,
    } from "@chakra-ui/react";
import { Link, useSearchParams } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';
import { ImArrowLeft2 } from 'react-icons/im';
import OccasionIcon from '../../Components/OccasionIcon';
import Restaurant from '../../PageComponents/Occasions/Restaurant/Restaurant';
import NavBar from '../../Components/NavBar';
import RestaurantWrapper from '../../Components/RestaurantWrapper';

function Restaurants() {

    let [searchParams] = useSearchParams();
    let [nextRestaurantId, setNextRestaurantId] = useState("");
    const token = searchParams.get("token" || "");
    const restaurantId = searchParams.get("restaurantid" || "");
    const occasion = searchParams.get("occasion" || "");

    function nextRestaurant(restaurantId) { return nextRestaurantId };
    function previousRestaurant(restaurantId) { return nextRestaurantId };

    const headers = {
        'Content-Type': 'application/json',
        'token': token
        }

    useEffect(() => {
        axios.post("https://occasionally-final-project.herokuapp.com/occasion/getRestaurantBasedOnOccasion",
        {occasion: occasion},
        {
            headers: headers
        })
        .then(res => {
        console.log(res);
        setNextRestaurantId(res.data.id);
        })
        .catch((error => {
            console.error(error);
        }))
    }, [restaurantId]);
    


    return (
        <>
            <NavBar />
            <Link to={`/restaurants?occasion=${occasion}&restaurantid=${previousRestaurant(restaurantId)}&token=${token}`}>
                <Button
                    w="70px"
                    h="70px"
                    borderRadius="full"
                    mr="10px"
                    bgColor="white"
                    color="black"
                    boxShadow="xl"
                    _hover={{
                        bgColor: "black",
                        color: "white"
                    }}
                >
                    < ImArrowLeft2 size="x" />
                </Button>
            </Link>
            <Flex
                w="50vw"
                h="90vh"
                minW="800px"
                direction="column"
                justify="center"
                align="center"
            >
                <Box
                    w="10vw"
                    h="10vh"
                >
                    <OccasionIcon title={searchParams.get("occasion")} />
                </Box>
                <RestaurantWrapper>
                    <Restaurant />
                </RestaurantWrapper>
                <Link to={`/occasions?token=${token}`}>
                    <Button variant="white" mt="10px">Change Occasion</Button>
                </Link>
            </Flex>
            <Link to={`/restaurants?occasion=${occasion}&restaurantid=${nextRestaurant(restaurantId)}&token=${token}`}>
                <Button
                    w="70px"
                    h="70px"
                    variant="white"
                    ml="10px"
                    borderRadius="full"
                    boxShadow="xl"
                >
                    < ImArrowRight2 size="x" />
                </Button>
            </Link>
        </>
    )};

export default Restaurants;