import React from 'react';
import { Flex, Text, Image } from "@chakra-ui/react";

function MenuPreview(props) {
    const imageurl = props.image || "4-2-food-png.png";
    const description = props.description;
    const price = props.price;

    return (
        <Flex 
            w="25%" 
            h="75%" 
            border="1px solid black" 
            direction="column" 
            align="center"
            borderRadius="xl"
            >
            <Flex w="100%" h="85%" borderRadius="xl" justify="center">
                <Image src={imageurl} alt="Food Image"/>
            </Flex>     
            <Text fontWeight="semibold" color="black">{description} - ${price}</Text>                               
        </Flex>
    )
}

export default MenuPreview;