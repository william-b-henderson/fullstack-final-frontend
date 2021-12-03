import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Box,
    Flex,
    Text,
    } from "@chakra-ui/react";
import { Link, useSearchParams } from 'react-router-dom';
import OccasionIcon from '../../Components/OccasionIcon';



function Occasions(props) {
    const title = props.title;
    const color = props.color;
    let [searchParams] = useSearchParams();
    const token = searchParams.get("token" || "");
    const headers = {
        'Content-Type': 'application/json',
        'token': token
        }
    let occasion = title.toLowerCase();
    let [occasionid, setOccasionId] = useState("");


    useEffect(() => {
        axios.post("https://occasionally-final-project.herokuapp.com/occasion/getRestaurantBasedOnOccasion",
        {occasion: occasion},
        {
            headers: headers
        })
        .then(res => {
        console.log(res);
        setOccasionId(res.data.id);
        })
        .catch((error => {
            console.error(error);
        }))
    }, []);


    return(
        <Link to={`/restaurants?occasion=${title.toLowerCase()}&restaurantid=${occasionid}&token=${token}`}>
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