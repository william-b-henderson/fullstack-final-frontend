import React from 'react';
import { Button } from "@chakra-ui/react";
import { Link, useLocation } from 'react-router-dom';

function BackButton(props) {
    const title = props.title;
    const right = props.right || "";
    const left = props.left || "";
    const location = useLocation();
    let backLink = "/occasions";
    if (location.state !== null) {
        backLink = (location.state.pathname + location.state.search);
    }

    return (
            <Link to={backLink}>
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

export default BackButton;