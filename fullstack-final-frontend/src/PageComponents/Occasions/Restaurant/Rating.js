import React from 'react';
import { Image } from '@chakra-ui/react';

function RestaurantTag(props) {
    const rating = parseFloat(props.title);
    const flooredRating = Math.floor(rating);

    if (flooredRating === rating) {
        return <Image src={`yelp/regular/regular_${flooredRating}.png`} color="black" alt={"Rating: " + rating.toString()}/>
    }
    else {
        return <Image src={`yelp/regular/regular_${flooredRating}_half.png`} color="black" alt={"Rating: " + rating.toString()} />
    }
}

export default RestaurantTag;