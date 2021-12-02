import React from 'react';
import { Text } from "@chakra-ui/react";

function RestaurantTag(props) {
    const title = props.title

    return (
            <Text 
                borderRadius="lg"
                bgColor="red"
                textColor="white"
                textAlign="center"
                fontSize="15"
                justifyContent="center"
                fontWeight="700"
                border="2px solid red"
                px="5px"
                m="2px"
                maxH="100%">
                {title}
            </Text>
    )
}

export default RestaurantTag;