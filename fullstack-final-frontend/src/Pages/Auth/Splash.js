import React from 'react';
import { 
    Box,
    Flex, 
    Spacer, 
    Text, 
    Heading,
    Input,
    FormControl,
    Button } from "@chakra-ui/react";


function Splash() {

    return (
    <Flex 
        bgColor="black" 
        justify="center" 
        align="center"
        w="100vw" h="100vh"
        bgGradient="linear(to-t, red.300, white)" 
        >
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
                Login
            </Heading>
            <Text fontSize="sm" color="gray.400" py="15" px="10%" textAlign="center">
                Please enter you username and password to log in!
            </Text>
            <FormControl mt="15%" px="10%" color="black" align="center">
                <Input 
                    color="black"
                    placeholder="Email"
                    _placeholder={{ color: "gray.500" }}
                    type="email"
                    variant="outline" 
                    size="sm" 
                    borderColor="red"
                    isRequired/>
                <Input 
                    color="black"
                    placeholder="Password"
                    _placeholder={{ color: "gray.500" }}
                    type="password"
                    variant="outline" 
                    size="sm" 
                    mt="10%"
                    mb="5%"
                    borderColor="red"
                    isRequired/>
                <Text color="gray.500" fontSize="xs" mb="20%">
                    Don't have an account? Sign Up
                </Text>
                <Button 
                    w="50%" 
                    color="white" 
                    bgColor="red"
                    
                    _hover={{
                        color: "red",
                        bgColor: "white",
                        border: "solid red",
                    }}
                    >
                    Login
                </Button>
                
            </FormControl>
        </Flex>
    </Flex>
    );
}

export default Splash;