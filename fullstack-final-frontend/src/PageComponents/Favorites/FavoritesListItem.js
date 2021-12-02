import React from 'react';
import { Flex, Button } from "@chakra-ui/react";
import { Link, useLocation } from 'react-router-dom';

function FavoritesListItem(props) {
    const name = props.name;
    const restaurantid = props.restaurantid;
    const location = useLocation();

    return (
        <Link to={location.pathname + "?restaurantid=" + restaurantid}>
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
                        {name} #{restaurantid}
                </Flex>
            </Button>
        </Link>
        
    )
}

export default FavoritesListItem;