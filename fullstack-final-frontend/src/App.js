import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Splash from './Pages/Auth/Splash';
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import Occasions from "./Pages/Main/Occasions";
import Restaurants from "./Pages/Main/Restaurants"
import Restaurant from "./Pages/Main/Restaurant"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <ChakraProvider theme={theme}>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} >
                    <Route index element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="occasions" element={<Occasions />} />
                    <Route path="restaurants" element={<Restaurants />}>
                      <Route path=":restaurantId" element={<Restaurant />} />
                    </Route>
                    <Route path="*" element={
                      <main style={{ padding: "1rem" }}>
                      <p style={{color: "black"}}>ERROR 404: Page Not Found</p>
                      </main>
                      }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
