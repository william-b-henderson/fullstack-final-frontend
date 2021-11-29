import React from 'react';
import { Box,
    Flex,
    
    Heading,
    Text,
    FormControl,
    Input,
    Button,
     } from "@chakra-ui/react";
import { Link, Outlet } from 'react-router-dom';

function Restaurants() {

    return (
        <Flex 
            w="50vw" 
            h="70vh" 
            bgColor="white" 
            maxWidth="400px"
            borderRadius="xl"
            boxShadow="2xl"
            direction="column"
            justify="flex-start"
            align="center"
        >
            <Outlet />
        </Flex>
    )};

export default Restaurants;