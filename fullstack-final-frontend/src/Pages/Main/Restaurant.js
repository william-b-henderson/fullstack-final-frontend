import React from 'react';
import { Box,
    Flex,
    Heading,
    Text,
    FormControl,
    Input,
    Button,
     } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';

function Restaurant() {

    const params = useParams();

    return (
        <Flex 
            w="25vw" 
            h="35vh" 
            bgColor="black" 
            maxWidth="400px"
            borderRadius="xl"
            boxShadow="2xl"
            direction="column"
            justify="center"
            align="center"
            >
            <Text color="">Restaurant #{params.restaurantId}</Text>
        </Flex>
    )};

export default Restaurant;