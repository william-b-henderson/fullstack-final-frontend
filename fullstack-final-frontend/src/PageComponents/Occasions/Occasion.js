import React from 'react';
import { Box,
    Flex,
    Heading,
    Text,
    FormControl,
    Input,
    Button,
     } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaHeart, FaUser, FaUserFriends } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiRun } from "react-icons/bi"
import {useMemo } from 'react';
import OccasionIcon from '../../Components/OccasionIcon';
import { useSearchParams } from 'react-router-dom';



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