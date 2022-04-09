import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Flex, Button } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from 'react-router-dom';

//require('dotenv').config();

function FavoritesListItem(props) {
    const restaurantId = props.restaurantid;
    const location = useLocation();
    let [searchParams] = useSearchParams();
    const token = searchParams.get("token" || "");
    const headers = {
        'Content-Type': 'application/json',
        'token': token
        }
    let [restaurantName, setRestaurantName] = useState("");

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/occasion/getRestaurantDetails`,
        {id: restaurantId},
        {
            headers: headers
        }) //CHANGE TO RESTAURANTID
        .then(res => {
        console.log(res);
        setRestaurantName(res.data.name);
        })
        .catch((error => {
            console.error(error);
        }))
    }, []);

    return (
        <Link to={location.pathname + "?restaurantid=" + restaurantId + "&token=" + token}>
            <Button 
                bgColor="white"
                color="black" 
                px="0"
                borderRadius="0"
                borderBottom="1px" 
                _hover={{color: "white", bgColor: "black"}}
                _focus={{textDecoration: "underline", color: "white", bgColor: "black"}}
                >
                <Flex w="15vw" h="2.5rem" justify="center" align="center">   
                        {restaurantName}
                </Flex>
            </Button>
        </Link>
        
    )
}

export default FavoritesListItem;