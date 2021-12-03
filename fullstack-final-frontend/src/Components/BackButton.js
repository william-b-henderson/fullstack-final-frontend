import React from 'react';
import { Button } from "@chakra-ui/react";
import { Link, useSearchParams } from 'react-router-dom';

function BackButton(props) {
    const title = props.title;
    const right = props.right || "";
    const left = props.left || "";

    let [searchParams] = useSearchParams();
    const token = searchParams.get("token" || "");

    return (
            <Link to={`/occasions?token=${token}`}>
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