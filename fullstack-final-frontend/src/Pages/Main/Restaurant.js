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
import MenuPreview from '../../PageComponents/Occasions/Restaurant/MenuPreview';

function Restaurant() {

    const params = useParams();

    return (
        <>    
            <Flex 
                w="50%" 
                h="50%" 
                bgColor="black" 
                borderRadius="xl"
                direction="column"
                justify="center"
                align="center"
                >
                <Text color="">Restaurant #{params.restaurantId}</Text>
            </Flex>
            <Flex
                w="50%"
                h="50%"
                bgColor="gray.400"
                direction="column"
                borderRadius="xl"
                justify="space-around"
                align="center"
            >
                <Text color="black" fontSize="4xl">Restaurant Name</Text>
                <Box bgColor="gray.800" w="25%" h="10%">
                    <Text color="white">Rating</Text>
                </Box>
                <Flex bgColor="gray.500" w="75%" h="10%" justify="center">
                    <Text>Tag#1 Tag#2 Tag#3</Text>
                </Flex>
                <Box w="100%" h="25%" bgColor="gray.600">
                    <Text>Restaurant Description</Text>
                </Box>
                <Flex 
                    w="100%" 
                    h="20%" 
                    bgColor="gray.500" 
                    justify="space-around"
                    align="center"
                    >
                    <Button>Directions</Button>
                    <Button>Add to Favorites</Button>
                </Flex>
            </Flex>
            <Flex direction="row" w="100%" h="50%" justify="space-evenly" align="center">
                <MenuPreview image="Image 1" description="A Delicious Porkchop" price = "15" />
                <MenuPreview image="Image 2" description="A Tasty Burger" price = "8" />
                <MenuPreview image="Image 3" description="A Juicy Steak" price = "24" />
            </Flex>
        </>
    )};

export default Restaurant;