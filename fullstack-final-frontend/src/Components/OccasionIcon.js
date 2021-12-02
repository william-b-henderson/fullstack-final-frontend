import React from 'react';
import { FaHeart, FaUserFriends } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiRun } from "react-icons/bi"
import {useMemo } from 'react';

function OccasionIcon(props) {
    const title = props.title.toLowerCase();

    const icon = useMemo(() => {
        switch(title) {
            case "date":
                return <FaHeart color="red" size="x" />
            case "work":
                return <BsFillBriefcaseFill color="#a07241" size="x" />
            case "friends":
                return <FaUserFriends color="green" size="x" />
            case "quick bite":
                return <BiRun color="black" size="x" />
            default:
                return <BsFillBriefcaseFill color="blue" size="x" />
        }
    }, [title]);

    return icon;
}

export default OccasionIcon;