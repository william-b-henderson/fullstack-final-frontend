import React from 'react';
import { Box,
    Flex,
    Text,
    } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import OccasionIcon from '../../Components/OccasionIcon';



function Occasions(props) {
    const title = props.title;
    const color = props.color;

    return(
        <Link to={`/restaurants?occasion=${title.toLowerCase()}&restaurantid=1`}>
            <Flex 
                    w="20vw" 
                    h="30vh" 
                    bgColor="white" 
                    maxWidth="300px"
                    maxHeight="300px"
                    borderRadius="xl"
                    boxShadow="2xl"
                    direction="column"
                    justify="flex-start"
                    align="center"
                    _hover={{
                        outline: "solid red",
                    }}
                    >
                    <Box w="100%" h="90%" color={color} >
                        <OccasionIcon title={title} />
                    </Box>
                    <Text color="black">{title}</Text>
            </Flex>
        </Link>
    );
}

export default Occasions;