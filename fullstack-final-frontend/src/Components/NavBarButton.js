import React from 'react';
import { Button } from "@chakra-ui/react";
import { Link, useLocation } from 'react-router-dom';

function NavBarButton(props) {
    const nav = props.to;
    const title = props.title;
    const right = props.right || "";
    const left = props.left || "";
    const location = useLocation();

    return (
            <Link to={`/${nav}`} state={location}>
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