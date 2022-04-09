import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from 'react-router-dom';

//require('dotenv').config();

function NavBarButton(props) {
    const nav = props.to;
    const title = props.title;
    const right = props.right || "";
    const left = props.left || "";
    const location = useLocation();
    let [searchParams] = useSearchParams();
    let [firstFavoriteRestaurantId, setFirstFavoriteRestaurantId] = useState("");
    const token = searchParams.get("token" || "");
    const headers = {
        'Content-Type': 'application/json',
        'token': token
        }

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/occasion/getFavoritesList`,
        {}, 
        {
            headers: headers
         })
            .then((res) => {
                setFirstFavoriteRestaurantId(res.data[0]);
            })
    },[]);

    return (
            <Link to={`/${nav}?restaurantid=${firstFavoriteRestaurantId}&token=${token}`} state={location}>
                <Button 
                    variant="red"
                    position="fixed" 
                    mx="10px" 
                    my="10px"
                    right={right}
                    left={left}
                    >
                    {title}
                </Button>
            </Link>
    );
}

export default NavBarButton;