import React from 'react';
import { Box,
    Flex,
    
    Heading,
    Text,
    FormControl,
    Input,
    Button,
     } from "@chakra-ui/react";
import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';
import { ImArrowLeft2 } from 'react-icons/im';
import OccasionIcon from '../../Components/OccasionIcon';
import Restaurant from './Restaurant';

function Restaurants() {

    const params = useParams();
    let [searchParams, setSearchParams] = useSearchParams();

    const restaurantId = searchParams.get("restaurantid" || "");
    const occasion = searchParams.get("occasion" || "");

    function nextRestaurant(restaurantId) { return parseInt(restaurantId) + 1 };
    function previousRestaurant(restaurantId) { return parseInt(restaurantId) - 1 };

    return (
        <>
            <Link to={`/restaurants?occasion=${occasion}&restaurantid=${previousRestaurant(restaurantId)}`}>
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
                // bgColor="gray.200"
                direction="column"
                justify="center"
                align="center"
            >
                <Box
                    w="10vw"
                    h="10vh"
                    // align="center"
                    // justify="center"
                    >
                    <OccasionIcon title={searchParams.get("occasion")} />
                </Box>
                <Flex 
                    w="50vw" 
                    h="70vh" 
                    bgColor="white" 
                    borderRadius="xl"
                    boxShadow="2xl"
                    wrap="wrap"
                    direction="row"
                    justify="flex-start"
                    align="flex-start"
                >
                    <Restaurant />
                </Flex>
                <Link to="/occasions">
                    <Button colorScheme="blue">Change Occasion</Button>
                </Link>
            </Flex>
            <Link to={`/restaurants?occasion=${occasion}&restaurantid=${nextRestaurant(restaurantId)}`}>
                <Button
                    w="70px"
                    h="70px"
                    borderRadius="full"
                    ml="10px"
                    bgColor="white"
                    color="black"
                    boxShadow="xl"
                    _hover={{
                        bgColor: "black",
                        color: "white"
                    }}

                >
                    < ImArrowRight2 size="x" />
                </Button>
            </Link>
        </>
    )};

export default Restaurants;