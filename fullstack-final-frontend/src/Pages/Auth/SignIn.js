import React from 'react';
import { Flex, Heading, Text } from "@chakra-ui/react";
import LoginForm from '../../Components/LoginForm';

function SignIn(props) {

    const variant = props.variant || "Login";

    return (
        <Flex 
            w="50vw" 
            h="70vh" 
            bgColor="white" 
            maxWidth="400px"
            borderRadius="xl"
            boxShadow="2xl"
            direction="column"
            justify="flex-start"
            align="center"
            > 
            <Heading size="xl" color="black" pt="80px">
                {variant}
            </Heading>
            <Text fontSize="sm" color="gray.400" py="15" px="10%" textAlign="center">
                Please enter your email and password to {variant.toLowerCase()}!
            </Text>
            <LoginForm variant={variant} />
        </Flex>
    );
}

export default SignIn;