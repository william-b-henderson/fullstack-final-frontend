import React from 'react';
import {
    Flex,
    Heading,
    Text,
    FormControl,
    Input,
    Button,
    } from "@chakra-ui/react";
 import { Link } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm';

function SignUp() {

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
                Sign Up
            </Heading>
            <Text fontSize="sm" color="gray.400" py="15" px="10%" textAlign="center">
                Please enter your email and password to log in!
            </Text>
            <LoginForm variant="Sign Up" />;
        </Flex>
    );
}

export default SignUp;