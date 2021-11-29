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

function MenuPreview(props) {
    const image = props.image;
    const description = props.description;
    const price = props.price;

    return (
        <Flex w="25%" h="75%" bgColor="gray.400" direction="column" align="center">
            <Flex w="100%" h="85%" bgColor="gray.500">
                <Text>{image}</Text>
            </Flex>     
            <Text color="black">{description} - ${price}</Text>                               
        </Flex>
    )
}

export default MenuPreview;