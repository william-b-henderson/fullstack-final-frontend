import React from 'react';
import { 
    Box,
    Flex,
    Text,
    Button,
    Heading,
    Image,
    IconButton
    } from "@chakra-ui/react";
import { useSearchParams } from 'react-router-dom';
import MenuPreview from './MenuPreview';
import RestaurantTag from './RestaurantTag';
import Rating from "./Rating";

function Restaurant() {

    let [searchParams] = useSearchParams();
    const restaurantId = searchParams.get("restaurantid" || "");
    const exampleRestaurantDescription = "This is a beautiful restaurant settled into the nice neighborhood of the financial district in San Francisco. Here you can enjoy a tasty french menu, along with an accompaning menu for your delightful dog. Please enjoy! "
    const imageurl = "https://s3-media0.fl.yelpcdn.com/bphoto/vmH4W-1mWGhLPNQPne21Rg/l.jpg";

    if (restaurantId) {
        //const restaurantPayload = fetch();
    }

    return (
        <>    
            <Flex 
                w="50%" 
                h="50%" 
                bgColor="black" 
                borderRadius="xl"
                direction="column"
                justify="center"
                align="center"
                >
                <Image src={imageurl} boxSize="100%" borderRadius="xl" fit="cover" />
                {/* <Text color="">Restaurant #{restaurantId}</Text> */}
            </Flex>
            <Flex
                w="50%"
                h="50%"
                direction="column"
                borderRadius="xl"
                justify="space-around"
                align="center"
            >
                <Heading color="black" fontSize="4xl" align="center" fontFamily="palantino">Restaurant Name</Heading>
                <Flex direction="row" w="102" h="18">
                    <Rating title="4" />
                </Flex>
                <Flex w="85%" h="20%" justify="center" align="center" wrap="wrap" overflowY="scroll">
                    <RestaurantTag title="Outdoor Dining" />
                    <RestaurantTag title="French" />
                    <RestaurantTag title="Spicy" />
                    <RestaurantTag title="Dog Friendly" />
                    <RestaurantTag title="Takout" />
                </Flex>
                <Box w="100%" h="25%" px="2%" overflowY="scroll">
                    <Text color="black" >{exampleRestaurantDescription}</Text>
                </Box>
                <Flex 
                    w="100%" 
                    h="20%"  
                    justify="space-around"
                    align="center"
                    >
                    <Button variant="red" >Directions</Button>
                    <Button variant="red" >Add to Favorites</Button> 
                    <a 
                        href="https://www.yelp.com" 
                        target="_blank" 
                        rel="noreferrer">
                        <IconButton 
                        icon={<Image maxH="80%" src="yelp/yelp_logo.svg" />} />
                    </a>
                </Flex>
            </Flex>
            <Flex direction="row" w="100%" h="50%" justify="space-evenly" align="center">
                <MenuPreview image="" description="A Delicious Porkchop" price = "15" />
                <MenuPreview image="" description="A Tasty Burger" price = "8" />
                <MenuPreview image="" description="A Juicy Steak" price = "24" />
            </Flex>
        </>
    )};

export default Restaurant;