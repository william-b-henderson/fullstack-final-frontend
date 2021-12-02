import React from 'react';
import { Box } from "@chakra-ui/react";
import NavBarButton from './NavBarButton';
import BackButton from './BackButton';

function NavBar(props) {
    const variant = props.variant || "";

    if (!variant) {
        return (
            <Box position="fixed" w="100vw" h="7vh"  top="0">
                <NavBarButton title="Favorites" to="favorites" left="10px"/>
                <NavBarButton title="Log Out" to="" right="10px"/>
            </Box>
        )
    }
    else if (variant === "Log Out") {
        return (
            <Box position="fixed" w="100vw" h="7vh"  top="0">
                <BackButton title="Occasions" left="10px"/>
                <NavBarButton title="Log Out" to="" right="10px"/>
            </Box>
        )
    }
}

export default NavBar;