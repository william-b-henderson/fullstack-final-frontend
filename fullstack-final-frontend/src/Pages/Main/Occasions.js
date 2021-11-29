import React from 'react';
import { Box,
    Flex,
    Heading,
    Text,
    FormControl,
    Input,
    Button,
     } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import Occasion from '../../PageComponents/Occasions/Occasion'

function Occasions() {
    const navigate = useNavigate();

    return(
    <Flex 
            w="40vw" 
            h="70vh" 
            // bgColor="gray.400" 
            // maxWidth="400px"
            borderRadius="xl"
            // boxShadow="2xl"
            direction="row"
            justify="space-between"
            alignContent="space-between"
            wrap="wrap"
            >
        <Occasion title="Date" color="red" />
        <Occasion title="Friends" color="green"/>
        <Occasion title="Work" color="orange.700" />
        <Occasion title="Quick Bite" color="black"/>
    </Flex>
    );
}

export default Occasions;