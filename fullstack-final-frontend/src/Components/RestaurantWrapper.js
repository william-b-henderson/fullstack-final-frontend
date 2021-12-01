import React from 'react';
import { Box,
    Flex,
    Heading,
    Text,
    FormControl,
    Input,
    Button,
     } from "@chakra-ui/react";

function RestaurantWrapper(props) {
    const { children, ...rest } = props

    return (
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
                    {...rest}
                >
                    {children}
                </Flex>
    );
}

export default RestaurantWrapper;