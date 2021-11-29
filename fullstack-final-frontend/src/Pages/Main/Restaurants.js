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
import { ImArrowRight2 } from 'react-icons/im';
import { ImArrowLeft2 } from 'react-icons/im';

function Restaurants() {

    return (
        <>
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
                <Outlet />
            </Flex>
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
        </>
    )};

export default Restaurants;