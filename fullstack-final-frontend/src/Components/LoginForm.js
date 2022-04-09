import React, { useState } from 'react';
import axios from 'axios';
import { Input, FormControl, Button, Text } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';

//require('dotenv').config();

function LoginForm(props) {
    const variant = props.variant || "Login";
    let opposite;
    let link;
    if (variant === "Sign Up") {
        opposite = "Login";
        link = "";
    }
    else {
        opposite = "Sign Up"
        link = "signup";
    }


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChangePassword = (event) => setPassword(event.target.value);
    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleSubmit = () => {
    const payloadSignin = {
            email: email,
            password: password,
        }
    const payloadSignup = {
        email: email,
        password: password
    }
    const headers = {
            'Content-Type': 'application/json'
          }

        if (variant === "Login") {
            axios.post(`${process.env.REACT_APP_API_URL}/user/login`, payloadSignin, {
                headers: headers
            })
                .then(res => {
                    console.log(res);
                    navigate(`/occasions?token=${res.data.token}`);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else {
            console.log("about to post signup");
            axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, payloadSignup, {
                headers: headers
            })
                .then(res => {
                    console.log(res);
                    navigate(`/occasions?token=${res.data.token}`);
                })
                .catch((error) => {
                    console.error(error);
                });;
        }
        
    }


    return (
        <FormControl mt="15%" px="10%" color="black" align="center" onSubmit={handleSubmit}>
                <Input 
                    color="black"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Email"
                    _placeholder={{ color: "gray.500" }}
                    type="email"
                    variant="outline" 
                    size="sm" 
                    borderColor="red"
                    isRequired/>
                <Input 
                    color="black"
                    value={password}
                    onChange={handleChangePassword}
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
                    Don't have an account? 
                    <Link to={`/${link}`}>{" "}{opposite}</Link>
                </Text>
                {/* <Link to="/occasions"> */}
                    <Button 
                        w="50%" 
                        color="white" 
                        bgColor="red"
                        onClick={handleSubmit}
                        _hover={{
                            color: "red",
                            bgColor: "white",
                            border: "solid red",
                        }}
                        >
                        {variant}
                    </Button>
                {/* </Link> */}
            </FormControl>
    )
}

export default LoginForm;