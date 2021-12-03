import React, { useEffect, useState, useMemo } from 'react';
import { 
    // Box,
    Flex,
    // Text,
    Button,
    Heading,
    Image,
    IconButton
    } from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom';
import MenuPreview from './MenuPreview';
import RestaurantTag from './RestaurantTag';
import Rating from "./Rating";
import axios from 'axios';

function Restaurant() {

    let [searchParams] = useSearchParams();
    const restaurantId = searchParams.get("restaurantid" || "");
    const token = searchParams.get("token" || "");
    const exampleId = "WavvLdfdP6g8aZTtbBQHTw";
    const imageurl = "https://s3-media0.fl.yelpcdn.com/bphoto/vmH4W-1mWGhLPNQPne21Rg/l.jpg";
    const defaultRestaurant = {
        name: "Restaurant Name",
        id: exampleId,
        image_url: imageurl,
        url: "https://www.yelp.com",
        rating: 4,
        price: "$$",
        categories: ["Outdoor Seating", "French", "Dog-Friendly"],
        transactions: "",
        phone: "",
        photos: ["https://s3-media0.fl.yelpcdn.com/bphoto/vmH4W-1mWGhLPNQPne21Rg/l.jpg", 
                "https://s3-media0.fl.yelpcdn.com/bphoto/vmH4W-1mWGhLPNQPne21Rg/l.jpg", 
                "https://s3-media0.fl.yelpcdn.com/bphoto/vmH4W-1mWGhLPNQPne21Rg/l.jpg"]
    }
    let [restaurant, setRestaurant] = useState(defaultRestaurant);

    
    const headers = {
        'Content-Type': 'application/json',
        'token': token
        }

    useEffect(() => {
        axios.post("https://occasionally-final-project.herokuapp.com/occasion/getRestaurantDetails",
        {id: restaurantId},
        {
            headers: headers
        })
        .then(res => {
        console.log(res);
        setRestaurant(res.data);
        })
        .catch((error => {
            console.error(error);
        }))
    }, [restaurantId]);
    
    console.log(restaurant);

    const handleAddToFavorites = () => {
        axios.post("https://occasionally-final-project.herokuapp.com/occasion/addToFavorites",
        {restaurant: restaurantId},
        {
            headers: headers
        })
        .then(res => {
        console.log(res);
        })
        .catch((error => {
            console.error(error);
        }))
    }
    

    
    
    

    // const exampleRestaurantDescription = "This is a beautiful restaurant settled into the nice neighborhood of the financial district in San Francisco. Here you can enjoy a tasty french menu, along with an accompaning menu for your delightful dog. Please enjoy! "


    return (
        <>    
            <Flex 
                w="50%" 
                h="100%" 
                bgColor="black" 
                borderRadius="xl"
                direction="column"
                justify="center"
                align="center"
                >
                <Image src={restaurant.image_url || ""} boxSize="100%" borderRadius="xl" fit="cover" />
            </Flex>
            <Flex
                w="50%"
                h="100%"
                direction="column"
                borderRadius="xl"
                justify="center"
                align="center"
            >
                <Heading color="black" fontSize="4xl" align="center" fontFamily="palantino">{restaurant.name}</Heading>
                <Flex direction="row" w="102" h="18" marginY="10px">
                    <Rating title={restaurant.rating} />
                </Flex>
                <Flex w="85%" h="20%" justify="center" align="center" wrap="wrap" overflowY="scroll">
                    <RestaurantTag title={restaurant.price} />
                    { (restaurant.categories) ?
                        restaurant.categories.map((category) => {
                            return <RestaurantTag title={category} />
                        }): ""}
                </Flex>
                {/* <Box w="100%" h="25%" px="2%" overflowY="scroll">
                    <Text color="black" >{exampleRestaurantDescription}</Text>
                </Box> */}
                <Flex 
                    w="100%" 
                    h="20%"
                    paddingTop="40px"
                    justify="space-around"
                    align="center"
                    >
                    {/* <Button variant="red" >Directions</Button> */}
                    <Button size="lg" variant="red" onClick={handleAddToFavorites} >Add to Favorites</Button> 
                    <a 
                        href={restaurant.url} 
                        target="_blank" 
                        rel="noreferrer"
                        >
                        <IconButton 
                        icon={<Image maxH="100%" src="yelp/yelp_logo.svg" />}
                        _hover={{
                            outline: "solid red"
                        }} />
                    </a>
                </Flex>
            </Flex>
        </>
    )};

export default Restaurant;