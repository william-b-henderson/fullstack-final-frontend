import React from 'react';
import {
    Flex
    } from "@chakra-ui/react";
import NavBar from '../../Components/NavBar';
import FavoritesList from '../../PageComponents/Favorites/FavoritesList';
import RestaurantWrapper from '../../Components/RestaurantWrapper';
import Restaurant from '../../PageComponents/Occasions/Restaurant/Restaurant';

function Favorites(props) {

    return (
        <>
            <NavBar variant="Log Out" />
            <FavoritesList />
            <Flex direction="row" align="center"  gap="10px">
                <RestaurantWrapper>
                    <Restaurant />
                </RestaurantWrapper>
            </Flex>
        </>
    )
}

export default Favorites;