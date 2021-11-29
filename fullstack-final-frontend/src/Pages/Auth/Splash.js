import React from 'react';
import Background from "../../Components/Background";
import { Outlet } from 'react-router-dom';


function Splash() {

    return (
        <Background>
            <Outlet />
        </Background>
    );
}

export default Splash;