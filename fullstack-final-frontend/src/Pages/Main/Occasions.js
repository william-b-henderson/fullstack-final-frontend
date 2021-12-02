import React from 'react';
import { Flex } from "@chakra-ui/react";
import Occasion from '../../PageComponents/Occasions/Occasion'
import NavBar from '../../Components/NavBar';

function Occasions() {

    return(
        <>
            <NavBar />
            <Flex 
                w="40vw" 
                h="70vh" 
                minWidth="400px"
                borderRadius="xl"
                direction="row"
                justify="space-between"
                alignContent="space-between"
                wrap="wrap"
                >
                <Occasion title="Date" color="red" />
                <Occasion title="Friends" color="green"/>
                <Occasion title="Work" color="orange.700" />
                <Occasion title="Quick Bite" color="black"/>
            </Flex>
        </>
    );
}

export default Occasions;